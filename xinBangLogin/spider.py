# coding: utf-8
import execjs
import requests
import random
import time
import hashlib


def md5(parm):
    hl = hashlib.md5()
    hl.update(parm.encode(encoding='utf-8'))
    sign = hl.hexdigest()
    return sign


def non():
    li = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    nonce = ''.join(li[random.randint(0, 15)] for _ in range(9))
    return nonce


def login(name, word):
    with open("password.js", "r", encoding="utf-8")as f:
        js = f.read()
    ps = execjs.compile(js)

    # password1 = ps.call("b", word)
    # password = ps.call("b", password1 + "daddy")

    password = md5(md5(word) + "daddy")

    flag = f"{round(time.time()*10000)}{str(random.random())[1:]}"
    f = str(round(time.time()*10000)) + str(random.random())[1:]
    print(flag, f)
    key = "/xdnphb/login/new/usernameLogin?AppKey=joker&"

    with open("nonce.js", "r", encoding="utf-8")as f:
        nonce_js = f.read()
    # nonce_js = execjs.compile(nonce_js)
    # nonce = nonce_js.call("f")
    nonce = non()

    data = {
        "flag": flag,
        "identifyCode": "",
        "password": password,
        "username": name,
        "nonce": nonce,
    }
    xyz = key + "&".join(f"{k}={v}" for k, v in data.items())
    # xyz = ps.call("b", xyz)
    xyz = md5(xyz)
    data.update({"xyz": xyz})

    url = "https://www.newrank.cn/xdnphb/login/new/usernameLogin"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
    }
    response = requests.post(url, data=data, headers=headers)

    return response.json()


if __name__ == "__main__":
    print(login("18823191644", "322720"))
