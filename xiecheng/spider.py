import requests
import time
import datetime
import execjs
from ws4py.client.threadedclient import WebSocketClient


class CGClient(WebSocketClient):
    def opened(self):
        print("连接成功")
        # req = open("../a.js").read()
        self.send("Python")

    def closed(self, code, reason=None):
        print("Closed down:", code, reason)

    def received_message(self, resp):
        print("resp", resp)
        currentDate = time.strftime("%Y-%m-%d")
        today = datetime.datetime.now()  # 今天，如 "2020-05-11"
        last_time = today + datetime.timedelta(hours=-24)
        tomorrow = last_time.strftime("%Y-%m-%d")  # 明天，如 '2020-05-10'
        data = {
            "__VIEWSTATEGENERATOR": "DB1FBB6D",
            "cityName": "%E5%8C%97%E4%BA%AC",
            "StartTime": today,
            "DepTime": tomorrow,
            "RoomGuestCount": "1,1,0",
            "txtkeyword": "",
            "Resource": "",
            "Room": "",
            "Paymentterm": "",
            "BRev": "",
            "Minstate": "",
            "PromoteType": "",
            "PromoteDate": "",
            "operationtype": "NEWHOTELORDER",
            "PromoteStartDate": "",
            "PromoteEndDate": "",
            "OrderID": "",
            "RoomNum": "",
            "IsOnlyAirHotel": "F",
            "cityId": "1",
            "cityPY": "beijing",
            "cityCode": "010",
            "cityLat": "39.9105329229",
            "cityLng": "116.413784021",
            "positionArea": "",
            "positionId": "",
            "hotelposition": "",
            "keyword": "",
            "hotelId": "",
            "htlPageView": "0",
            "hotelType": "F",
            "hasPKGHotel": "F",
            "requestTravelMoney": "F",
            "isusergiftcard": "F",
            "useFG": "F",
            "HotelEquipment": "",
            "priceRange": "-2",
            "hotelBrandId": "",
            "promotion": "F",
            "prepay": "F",
            "IsCanReserve": "F",
            "k1": "",
            "k2": "",
            "CorpPayType": "",
            "viewType": "",
            "checkIn": today,
            "checkOut": tomorrow,
            "DealSale": "",
            "ulogin": "",
            "hidTestLat": "0%7C0",
            "AllHotelIds": "",
            "psid": "",
            "isfromlist": "T",
            "ubt_price_key": "htl_search_noresult_promotion",
            "showwindow": "",
            "defaultcoupon": "",
            "isHuaZhu": "False",
            "hotelPriceLow": "",
            "unBookHotelTraceCode": "",
            "showTipFlg": "",
            "traceAdContextId": "",
            "allianceid": "0",
            "sid": "0",
            "pyramidHotels": "",
            "hotelIds": "",
            "markType": "0",
            "zone": "",
            "location": "",
            "type": "",
            "brand": "",
            "group": "",
            "feature": "",
            "equip": "",
            "bed": "",
            "breakfast": "",
            "other": "",
            "star": "",
            "sl": "",
            "s": "",
            "l": "",
            "price": "",
            "a": "0",
            "keywordLat": "",
            "keywordLon": "",
            "contrast": "0",
            "PaymentType": "",
            "CtripService": "",
            "promotionf": "",
            "allpoint": "",
            "page_id_forlog": "102002",
            "contyped": "0",
            "productcode": "",
            "eleven": resp.data,
            "orderby": "3",
            "ordertype": "0",
            "page": "1",
        }
        headers = {
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
            "referer": "https://hotels.ctrip.com/hotel/shanghai2",
            "cookie": "magicid=PZEH8ceVE/16NKCW23EcukabbFPrTLnrhJkXcZvhhPzBaLSQv4yIN4/TI76Mhhde; ASP.NET_SessionId=vz3obktv3xj2k4mofourjpoe; _abtest_userid=fbe89d01-3e3f-42d0-9fab-e1f72d7acab2; librauuid=P5O14kqFUsUh0kT6o9; hoteluuid=A0zFC5pm95q5CHbd; OID_ForOnlineHotel=15961630078312e34lp1596163008027102032; _RF1=116.7.248.3; _RSG=PcqfMNi26c1WhLiL2cOnaA; _RDG=2876c6bf10226223bc394d82d78c5694c7; _RGUID=19860ac5-d6a7-4999-a931-626095b15ae0; _ga=GA1.2.1428819400.1596163010; _gid=GA1.2.173416880.1596163010; MKT_CKID=1596163010276.0xaif.un5h; MKT_CKID_LMT=1596163010277; MKT_Pagesource=PC; MjAxNS8wNi8yOSAgSE9URUwgIERFQlVH=OceanBall; _bfa=1.1596163007831.2e34lp.1.1596163007831.1596163007831.1.4; _bfs=1.4; hotelhst=2012709687; _bfi=p1%3D102002%26p2%3D102002%26v1%3D4%26v2%3D2; _jzqco=%7C%7C%7C%7C%7C1.2138894140.1596163010271.1596163010271.1596163280878.1596163010271.1596163280878.0.0.0.2.2; __zpspc=9.1.1596163010.1596163280.2%234%7C%7C%7C%7C%7C%23; _gat=1; appFloatCnt=2"
        }
        url = "https://hotels.ctrip.com/Domestic/Tool/AjaxHotelList.aspx"
        a = requests.post(url, data=data, headers=headers)
        print(a.text)

        # resp = json.loads(str(resp))
        # data = resp['data']
        # if type(data) is dict:
        #     ask = data['asks'][0]
        #     print('Ask:', ask)
        #     bid = data['bids'][0]
        #     print('Bid:', bid)


def getTime():
    return str(time.time()).replace(".", "")[0:13]


def getCallbackParam():
    f = open("./callback.js")
    context = execjs.compile(f.read())
    return context.call("callback")


def getContent():
    t = getTime()
    callback = getCallbackParam()
    print(callback)
    url = "https://hotels.ctrip.com/domestic/cas/oceanball?callback=%s&_=%s" % (
        callback,
        t,
    )
    headers = {
        "user-agent": "Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.2.2",
        "referer": "https://hotels.ctrip.com/hotel/shanghai2",
    }
    r = requests.get(url, headers=headers)

    code = (
            """
            window["%s"] = function (e) {
            var f = e();
            console.log(f);
            ws.send(f);
        };;
        """
            % callback
            + r.text
    )
    print(code)
    ws.send(code)


ws = None
try:
    ws = CGClient("ws://127.0.0.1:8014/")
    ws.connect()
    getContent()  # 如果想要多次请求，可在此处再写一个
    ws.run_forever()

except KeyboardInterrupt:
    ws.close()
