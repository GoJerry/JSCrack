# coding: utf-8
__author__ = 'Jerry'

import requests
import execjs
import os

from IBank.config.config import key, random_number

PROJECT_DIR = os.path.abspath(os.path.dirname(os.path.dirname(__file__))) + "\\config\\"


class IBankLogin(object):
    def __init__(self):
        self.session = requests.session()
        self.session.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",

        }

    def get_pk(self):
        """
        获取 mod/exp 参数
        :return:
        """
        _ = self.session.get("https://Ibank.bankmandiri.co.id/retail3/loginfo/loginRequest")

        url = "https://Ibank.bankmandiri.co.id/retail3/loginfo/getPK"
        response = self.session.post(url)
        json_data = response.json()
        return json_data

    @staticmethod
    def get_js():
        """
        执行 JS
        :return:
        """
        with open(PROJECT_DIR + 'login.js', 'r', encoding='utf-8')as f:
            login_js = f.read()
        login_res = execjs.compile(login_js)

        with open(PROJECT_DIR + 'password.js', 'r', encoding='utf-8')as f:
            pass_js = f.read()
        password_res = execjs.compile(pass_js)

        return login_res, password_res

    def login(self, name, password):
        """
        登录
        :param name: 账号
        :param password: 密码
        :return:
        """
        json_data = self.get_pk()
        exp = json_data["exp"]
        mod = json_data["mod"]
        ret3 = self.session.cookies.get_dict().get("JSESSIONIDRET3")

        url = f"https://Ibank.bankmandiri.co.id/retail3/loginfo/performLoginExecute;JSESSIONIDRET3={ret3}"
        login_res, password_res = self.get_js()
        encryption = password_res.call("do_encrypt", password, key)
        print(f"加密密文: {encryption}")
        user_pass_crypto = encryption.get("password")
        key1 = encryption.get("key1")
        key2 = encryption.get("key2")

        data = login_res.call("do_encryptHSMAlphanumericLgn", password, mod, exp)
        c_enc = data.get("cEnc")
        p_enc = data.get("pEnc")
        print(f"cEnc:{c_enc}, pEnc:{p_enc}")

        data = {
            "userId": name,
            "userPass": "",
            "userPassCrypto": user_pass_crypto,
            "lang": "in",
            "key1": key1,
            "key2": key2,
            "mod": mod,
            "exp": exp,
            "randomNumber": random_number,
            "cEnc": c_enc,
            "pEnc": p_enc,
            "isFailed": "N",
        }
        print(f"登录前的cookie: {self.session.cookies.get_dict()}")
        response = self.session.post(url, data=data)
        print(response.text)
        print(f"登录后的cookie: {self.session.cookies.get_dict()}")


if __name__ == "__main__":
    spider = IBankLogin()
    spider.login("fsd", "password")
    pass
