# coding: utf-8
import requests
import execjs


# 中国空气质量在线监控平台 加密js


def js():
    obj = {"city": "杭州", "type": "HOUR", "startTime": "2019-01-22 14:00:00", "endTime": "2019-01-23 17:00:00"}
    method = 'GETDETAIL'
    url = 'https://www.aqistudy.cn/apinew/aqistudyapi.php'
    with open('apistudyapi.js', 'r', encoding='utf-8')as f:
        read_js = f.read()
    res = execjs.compile(read_js)
    params = res.call('getParam', method, obj)
    response = requests.post(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'},
                             data={'d': params})
    print(response.text)
    data = res.call('decodeData', response.text)
    print(data)


if __name__ == '__main__':
    js()
