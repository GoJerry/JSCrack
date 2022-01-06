# coding:utf-8
import requests
import execjs
from lxml import etree

# https://www.cde.org.cn/main/xxgk/listpage/9f9c74c73e0f8f56a8bfbc646055026d

with open('getcookie.js', 'r', encoding='utf-8') as f:
    js1 = f.read()
    ecjs = execjs.compile(js1)


class SpiderMain(object):
    def __init__(self):
        # 参数
        self.F82S = ''
        self.F82T = ''
        self.F82T_true = ''
        self.JSESSIONID = ''
        self.meta = ''
        self.url = 'https://www.cde.org.cn/main/xxgk/listpage/9f9c74c73e0f8f56a8bfbc646055026d'
        self.url_list = 'https://www.cde.org.cn/main/xxgk/getMenuList'
        # 请求头
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "Host": "www.cde.org.cn",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36"
        }
        self.session = requests.session()
        # 请求cookie
        self.cookies = {
            'FSSBBIl1UgzbN7N80S': '',
            'FSSBBIl1UgzbN7N80T': '',
        }
        # 列表页请求参数
        self.data = {
            "statenow": "0",
            "year": "2022",
            "drugtype": "",
            "applytype": "",
            "acceptid": "",
            "drugname": "",
            "company": "",
            "pageSize": "10",
            "pageNum": "1",
        }

    def getCookie(self):

        rsq = self.session.get(self.url, headers=self.headers)
        rsq.close()
        # 第一次请求得到假的f82s,f82t,和metacontent
        self.F82S = rsq.cookies['FSSBBIl1UgzbN7N80S']
        self.F82T = rsq.cookies['FSSBBIl1UgzbN7N80T']
        rsq_html = etree.HTML(rsq.text)
        self.meta = rsq_html.xpath('//*[@id="9DhefwqGPrzGxEp9hPaoag"]/@content')[0]
        self.F82T_true = ecjs.call("getcookie", self.meta, self.F82T)
        self.cookies['FSSBBIl1UgzbN7N80S'] = self.F82S
        self.cookies['FSSBBIl1UgzbN7N80T'] = self.F82T_true
        _ = self.session.get(self.url, headers=self.headers, cookies=self.cookies)
        print(self.session.cookies.get_dict())

    def getlist(self):
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://www.cde.org.cn',
            'Referer': 'https://www.cde.org.cn/main/xxgk/listpage/9f9c74c73e0f8f56a8bfbc646055026d',
            'Accept-Language': 'zh-CN,zh;q=0.9',
        }
        response = self.session.post(self.url_list, headers=headers, cookies=self.cookies, json=self.data)
        json_data = response.json()
        print(json_data)


if __name__ == '__main__':
    spider = SpiderMain()
    spider.getCookie()
    spider.getlist()
