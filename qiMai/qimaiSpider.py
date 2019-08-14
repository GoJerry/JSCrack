# coding: utf-8
import requests
import os
import execjs

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
}

cookies = dict()


def getanaly(synct, params):
    js_path = "qimai.js"
    with open(js_path, 'r', encoding="utf-8") as f:
        js_content = f.read()
        ctx = execjs.compile(js_content)
        new_pwd = ctx.call("get0analysisV2", synct, params)
        return new_pwd


def qimai():
    session = requests.session()
    resp = requests.get('https://www.qimai.cn/rank', headers=headers, verify=False)
    cookies.update(resp.cookies.get_dict())
    synct = cookies.get('synct')

    params = {
        "date": "2019-07-09",
        "page": "1",
        "appid": "0",
        "country": "cn",
        "search": "花无缺",
        "version": "ios12",
    }
    url = "https://api.qimai.cn/search/index"
    analy_list = getanaly(synct, params)
    params['analysis'] = analy_list
    resp = requests.get(url=url, params=params, headers=headers, verify=False, cookies=cookies)
    resjson = resp.json()
    print(resjson)
    contents = resjson['list']
    for content in contents:
        appInfo = content['appInfo']
        print(appInfo)


if __name__ == '__main__':
    qimai()
