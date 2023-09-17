#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..')
from base.spider import Spider
import base64
import math
import json
import requests
import urllib

class Spider(Spider):
	def getName(self):
		return "爱看影视"
	def init(self,extend=""):
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"电影": "1",
			"剧集": "2",
			"综艺": "3",
			"动漫": "4",
			"美剧": "16",
			"日韩剧": "15",
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name': k,
				'type_id': cateManual[k]
			})

		result['class'] = classes
		if (filter):
			result['filters'] = self.config['filter']
		return result
	def homeVideoContent(self):
		result = {}
		return result

	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		url = 'https://ikan6.vip/vodtype/{0}-{1}/'.format(tid,pg)
		rsp = self.fetch(url)
		html = self.html(rsp.text)
		aList = html.xpath("//ul[contains(@class, 'myui-vodlist')]/li")
		videos = []
		numvL = len(aList)
		pgc = math.ceil(numvL/15)
		for a in aList:
			aid = a.xpath("./div[contains(@class, 'myui-vodlist__box')]/a/@href")[0]
			aid = self.regStr(reg=r'/voddetail/(.*?)/', src=aid)
			img = a.xpath(".//div[contains(@class, 'myui-vodlist__box')]/a/@data-original")[0]
			name = a.xpath(".//div[contains(@class, 'myui-vodlist__box')]/a/@title")[0]
			remark = a.xpath(".//span[contains(@class, 'pic-text text-right')]/text()")
			if remark == []:
				remark = a.xpath(".//span[contains(@class, 'pic-tag pic-tag-top')]/span/text()")
			remark = remark[0]
			videos.append({
				"vod_id": aid,
				"vod_name": name,
				"vod_pic": img,
				"vod_remarks": remark
			})
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = pgc
		result['limit'] = numvL
		result['total'] = numvL
		return result

	def detailContent(self,array):
		aid = array[0]
		url = 'https://ikan6.vip/voddetail/{0}/'.format(aid)
		rsp = self.fetch(url)
		html = self.html(rsp.text)
		node = html.xpath("//div[@class='myui-content__detail']")[0]
		title = node.xpath("./h1/text()")[0]
		pic = html.xpath("//a[@class='myui-vodlist__thumb picture']/img/@src")[0]
		cont = html.xpath("//div[@class='col-pd text-collapse content']/span[@class='data']/text()")[0].replace('\u3000','')
		infoList = node.xpath("./p[@class='data']")
		for info in infoList:
			content = info.xpath('string(.)').replace('\t','').replace('\r','').replace('\n','').strip()
			if content.startswith('导演：'):
				dir = content.replace('导演：','').strip()
			if content.startswith('主演：'):
				act = content.replace('主演：','').replace('\xa0','/').strip()
			if content.startswith('分类：'):
				infos = content.split('：')
				for i in range(0, len(infos)):
					if infos[i] == '分类':
						typeName = infos[i + 1][:-2]
					if infos[i][-2:] == '地区':
						area = infos[i + 1][:-2]
					if infos[i][-2:] == '年份':
						year = infos[i + 1]
		vod = {
			"vod_id": aid,
			"vod_name": title,
			"vod_pic": pic,
			"type_name": typeName,
			"vod_year": year,
			"vod_area": area,
			"vod_remarks": '',
			"vod_actor": act,
			"vod_director": dir,
			"vod_content": cont
		}
		urlList = html.xpath("//div[@class='tab-content myui-panel_bd']/div/ul/li")
		playUrl = ''
		for url in urlList:
			purl = url.xpath("./a/@href")[0]
			purl = self.regStr(reg=r'/vodplay/(.*?)/', src=purl)
			name = url.xpath("./a/text()")[0]
			playUrl = playUrl + '{0}${1}#'.format(name, purl)
		vod['vod_play_from'] = '爱看影视'
		vod['vod_play_url'] = playUrl

		result = {
			'list': [
				vod
			]
		}
		return result

	def verifyCode(self):
		retry = 10
		header = {
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"}
		while retry:
			try:
				session = requests.session()
				img = session.get('https://ikan6.vip/index.php/verify/index.html?', headers=header).content
				code = session.post('https://api.nn.ci/ocr/b64/text', data=base64.b64encode(img).decode()).text
				res = session.post(url=f"https://ikan6.vip/index.php/ajax/verify_check?type=search&verify={code}",
								   headers=header).json()
				if res["msg"] == "ok":
					return session
			except Exception as e:
				print(e)
			finally:
				retry = retry - 1

	def searchContent(self,key,quick):
		result = {}
		url = 'https://ikan6.vip/vodsearch/-------------/?wd={0}&submit='.format(key)
		session = self.verifyCode()
		rsp = session.get(url)
		root = self.html(rsp.text)
		vodList = root.xpath("//ul[@class='myui-vodlist__media clearfix']/li")
		videos = []
		for vod in vodList:
			name = vod.xpath("./div/h4/a/text()")[0]
			pic = vod.xpath("./div[@class='thumb']/a/@data-original")[0]
			mark = vod.xpath("./div[@class='thumb']/a/span[@class='pic-text text-right']/text()")[0]
			sid = vod.xpath("./div[@class='thumb']/a/@href")[0]
			sid = self.regStr(sid,"/voddetail/(\\S+)/")
			videos.append({
				"vod_id":sid,
				"vod_name":name,
				"vod_pic":pic,
				"vod_remarks":mark
			})
		result = {
				'list': videos
			}

		return result

	def playerContent(self,flag,id,vipFlags):
		result = {}
		header = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
			"Referer": "https://ikan6.vip/"
		}
		url = 'https://ikan6.vip/vodplay/{0}/'.format(id)
		rsp = self.fetch(url)
		cookie = rsp.cookies
		info = json.loads(self.regStr(reg=r'var player_data=(.*?)</script>', src=rsp.text))
		string = info['url'][8:len(info['url'])]
		substr = base64.b64decode(string).decode('UTF-8')
		str = substr[8:len(substr) - 8]
		if 'Ali' in info['from']:
			url = 'https://cms.ikan6.vip/ali/nidasicaibudaowozaina/nicaibudaowozaina.php?url={0}'.format(str)
		else:
			url = 'https://cms.ikan6.vip/nidasicaibudaowozaina/nicaibudaowozaina.php?url={0}'.format(str)
		rsp = self.fetch(url, headers=header, cookies=cookie)
		randomurl = self.regStr(reg=r"getrandom\(\'(.*?)\'", src=rsp.text)
		pstring = randomurl[8:len(randomurl)]
		psubstr = base64.b64decode(pstring).decode('UTF-8')
		purl = urllib.parse.unquote(psubstr[8:len(psubstr) - 8])
		result["parse"] = 0
		result["playUrl"] = ''
		result["url"] = purl
		result["header"] = ''
		return result

	config = {
		"player": {},
		"filter": {}
	}
	header = {}

	def localProxy(self,param):
		action = {
			'url':'',
			'header':'',
			'param':'',
			'type':'string',
			'after':''
		}
		return [200, "video/MP2T", action, ""]