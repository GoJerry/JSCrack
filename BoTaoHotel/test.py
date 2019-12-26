# coding: utf-8
import execjs


def get_pwd(s):
    js_path = "password.js"
    with open(js_path, 'r', encoding="utf-8") as f:
        js_content = f.read()
        ctx = execjs.compile(js_content)
        new_pwd = ctx.call("Encrypt", s)
    return new_pwd


if __name__ == "__main__":
    print(get_pwd("123456"))
