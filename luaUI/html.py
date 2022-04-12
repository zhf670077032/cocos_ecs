#!/usr/bin/python
# -*- coding: UTF-8 -*-

from numpy import put
import urllib2
from lxml import etree
from lupa import LuaRuntime 



gameFile = etree.HTML(open("test.html").read())
content = gameFile.xpath("./GameFile")

# print(type(gameFile))
print(gameFile.items())
print(content)
print(list(gameFile))

# lua = LuaRuntime() 
# file = open('./common.lua')
# content = file.read()
# lua.execute(content)

# g = lua.globals()
# func_main = g.FileWirte


# domain = "http://www.tcmap.com.cn"
# putian = "/fujian/putian.html"


# def reqAndfileWrite(url):
#     response = urllib2.urlopen(url)
#     response_str = response.read()
#     try:
#         response_str = response_str.decode("gbk")
#     except:
#         response_str = response_str
#     return func_main(response_str)


# def getXiangContent(xiang_url):
#     print(xiang_url)
#     response = urllib2.urlopen(xiang_url)
#     response_str = response.read()
#     response_str = response_str.decode("gbk")
    
#     html = etree.HTML(response_str)
#     div = html.xpath("//body/div/div/div[@class='f14']")
#     if len(div) <= 0:
#         div = html.xpath("//body/div/div/div[@style='margin:5px 10px 1px 10px;']")
#     if div[0].text == None:
#         p = div[0].xpath("./p")[0]
#         return p.text
#     return div[0].text



# def getXiangList(zhen_url):
#     print(zhen_url)
#     reqAndfileWrite(zhen_url)
#     zhen_table = etree.HTML(open("s1.html").read())
#     tr_list = zhen_table.xpath("//table/tr") #/td/strong/a/@href

#     xiang_list = []
#     for tr in tr_list:
#         hrefs = tr.xpath("./td/strong/a/@href")
#         if len(hrefs) != 1:
#             continue
#         xiang_list.append({
#             "name" : tr.xpath("./td/strong/a")[0].text,
#             "href" : domain + hrefs[0],
#             "content" : getXiangContent(domain + hrefs[0])
#         })

#     return xiang_list



# def getQuList(table):
#     qu_list = []
#     tr_list = table.xpath("//table/tr") #/td/strong/a/@href
#     for tr in tr_list:
#         hrefs = tr.xpath("./td/strong/a/@href")
#         if len(hrefs) != 1:
#             continue

#         zhen_list = []
#         alist = tr.xpath("./td/div/a")
#         # print(str(zhen_list).encode("utf-8").decode("string_escape"))
#         for index in range(1, len(alist)):
#             zhen = alist[index]
#             zhen_href = zhen.xpath("./@href")[0]
#             zhen_list.append({
#                 "name" : zhen.text,
#                 "href" : domain + "/fujian/" + zhen_href,
#                 "xiang_list" : getXiangList(domain + "/fujian/" + zhen_href)
#             })
#         qu_list.append({
#             "name" : tr.xpath("./td/strong/a")[0].text,
#             "href" : domain + hrefs[0],
#             "zhen_list" : zhen_list
#         })
#     print(str(qu_list).encode("utf-8").decode("string_escape"))
#     return qu_list

# reqAndfileWrite(domain + putian)
# table = etree.HTML(open("s1.html").read())
# qu_list = getQuList(table)





