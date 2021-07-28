# coding: utf-8
import execjs
import requests
import re


def spider():

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    }
    session = requests.session()
    response = session.get(url, headers=headers)
    text = response.text
    text = re.search(r'(var x=.*?pop\(\)\);)', text).group(1)

    js_string = """get_eval_string = function(){
        %s
        var data = "";
        var initZ = z;
        while (data.indexOf("__jsl_clearance=15") === -1 && z++) {
            data = y.replace(/\\b\w+\\b/g, function (y) {
                return x[f(y, z) - 1] || ("_" + y)});
        }
        return data;
        };
    """ % text

    js = execjs.compile(js_string)
    eval_string = js.call('get_eval_string')

    cookie_string, anonymous_function = re.search(r"(__jsl_clearance=\d+\.?\d+\|0\|)'\+(\(function\(\).+)\+';Expires=", eval_string).groups()

    js2 = """window = {"document": ""};
    document = window.document;
    
    function f() {
        var r = %s
    return r
    }""" % anonymous_function  # 自定义 windows 和 document 属性值

    result = execjs.compile(js2)

    res = result.call("f")

    cookie = {cookie_string.split("=")[0]: cookie_string.split("=")[1] + res}

    print(cookie)

    response = session.get("http://www.66ip.cn/", headers=headers, cookies=cookie)
    print(response.content.decode("gb2312"))


if __name__ == '__main__':
    spider()
