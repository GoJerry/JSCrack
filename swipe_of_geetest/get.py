import requests
import execjs
import time
import re
import json
from PIL import Image
import numpy as np
import random


class Geetest(object):
    user_agent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
    session = requests.session()

    def first_get_php(self):
        gt_url = f"https://www.geetest.com/demo/gt/register-slide-official?t={int(time.time() * 1000)}"
        gt_res = self.session.get(gt_url, headers={"user-agent": self.user_agent})
        php_data = gt_res.json()
        challenge = php_data.get("challenge")
        gt = php_data.get("gt")

        with open("./JS/get_w.js", 'r', encoding="utf-8")as f:
            js_content = f.read()
        ctx = execjs.compile(js_content)
        aes_key = ctx.call("jNfC")

        # get.php
        with open("./JS/get_w.js", 'r', encoding="utf-8")as f:
            js_content = f.read()
        ctx = execjs.compile(js_content)
        new_w = ctx.call("generate", challenge, gt, aes_key)

        url = "https://api.geetest.com/get.php"

        callback = f"geetest_{int(time.time() * 1000)}"

        params = {
            "gt": gt,
            "challenge": challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": new_w,
            "callback": callback
        }
        res = self.session.get(url, headers={"User-agent": self.user_agent, "Host": "api.geetest.com",
                                             "Referer": "https://www.geetest.com/show"}, params=params)

        json_data = res.text
        s = re.findall(f"{callback}\((.*)\)", json_data, re.S)[0]
        res_data = json.loads(s)

        return {"res_data": res_data, "gt": gt, "challenge": challenge, "aes_key": aes_key}

    def ajax_php(self, php_data):

        callback = f"geetest_{int(time.time() * 1000)}"
        url = "https://api.geetest.com/ajax.php"

        with open("./JS/get_w.js", 'r', encoding="utf-8")as f:
            js_content = f.read()
        ctx = execjs.compile(js_content)
        second_w = ctx.call("two_eval", php_data["challenge"], php_data["gt"], php_data["res_data"],
                            php_data["aes_key"])

        ajax_params = {
            "gt": php_data["gt"],
            "challenge": php_data["challenge"],
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": second_w,
            "callback": callback
        }
        ajax_res = self.session.get(url, headers={"User-agent": self.user_agent, "Host": "api.geetest.com",
                                                  "Referer": "https://www.geetest.com/show"}, params=ajax_params)
        print(ajax_res.text)

    def second_php(self, php_data):
        callback = f"geetest_{int(time.time() * 1000)}"

        url = "https://api.geetest.com/get.php"
        data = {
            'is_next': "true",
            'type': 'slide3',
            'gt': php_data["gt"],
            'challenge': php_data['challenge'],
            'https': "true",
            'protocol': 'https://',
            'offline': 'false',
            'product': 'embed',
            'api_server': 'api.geetest.com',
            'isPC': "true",
            'width': '100%',
            'callback': callback
        }

        response_img_json = self.session.get(url, headers={"User-agent": self.user_agent, "Host": "api.geetest.com",
                                                           "Referer": "https://www.geetest.com/show"}, params=data)
        s = re.findall(f"{callback}\((.*)\)", response_img_json.text, re.S)[0]
        res_data = json.loads(s)
        print(res_data)
        return res_data

    @staticmethod
    def core(path, index):

        # js中获取到拼图还原的顺序
        position = [
            [157, 80, 167, 160], [145, 80, 155, 160], [265, 80, 275, 160],
            [277, 80, 287, 160], [181, 80, 191, 160], [169, 80, 179, 160],
            [241, 80, 251, 160], [253, 80, 263, 160], [109, 80, 119, 160],
            [97, 80, 107, 160], [289, 80, 299, 160], [301, 80, 311, 160],
            [85, 80, 95, 160], [73, 80, 83, 160], [25, 80, 35, 160],
            [37, 80, 47, 160], [13, 80, 23, 160], [1, 80, 11, 160],
            [121, 80, 131, 160], [133, 80, 143, 160], [61, 80, 71, 160],
            [49, 80, 59, 160], [217, 80, 227, 160], [229, 80, 239, 160],
            [205, 80, 215, 160], [193, 80, 203, 160], [145, 0, 155, 80],
            [157, 0, 167, 80], [277, 0, 287, 80], [265, 0, 275, 80],
            [169, 0, 179, 80], [181, 0, 191, 80], [253, 0, 263, 80],
            [241, 0, 251, 80], [97, 0, 107, 80], [109, 0, 119, 80],
            [301, 0, 311, 80], [289, 0, 299, 80], [73, 0, 83, 80],
            [85, 0, 95, 80], [37, 0, 47, 80], [25, 0, 35, 80],
            [1, 0, 11, 80], [13, 0, 23, 80], [133, 0, 143, 80],
            [121, 0, 131, 80], [49, 0, 59, 80], [61, 0, 71, 80],
            [229, 0, 239, 80], [217, 0, 227, 80], [193, 0, 203, 80],
            [205, 0, 215, 80]
        ]
        # js中获取到新图片的位置
        mm = [
            [0, 0], [10, 0], [20, 0], [30, 0],
            [40, 0], [50, 0], [60, 0], [70, 0],
            [80, 0], [90, 0], [100, 0], [110, 0],
            [120, 0], [130, 0], [140, 0], [150, 0],
            [160, 0], [170, 0], [180, 0], [190, 0],
            [200, 0], [210, 0], [220, 0], [230, 0],
            [240, 0], [250, 0], [0, 80], [10, 80],
            [20, 80], [30, 80], [40, 80], [50, 80],
            [60, 80], [70, 80], [80, 80], [90, 80],
            [100, 80], [110, 80], [120, 80], [130, 80],
            [140, 80], [150, 80], [160, 80], [170, 80],
            [180, 80], [190, 80], [200, 80], [210, 80],
            [220, 80], [230, 80], [240, 80], [250, 80]
        ]
        path_full = []
        for k, i in enumerate(path):
            img = Image.open(i)
            to_image = Image.new('RGB', (260, 160))
            for index, p in enumerate(position):
                cropped = img.crop(tuple(p))  # (left, upper, right, lower)
                to_image.paste(cropped, (mm[index][0], mm[index][1]))
            to_image.save(f'{k}.jpg')
            path_full.append(to_image)

        def is_similar_color(x_pixel, y_pixel):
            # 颜色对比
            if sum(np.abs(np.array(x_pixel) - np.array(y_pixel))) >= 200:
                return True

        # 计算距离
        def get_offset_distance(cut_image, full_image, index):
            for x in range(cut_image.width):
                for y in range(cut_image.height):
                    cpx = cut_image.getpixel((x, y))
                    fpx = full_image.getpixel((x, y))
                    if is_similar_color(cpx, fpx):
                        img = full_image.crop((x, y, x + 45, y + 40))
                        # 保存一下计算出来位置图片，看看是不是缺口部分
                        img.save("3.jpg")
                        # return [{"x": x+15, "y": random.randint(-3, 3)}]
                        # return [{"x": x-7, "y": random.randint(-3, 3)}]
                        return [{"x": x - 6, "y": random.randint(-3, 3)}]

        return get_offset_distance(path_full[0], path_full[1], index)


if __name__ == '__main__':
    g = Geetest()
    get_data = g.first_get_php()
    g.ajax_php(get_data)
    g.second_php(get_data)
