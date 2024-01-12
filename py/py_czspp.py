#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..') 
from base.spider import Spider
import json
import base64
from Crypto.Cipher import AES

class Spider(Spider):  # 元类 默认的元类 type
	def getName(self):
		return "厂长资源"
	def init(self,extend=""):
		print("============{0}============".format(extend))
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"豆瓣电影Top250": "dbtop250",
			"最新电影": "zuixindianying",
			"电视剧": "dsj",
			"国产剧": "gcj",
			"美剧": "meijutt",
			"韩剧": "hanjutv",
			"番剧": "fanju",
			"动漫": "dm"
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name':k,
				'type_id':cateManual[k]
			})
		result['class'] = classes
		return result
	def homeVideoContent(self):
		rsp = self.fetch("https://www.czzy66.com/")
		root = self.html(rsp.text)
		aList = root.xpath("//div[@class='mi_btcon']//ul/li")
		videos = []
		for a in aList:
			name = a.xpath('./a/img/@alt')[0]
			pic = a.xpath('./a/img/@data-original')[0]
			mark = a.xpath("./div[@class='hdinfo']/span/text()")[0]
			sid = a.xpath("./a/@href")[0]
			sid = self.regStr(sid,"/movie/(\\S+).html")
			videos.append({
				"vod_id":sid,
				"vod_name":name,
				"vod_pic":pic,
				"vod_remarks":mark
			})
		result = {
			'list':videos
		}
		return result
	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url = 'https://www.czzy66.com/{0}/page/{1}'.format(tid,pg)
		rsp = self.fetch(url)
		root = self.html(rsp.text)
		aList = root.xpath("//div[contains(@class,'mi_cont')]//ul/li")
		videos = []
		for a in aList:
			name = a.xpath('./a/img/@alt')[0]
			pic = a.xpath('./a/img/@data-original')[0]
			mark = a.xpath("./div[@class='hdinfo']/span/text()")[0]
			sid = a.xpath("./a/@href")[0]
			sid = self.regStr(sid,"/movie/(\\S+).html")
			videos.append({
				"vod_id":sid,
				"vod_name":name,
				"vod_pic":pic,
				"vod_remarks":mark
			})

		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = 9999
		result['limit'] = 90
		result['total'] = 999999
		return result
	def detailContent(self,array):
		tid = array[0]
		url = 'https://www.czzy66.com/movie/{0}.html'.format(tid)
		rsp = self.fetch(url)
		root = self.html(rsp.text)
		node = root.xpath("//div[@class='dyxingq']")[0]

		pic = node.xpath(".//div[@class='dyimg fl']/img/@src")[0]
		title = node.xpath('.//h1/text()')[0]
		detail = root.xpath(".//div[@class='yp_context']//p/text()")[0]

		vod = {
			"vod_id":tid,
			"vod_name":title,
			"vod_pic":pic,
			"type_name":"",
			"vod_year":"",
			"vod_area":"",
			"vod_remarks":"",
			"vod_actor":"",
			"vod_director":"",
			"vod_content":detail
		}

		infoArray = node.xpath(".//ul[@class='moviedteail_list']/li")
		for info in infoArray:
			content = info.xpath('string(.)')
			if content.startswith('类型'):
				vod['type_name'] = content
			if content.startswith('年份'):
				vod['vod_year'] = content
			if content.startswith('地区'):
				vod['vod_area'] = content
			if content.startswith('豆瓣'):
				vod['vod_remarks'] = content
			if content.startswith('主演'):
				vod['vod_actor'] = content
			if content.startswith('导演'):
				vod['vod_director'] = content
			# if content.startswith('剧情'):
			# 	vod['vod_content'] = content

		vod_play_from = '$$$'
		playFrom = ['厂长']
		vod_play_from = vod_play_from.join(playFrom)
		
		vod_play_url = '$$$'
		playList = []
		vodList = root.xpath("//div[@class='paly_list_btn']")
		for vl in vodList:
			vodItems = []
			aList = vl.xpath('./a')
			for tA in aList:
				href = tA.xpath('./@href')[0]
				name = tA.xpath('./text()')[0]
				tId = self.regStr(href,'/v_play/(\\S+).html')
				vodItems.append(name + "$" + tId)
			joinStr = '#'
			joinStr = joinStr.join(vodItems)
			playList.append(joinStr)
		vod_play_url = vod_play_url.join(playList)

		vod['vod_play_from'] = vod_play_from
		vod['vod_play_url'] = vod_play_url

		result = {
			'list':[
				vod
			]
		}
		return result

	def searchContent(self,key,quick):		
		url = 'https://www.czzy66.com/xssearch?q={0}'.format(key)
		# getHeader()
		rsp = self.fetch(url)
		root = self.html(rsp.text)

		result = {}
		vodList = root.xpath("//div[contains(@class,'mi_ne_kd')]/ul/li/a")
		videos = []
		for vod in vodList:
			name = vod.xpath('./img/@alt')[0]
			pic = vod.xpath('./img/@data-original')[0]
			href = vod.xpath('./@href')[0]
			tid = self.regStr(href,'movie/(\\S+).html')
			remark = ""
			videos.append({
				"vod_id": tid,
				"vod_name": name,
				"vod_pic": pic,
				"vod_remarks": remark
			})
		result = {
			'list':videos
		}
		return result

	config = {
		"player": { },
		"filter": {	}
	}
	header = {
		"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36"
	}

	def parseCBC(self, enc, key, iv):
		keyBytes = key.encode("utf-8")
		ivBytes = iv.encode("utf-8")
		cipher = AES.new(keyBytes, AES.MODE_CBC, ivBytes)
		msg = cipher.decrypt(enc)
		paddingLen = msg[len(msg)-1]
		return msg[0:-paddingLen]

	def playerContent(self,flag,id,vipFlags):
		url = 'https://www.czzy66.com/v_play/{0}.html'.format(id)
		pat = '\\"([^\\"]+)\\";var [\\d\\w]+=function dncry.*md5.enc.Utf8.parse\\(\\"([\\d\\w]+)\\".*md5.enc.Utf8.parse\\(([\\d]+)\\)'
		rsp = self.fetch(url)

		html = rsp.text
		content = self.regStr(html,pat)
		key = self.regStr(html,pat,2)
		iv = self.regStr(html,pat,3)
		decontent = self.parseCBC(base64.b64decode(content),key,iv).decode()

		urlPat = 'video: \\{url: \\\"([^\\\"]+)\\\"'
		vttPat = 'subtitle: \\{url:\\\"([^\\\"]+\\.vtt)\\\"'

		str3 = self.regStr(decontent,urlPat)
		str4 = self.regStr(decontent,vttPat)

		self.loadVtt(str3)

		result = {
			'parse':'0',
			'playUrl':'',
			'url':str3,
			'header':''
		}
		if len(str4) > 0:
			result['subf'] = '/vtt/utf-8'
			# result['subt'] = Proxy.localProxyUrl() + "?do=czspp&url=" + URLEncoder.encode(str4)
			result['subt'] = ''
		return result

	def loadVtt(self,url):
		print(url)
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def localProxy(self,param):
		action = {}
		return [200, "video/MP2T", action, ""]