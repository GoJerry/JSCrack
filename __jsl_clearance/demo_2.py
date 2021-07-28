# -*- coding: utf-8 -*-
# @Time : 2021/5/24 10:20
# @Author: JUN.NING
# @File name: 1

from util.yuan_ren_yun import get_proxies
import json
import requests
import execjs
import re

url = "http://swj.hefei.gov.cn/content/column/6794021?pageIndex=1"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
}

session = requests.session()


def res_js():
    """
    共分为 3次 请求，前两次生成 cookie
    :return:
    """
    # 第一次
    res1 = session.get(url, headers=headers)
    html1 = res1.text
    js = re.search(r"cookie=(.*?);location", html1)
    cookie_string = js.group(1)
    js_string = """
    b = function () {
    let cookie = "%s";
    return eval(cookie)
    };
    """ % cookie_string

    res = execjs.compile(js_string)
    eval_string = res.call("b")
    cookie_jar1 = requests.cookies.RequestsCookieJar()
    st1 = eval_string.split('=')
    cookie_jar1.set(st1[0], st1[1].replace(";max-age", ""))
    session.cookies.update(cookie_jar1)

    # 第二次
    res2 = session.get(url, headers=headers)
    html2 = res2.text
    function_go = re.search(r";(go\(\{.*?\}\))</script>", html2)
    go_group = function_go.group(1)

    fun_dict = json.loads(go_group.replace("go(", "").replace(")", ""))
    ha = fun_dict.get("ha")
    mapping = {
        "sha1": "c_sha1.js",
        "sha256": "c_sha256.js",
        "md5": "c_md5.js"
    }
    go = """function get() {
        let cookies = """ + go_group + """
        return cookies;}"""
    with open(f"./JS/{mapping.get(ha)}", "r")as f:
        go_js = f.read() + go

    # 执行生成最终的 cookie
    res = execjs.compile(go_js)
    go_string = res.call("get")

    return go_string


def get(go_string):
    """
    最终请求
    :param go_string:
    :return:
    """
    cookie_jar2 = requests.cookies.RequestsCookieJar()
    st2 = go_string.split('=')
    cookie_jar2.set(st2[0], st2[1].replace(";max-age", ""))
    session.cookies.update(cookie_jar2)

    # 第三次
    res3 = session.get(url, headers=headers)
    html3 = res3.text
    print(html3)


def main():
    go_cookie = res_js()
    if go_cookie:
        get(go_cookie)
    else:
        raise ValueError("请重新生成第二次的cookie")  # todo


if __name__ == '__main__':
    main()
