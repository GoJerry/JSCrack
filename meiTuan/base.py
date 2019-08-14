# coding: utf-8
import zlib
import base64
from Cryptodome import Random
from Cryptodome.Cipher import AES
from hashlib import md5
import json
import time


def pad(data):
    length = 16 - (len(data) % 16)
    return data.encode() + (chr(length) * length).encode()


def unpad(data):
    return data[:-(data[-1] if type(data[-1]) == int else ord(data[-1]))]


def bytes_to_key(data, salt, output=48):
    assert len(salt) == 8, len(salt)
    data = data.encode()
    data += salt
    key = md5(data).digest()
    final_key = key
    while len(final_key) < output:
        key = md5(key + data).digest()
        final_key += key
    return final_key[:output]


def encrypt(message, phrase):
    # 模拟Crypto-Js加密
    salt = Random.new().read(8)
    key_iv = bytes_to_key(phrase, salt, 32 + 16)
    key = key_iv[:32]
    iv = key_iv[32:]
    aes = AES.new(key, AES.MODE_CBC, iv)
    return base64.b64encode(b"Salted__" + salt + aes.encrypt(pad(message)))


def decrypt(self, encrypted, passphrase):
    # 解密模块
    encrypted = base64.b64decode(encrypted)
    assert encrypted[0:8] == b"Salted__"
    salt = encrypted[8:16]
    key_iv = self.bytes_to_key(passphrase, salt, 32 + 16)
    key = key_iv[:32]
    iv = key_iv[32:]
    aes = AES.new(key, AES.MODE_CBC, iv)
    return self.unpad(aes.decrypt(encrypted[16:]))


