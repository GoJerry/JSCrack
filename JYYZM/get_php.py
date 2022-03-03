import requests
import execjs
import time
import re
import json

user_agent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"


def get_php():
    session = requests.session()
    gt_url = f"https://www.geetest.com/demo/gt/register-fullpage-official?t={int(time.time() * 1000)}"
    gt_res = session.get(gt_url, headers={"user-agent": user_agent})
    gt_data = gt_res.json()
    challenge = gt_data.get("challenge")
    gt = gt_data.get("gt")
    callback = f"geetest_{int(time.time()*1000)}"

    with open("./get_w.js", 'r', encoding="utf-8")as f:
        js_content = f.read()
        ctx = execjs.compile(js_content)
        aes_key = ctx.call("jNfC")

    with open("./get_w.js", 'r', encoding="utf-8")as f:
        js_content = f.read()
        ctx = execjs.compile(js_content)
        new_w = ctx.call("generate", challenge, gt, aes_key)

    get_url = "https://api.geetest.com/get.php"
    params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": new_w,
        "callback": callback
    }
    res = session.get(get_url, headers={"User-agent": user_agent, "Host": "api.geetest.com",
                                        "Referer": "https://www.geetest.com/show"}, params=params)
    json_data = res.text
    s = re.findall(f"{callback}\((.*)\)", json_data, re.S)[0]
    res_data = json.loads(s)

    ajax_url = "https://api.geetest.com/ajax.php"

    with open("./get_w.js", 'r', encoding="utf-8")as f:
        js_content = f.read()
        ctx = execjs.compile(js_content)
        second_w = ctx.call("two_eval", challenge, gt, res_data, aes_key)

    ajax_params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": second_w,
        "callback": f"geetest_{int(time.time()*1000)}"
    }
    ajax_res = session.get(ajax_url, headers={"User-agent": user_agent, "Host": "api.geetest.com",
                                              "Referer": "https://www.geetest.com/show"}, params=ajax_params)
    print(ajax_res.text)


if __name__ == '__main__':
    get_php()
