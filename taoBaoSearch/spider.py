# coding: utf-8

import requests
import time
import execjs
import hashlib
from urllib import parse

a = "/web/taobao_rank?client=50&format=json&"
b = f"&timestamp={int(time.time())}&username=null&ver=4"


def md5(parm):
    hl = hashlib.md5()
    hl.update(parm.encode(encoding='utf-8'))
    sign = hl.hexdigest()
    return sign


def demo():
    with open("1.js", "r", encoding="utf-8")as f:
        js = f.read()

    exc = execjs.compile(js)
    param = exc.call("f")
    print(param)
    timestamp = int(time.time())

    b = f"&timestamp={timestamp}&username=null&ver=4"
    g = a + param + b
    h = parse.quote(g)

    sign = md5(h)

    data = {
        "client": "50",
        "format": "json",
        "param": param,
        "timestamp": timestamp,
        "username": "null",
        "ver": "4",
        "sign": sign,
    }

    url = "http://www.kehuda.com/web/taobao_rank"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
    }
    response = requests.post(url, data=data, headers=headers)
    print(response.json())


if __name__ == "__main__":
    demo()