def get_token(agent, url, response):
    t = time.time()
    con_url = 'eJw9i8sKwyAQAP8lUI++8g5Ib4V+RRFd6BKyBl2bfn4DgV6GOcw0IREjVXBv5r0sSh0eN49yA+TqSYa0KR9CqsSqAHNage7/6WYfBMfJ63pShK/IWNbX7jMTZKdFgfzBAO5KRK0YnYG5Df0Qx9nqrh3H2QyTNH3fmm6y06lSS938AMxdNNs='
    decoded_token = {
        "rId": "0x00",
        'sign': con_url,
        'brR': [[1920, 1080], [1920, 1040], 24, 24],
        'ssT': 1,
        'uA': agent,
        'fSign': 'eJxVUcuO2zAM/BVhz+xH1ME22W4cGJWzxZ4KRmZkorIUyHLT/H2p2E6Vg8nh8GWOXr5GRgd3qyqH5veCDxhjuMIGHZ8iix/E4epVjamHTRjYKI1+VLWWyI/B4Shgikxx9epAV9hSiFb6d+T+UGKD8DZc0CTYT4Y7VFVk2z+ieRStYd5QYtXeLnSNnGRJSR89m9AR1GxiGMM5zbSmyGeotdqG1LPJqPkPn0tm0KDDxD6ovZgky0CTDaSayD4tWJvIlzU4vj2A9ORLHqGmgU/BdQVzG4SAFvswILQ80DjbrJT6IaSHNtJpMj2lrOwHxQ49wk/2tpNPJEbfYcS75gl9yi8T4okcvMrzyNRv6K0O3sIWhZBngXfklqFGZyf/UAKjo5QKwXbS7PCGBfW9J293xAWV/7NFVvupFLvp0Y5N2XqvKUs+8XnQJ6sKOWXK2z0ff+3e9UZ/ef2bqpVaArklOEa/1uus5HrGh6okCQfNg548NE+tQualS252S+bmzkj+5R97rhFq',
        'ver': '1.0.6',
        'wR': 'WebKit WebGL',
        'kT': ['V,INPUT,492707', '\x11,BODY,492238'],
        'buttons': [],
        'cV': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADHUlEQVRIS62XX2iOURzHP4eM/NneMTJ/aqUQZkppk39zISltURS1vGmZRFtcuHTLhTW5MmyLsonsQlKkNEOKMqxIuNC4EluWDTv6Pc85c3b2Ptuz931/dXp7nuf8fp/z53t+v/MqtNaI3WyGxjq4+z14jG39CdhfD+0HYrtIRxWAG5qhNgnngKPj+B+K+P4EeBWfrbjVpNmVBJn3A6A8TbC4if/7eHBFTp5m8EfY+y2wNAPwEHADGLVbucBx4DrwJgAowrmG9hOYngFYXD8A9/0Y44E3Ah1AAlgDbDG/FU6gqD12WVeBfvfFeOCoycogmswg4oAfAd3ZANsYp4Aeb3R2o2TTrPUk4PZp50UzsH2MPY4jyDJglVGH9BewVYqFDyyEFnn4DEwFqoFiwvMq4sr1xBUHLH12A3NMZwt2B/EXuOQGWwTUAZcjVB0XLFCBW5j1szP/YzQxHC9dcaUa0DagaMRh/L/kvVOg7bfj5YO3prnUEnKtaan2+OMMuCdJwdpK4JjZY0lt1RmAC4GdETPurIDu50ZcdrbzHXHtywCcA0hBcsVlJ9haAb07zNNXoNEo26TM4nRVLSEt2N9/OUF3xlDpCmBDIIc8DaZIxFW19LNL7frIMWo1OT9VrFJgdfhBQZOG5ESQYV8rLtdTioMUCd9mAuvNKTDfFMgNRFLaBOH2OFnIY+C1RywARNBSat2UGj6aqw/tRi0xln0SsASYB8hsXgB9wGzT5gKLgWnRC+mApdMnQCpBS7yll0y4ycDjeQz38sD2vQxAVkCaXCdemg8lsDwBeyuhvBI2S+pKzyLAEcHqgdr0QL6XKi3Uv55+CWpXtJUQ6k8uBNmxDrneFsy6RldfG4XBqj4E8ryrT2V2aCaKJOuyUORaSx5qAGqyihgd7CJwBKUGR54urQV8Hpic5QFITqtBKQEH5h3rYPbLgBNAlcnImYxBivIV4AxKya192EaD7Set5ZSeBA6OnQpSjkuK8QXgLEpJ2eBwF/mDAxTpIYb6FvAuGuzG01queHuAdUC+aXL7FhNJSvsGdAb/JZR65g/HB/8DVgPbDALJSUEAAAAASUVORK5CYII=',
        'cts': t + 100,
        'dnT': '1',
        'brVD': [1468, 969],
        'broP': ['Chrome PDF Plugin', 'Chrome PDF Viewer', 'Native Client'],
        'lsT': 1,
        'bI': [url, ''],
        'hH': {'server': 'openresty', 'content-type': 'text/html; charset=utf-8', 'x-version': '1.2.1',
               'date': response.headers['Date'], 'content-encoding': 'gzip', 'connection': 'keep-alive'},
        'inputs': [{'keyboardEvent': '0-0-0-0', 'inputName': 'commit', 'editStartedTimeStamp': 1553084036836,
                    'editFinishedTimeStamp': 1553084036925},
                   {'keyboardEvent': '0-1-1-0', 'inputName': 'password', 'editStartedTimeStamp': 1553084034393,
                    'editFinishedTimeStamp': 1553084036836},
                   {'keyboardEvent': '0-1-1-0', 'inputName': 'email', 'editStartedTimeStamp': 1553083550949,
                    'editFinishedTimeStamp': 1553083552708}],
        'loC': '',
        'pSign': 'eJyLVnLOKMrPTVUIcHFTCMgpTc/MU9JBFgvLTC1PLQKK+SWWZJalKjjnZKbmlSjFAgASzxKU',
        'ts': t,
        'wV': 'WebKit',
        'ckE': 'yes',
        'tT': [],
        'mT': ['761,364,493765', '761,365,493759', '761,366,493253', '762,366,493215', '763,366,493078',
               '764,366,492982', '765,366,492949', '765,365,492932', '765,363,492915', '765,361,492898',
               '764,359,492892', '763,355,492881', '758,349,492865', '754,344,492862', '749,339,492848',
               '738,325,492832', '725,309,492816', '715,294,492799', '707,284,492782', '706,283,492765',
               '706,282,492548', '706,286,492531', '706,287,492518', '706,288,492511', '706,289,492494',
               '706,290,492406', '706,291,492390', '706,292,492365', '707,293,492348', '708,294,492332',
               '711,299,492314', '713,307,492298', '713,320,492282', '712,336,492265', '708,351,492248',
               '705,358,492238', '701,364,492231', '687,377,492215', '664,392,492200', '618,415,492183',
               '577,432,492164', '529,451,492149', '484,469,492133', '439,494,492114', '395,527,492100',
               '361,561,492081', '334,596,492064', '314,627,492048', '304,646,492031', '298,661,492014',
               '295,670,491999', '295,673,491990', '295,675,491911', '295,675,491862', '296,675,491833',
               '297,671,491814', '303,656,491798', '306,648,491782', '311,615,491765', '311,593,491749'],
        'aM': '',
        'fL': 'Arial,Arial Black,Arial Narrow,Calibri,Cambria,Cambria Math,Comic Sans MS,Consolas,Courier,Courier New,Georgia,Helvetica,Impact,Lucida Bright,Lucida Console,Lucida Sans,Lucida Sans Typewriter,Lucida Sans Unicode,Microsoft Sans Serif,MS Gothic,MS PGothic,MS Sans Serif,MS Serif,Palatino Linotype,Segoe Print,Segoe Script,Segoe UI,Segoe UI Light,Segoe UI Semibold,Segoe UI Symbol,Tahoma,Times,Times New Roman,Trebuchet MS,Verdana,Wingdings,Candara,Constantia,Corbel,Ebrima,FangSong,Gabriola,KaiTi,Malgun Gothic,Marlett,Microsoft Himalaya,Microsoft JhengHei,Microsoft New Tai Lue,Microsoft PhagsPa,Microsoft Tai Le,Microsoft YaHei,Microsoft Yi Baiti,MingLiU_HKSCS-ExtB,MingLiU-ExtB,Mongolian Baiti,MS UI Gothic,MV Boli,NSimSun,PMingLiU-ExtB,SimHei,SimSun,SimSun-ExtB,Sylfaen',
        'aT': ['761,364,INPUT,495102', '706,282,INPUT,492645', '295,675,HTML,491949', '732,273,INPUT,488189',
               '784,273,INPUT,481014', '747,279,INPUT,473592', '731,287,INPUT,11021', '721,223,INPUT,9245',
               '1059,188,A,1765']
    }
    # 压缩编码token
    decoded_token = json.dumps(decoded_token)
    form = zlib.compress(decoded_token.encode())
    token = base64.b64encode(form)

    return token


if __name__ == '__main__':
    pass
