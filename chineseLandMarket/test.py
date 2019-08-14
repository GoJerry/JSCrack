# coding:utf-8

import requests
import re
import execjs
from scrapy import Selector


url = "http://www.landchina.com/default.aspx?tabid=226"

session = requests.session()

session.headers = {
    "Referer": "http://www.landchina.com/default.aspx?tabid=226&security_verify_data=313932302c31303830",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
}

js = """function stringToHex(str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "") val = str.charCodeAt(i).toString(16); else val += str.charCodeAt(i).toString(16);
    }
    return val;
}

function YunSuoAutoJump() {
    var width = "1920";
    var height = "1080";
    var screendate = width + "," + height;
    // var curlocation = window.location.href;
    // if (-1 == curlocation.indexOf("security_verify_")) {
    //     document.cookie = "srcurl=" + stringToHex(window.location.href) + ";path=/;";
    // }
    url = "/default.aspx?tabid=226&security_verify_data=" + stringToHex(screendate);
    return url
}"""
def spider():
    response = session.get(url)

    text = response.text
    # f_js = re.findall("javascript\">(.*?)</script>", text)[0]

    ctx = execjs.compile(js)
    location = ctx.call("YunSuoAutoJump")
    second_url = "http://www.landchina.com" + location

    _ = session.get(second_url)

    res = session.get(url)

    selector = Selector(text=res)

    result = selector.css("#TAB_contentTable tr")[1:]
    td_list = result.css("td")






if __name__ == '__main__':
    spider()
