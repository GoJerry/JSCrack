# coding: utf-8
import hashlib
import hmac
import time
import requests

timestamp = int(time.time())
h = hex(timestamp)

t = "username=17775731459&scene=h5_login&rams_device_id=2972225991"
m = hashlib.md5(t.encode("utf-8")).hexdigest()

key = "ytU7vwqIx2UXQNsi"
g = f"01\nPOST\n{m}\n/mroute.html?method=beibei.user.token.get\n{timestamp}"

result = hmac.new(key.encode("utf-8"), msg=g.encode("utf-8"), digestmod=hashlib.sha1).hexdigest()
print(result)

res = '01' + result + h

token = requests.post(url='https://api.beibei.com/mroute.html', params={"method": "beibei.user.token.get", "_abr_": result}, data={"username": "17775704359","scene": "h5_login","rams_device_id": "2972225991"}, headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"}
                     )
print(token.json())


if __name__ == "__main__":
    pass
