# coding:utf-8
import datetime
import uuid

# import MySQLdb

import chardet
import requests
import time
import execjs
from lxml import etree
import random
from urllib import parse
import re
import os
import json
import urllib

with open('getcookie.js', 'r', encoding='utf-8') as f:
    js1 = f.read()
    ecjs = execjs.compile(js1)


class SpiderMain(object):
    def __init__(self, tableId, tableView):
        self.tableView = tableView
        # 参数
        self.F82S = ''
        self.F82T = ''
        self.F82T_true = ''
        self.JSESSIONID = ''
        self.meta = ''
        self.url = 'http://app1.sfda.gov.cn/datasearchcnda/face3/base.jsp?tableId=28&tableName=TABLE28&title=%BB%A5%C1%AA%CD%F8%D2%A9%C6%B7%D0%C5%CF%A2%B7%FE%CE%F1&bcId=152912030752488832300204864740'
        self.url_list = 'http://app1.sfda.gov.cn/datasearchcnda/face3/search.jsp'
        # 请求头
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "Cache - Control": "max - age = 0",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "app1.sfda.gov.cn",
            "Referer": "http: // app1.sfda.gov.cn / datasearchcnda / face3 / base.jsp?tableId = 28 & tableName = TABLE28 & title = % BB % A5 % C1 % AA % CD % F8 % D2 % A9 % C6 % B7 % D0 % C5 % CF % A2 % B7 % FE % CE % F1 & bcId = 152912030752488832300204864740",
            "Upgrade - Insecure - Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36"
        }
        # 请求cookie
        self.cookies = {
            'FSSBBIl1UgzbN7N82S': '',
            'FSSBBIl1UgzbN7N82T': '',
            'JSESSIONID': ''
        }
        # 列表页请求参数
        self.data = {
            'tableId': tableId,
            'curstart': '1',
            'tableView': parse.quote(tableView, encoding='gbk'),
            # '%E4%BA%92%E8%81%94%E7%BD%91%E8%8D%AF%E5%93%81%E4%BF%A1%E6%81%AF%E6%9C%8D%E5%8A%A1',
        }

    def getCookie(self):
        rsq = requests.get(self.url, headers=self.headers)
        rsq.close()
        # print(rsq.cookies)
        # 第一次请求得到假的f82s,f82t,和metacontent
        self.F82S = rsq.cookies['FSSBBIl1UgzbN7N82S']
        self.F82T = rsq.cookies['FSSBBIl1UgzbN7N82T']
        rsqHtml = etree.HTML(rsq.text)
        self.meta = rsqHtml.xpath('//*[@id="9DhefwqGPrzGxEp9hPaoag"]/@content')[0]
        self.F82T_true = ecjs.call("getcookie", self.meta, self.F82T)
        self.cookies['FSSBBIl1UgzbN7N82S'] = self.F82S
        self.cookies['FSSBBIl1UgzbN7N82T'] = self.F82T_true
        rsq = requests.get(self.url, headers=self.headers, cookies=self.cookies)
        print(rsq.cookies)
        # self.JSESSIONID = rsq.cookies['JSESSIONID']
        # self.cookies['JSESSIONID'] = self.JSESSIONID

    def getlist(self):
        rsqlist = requests.post(self.url_list, headers=self.headers, cookies=self.cookies, data=self.data)
        rsqlistHtml = etree.HTML(rsqlist.text)
        print(rsqlist.cookies)
        lists = rsqlistHtml.xpath('//a[contains(@href,"javascript:commitForECMA")]')
        for list in lists:
            name = list.xpath('./text()')[0]
            url = list.xpath('./@href')[0]
            url = "http://app1.sfda.gov.cn/datasearchcnda/face3/" + url[url.index('content.jsp?'):url.index("',null")]
            url = parse.quote(url, safe='/:?=&', encoding='gbk')
            print(name)
            print(url)
            content = requests.get(url, headers=self.headers, cookies=self.cookies)
            contentHtml = etree.HTML(content.text)
            contentList = contentHtml.xpath('//tr')
            listcontent = ''
            for i in range(1, len(contentList) - 1):
                contentList[i].xpath('./tr/text()')
                value_ls = contentList[i].xpath("./td")
                value1 = value_ls[0].xpath('string(.)')
                value2 = value_ls[1].xpath('string(.)')
                listcontent = listcontent + str(value1) + ':' + str(value2) + '||'
            print(listcontent)


if __name__ == '__main__':
    spider = SpiderMain(28, '互联网药品信息服务')
    spider.getCookie()
    spider.getlist()
