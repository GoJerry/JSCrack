# coding: utf-8

import execjs
from ctcc.login.js import CRYPTO_JS

# 电信通用加密

js_ctx = execjs.compile(CRYPTO_JS)
password = '123123'
password = js_ctx.call("k", password)
print(password)

if __name__ == '__main__':
    pass
