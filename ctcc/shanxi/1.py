# coding: utf-8
import execjs

with open('login.js', encoding='utf-8')as f:
    login = execjs.compile(f.read())

result = login.call('k', '322720')
print(result)


with open("submit.js", encoding="utf-8") as f:
    identify = execjs.compile(f.read())

result = identify.call("strEnc", "916710", "3", "2", "1")
print(result)

if __name__ == '__main__':
    pass