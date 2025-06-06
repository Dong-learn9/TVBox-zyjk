var rule = {
    title:'央视频',
    host:'https://api.cntv.cn',
    homeUrl: '/lanmu/columnSearch?&fl=&fc=&cid=&p=1&n=500&serviceId=tvcctv&t=json',
             //lanmu/columnSearch?&fl=&fc=&cid=&p=1&n=20&serviceId=tvcctv&t=jsonp&cb=Callback
    url:'/list/getVideoAlbumList?fyfilter&area=&letter=&n=24&serviceId=tvcctv&t=json',
    
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name: '4K专区&电视剧&动画片&栏目大全&特别节目&纪录片',
    class_url: '4K专区&电视剧&动画片&栏目大全&特别节目&纪录片',
    filterable: 1,
    filter_url: 'channel={{fl.channel}}&sc={{fl.sc}}&year={{fl.year}}',
    filter: {
    "栏目大全":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"CCTV-1综合,CCTV-1高清,CCTV-1综合高清"},{"n":"CCTV-2财经","v":"CCTV-2财经,CCTV-2高清,CCTV-2财经高清"},{"n":"CCTV-3综艺","v":"CCTV-3综艺,CCTV-3高清,CCTV-3综艺高清"},{"n":"CCTV-4中文国际","v":"CCTV-4中文国际,CCTV-4高清,CCTV-4中文国际(亚)高清"},{"n":"CCTV-5体育","v":"CCTV-5体育,CCTV-5高清,CCTV-5体育高清"},{"n":"CCTV-6电影","v":"CCTV-6电影,CCTV-6高清,CCTV-6电影高清"},{"n":"CCTV-7国防军事","v":"CCTV-7国防军事,CCTV-7高清,CCTV-7国防军事高清"},{"n":"CCTV-8电视剧","v":"CCTV-8电视剧,CCTV-8高清,CCTV-8电视剧高清"},{"n":"CCTV-9纪录","v":"CCTV-9纪录,CCTV-9高清,CCTV-9纪录高清"},{"n":"CCTV-10科教","v":"CCTV-10科教,CCTV-10高清,CCTV-10科教高清"},{"n":"CCTV-11戏曲","v":"CCTV-11戏曲,CCTV-11高清,CCTV-11戏曲高清"},{"n":"CCTV-12社会与法","v":"CCTV-12社会与法,CCTV-12高清,CCTV-12社会与法高清"},{"n":"CCTV-13新闻","v":"CCTV-13新闻,CCTV-13高清,CCTV-13新闻高清"},{"n":"CCTV-14少儿","v":"CCTV-14少儿,CCTV-14高清,CCTV-14少儿高清"},{"n":"CCTV-15音乐","v":"CCTV-15音乐,CCTV-15高清,CCTV-15音乐高清"},{"n":"CCTV-17农业农村","v":"CCTV-17农业农村,高清,高清"}]},
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"新闻","v":"新闻"},{"n":"经济","v":"经济"},{"n":"综艺","v":"综艺"},{"n":"体育","v":"体育"},{"n":"军事","v":"军事"},{"n":"影视","v":"影视"},{"n":"科教","v":"科教"},{"n":"戏曲","v":"戏曲"},{"n":"青少","v":"青少"},{"n":"音乐","v":"音乐"},{"n":"社会","v":"社会"},{"n":"公益","v":"公益"},{"n":"其他","v":"其他"}]},
            ],
		"纪录片":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"CCTV-1综合,CCTV-1高清,CCTV-1综合高清"},{"n":"CCTV-2财经","v":"CCTV-2财经,CCTV-2高清,CCTV-2财经高清"},{"n":"CCTV-3综艺","v":"CCTV-3综艺,CCTV-3高清,CCTV-3综艺高清"},{"n":"CCTV-4中文国际","v":"CCTV-4中文国际,CCTV-4高清,CCTV-4中文国际(亚)高清"},{"n":"CCTV-5体育","v":"CCTV-5体育,CCTV-5高清,CCTV-5体育高清"},{"n":"CCTV-6电影","v":"CCTV-6电影,CCTV-6高清,CCTV-6电影高清"},{"n":"CCTV-7国防军事","v":"CCTV-7国防军事,CCTV-7高清,CCTV-7国防军事高清"},{"n":"CCTV-8电视剧","v":"CCTV-8电视剧,CCTV-8高清,CCTV-8电视剧高清"},{"n":"CCTV-9纪录","v":"CCTV-9纪录,CCTV-9高清,CCTV-9纪录高清"},{"n":"CCTV-10科教","v":"CCTV-10科教,CCTV-10高清,CCTV-10科教高清"},{"n":"CCTV-11戏曲","v":"CCTV-11戏曲,CCTV-11高清,CCTV-11戏曲高清"},{"n":"CCTV-12社会与法","v":"CCTV-12社会与法,CCTV-12高清,CCTV-12社会与法高清"},{"n":"CCTV-13新闻","v":"CCTV-13新闻,CCTV-13高清,CCTV-13新闻高清"},{"n":"CCTV-14少儿","v":"CCTV-14少儿,CCTV-14高清,CCTV-14少儿高清"},{"n":"CCTV-15音乐","v":"CCTV-15音乐,CCTV-15高清,CCTV-15音乐高清"},{"n":"CCTV-17农业农村","v":"CCTV-17农业农村,高清,高清"}]},
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"人文历史","v":"人文历史"},{"n":"人物","v":"人物"},{"n":"军事","v":"军事"},{"n":"探索","v":"探索"},{"n":"社会","v":"社会"},{"n":"时政","v":"时政"},{"n":"经济","v":"经济"},{"n":"科技","v":"科技"}]},
            {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"}]},
        ],
		"特别节目":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"CCTV-1综合,CCTV-1高清,CCTV-1综合高清"},{"n":"CCTV-2财经","v":"CCTV-2财经,CCTV-2高清,CCTV-2财经高清"},{"n":"CCTV-3综艺","v":"CCTV-3综艺,CCTV-3高清,CCTV-3综艺高清"},{"n":"CCTV-4中文国际","v":"CCTV-4中文国际,CCTV-4高清,CCTV-4中文国际(亚)高清"},{"n":"CCTV-5体育","v":"CCTV-5体育,CCTV-5高清,CCTV-5体育高清"},{"n":"CCTV-6电影","v":"CCTV-6电影,CCTV-6高清,CCTV-6电影高清"},{"n":"CCTV-7国防军事","v":"CCTV-7国防军事,CCTV-7高清,CCTV-7国防军事高清"},{"n":"CCTV-8电视剧","v":"CCTV-8电视剧,CCTV-8高清,CCTV-8电视剧高清"},{"n":"CCTV-9纪录","v":"CCTV-9纪录,CCTV-9高清,CCTV-9纪录高清"},{"n":"CCTV-10科教","v":"CCTV-10科教,CCTV-10高清,CCTV-10科教高清"},{"n":"CCTV-11戏曲","v":"CCTV-11戏曲,CCTV-11高清,CCTV-11戏曲高清"},{"n":"CCTV-12社会与法","v":"CCTV-12社会与法,CCTV-12高清,CCTV-12社会与法高清"},{"n":"CCTV-13新闻","v":"CCTV-13新闻,CCTV-13高清,CCTV-13新闻高清"},{"n":"CCTV-14少儿","v":"CCTV-14少儿,CCTV-14高清,CCTV-14少儿高清"},{"n":"CCTV-15音乐","v":"CCTV-15音乐,CCTV-15高清,CCTV-15音乐高清"},{"n":"CCTV-17农业农村","v":"CCTV-17农业农村,高清,高清"}]},
            
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"新闻","v":"新闻"},{"n":"经济","v":"经济"},{"n":"综艺","v":"综艺"},{"n":"体育","v":"体育"},{"n":"军事","v":"军事"},{"n":"影视","v":"影视"},{"n":"科教","v":"科教"},{"n":"戏曲","v":"戏曲"},{"n":"青少","v":"青少"},{"n":"音乐","v":"音乐"},{"n":"社会","v":"社会"},{"n":"公益","v":"公益"},{"n":"其他","v":"其他"}]},
        ],
        "电视剧":[
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"谍战","v":"谍战"},{"n":"悬疑","v":"悬疑"},{"n":"刑侦","v":"刑侦"},{"n":"历史","v":"历史"},{"n":"古装","v":"古装"},{"n":"武侠","v":"武侠"},{"n":"军旅","v":"军旅"},{"n":"战争","v":"战争"},{"n":"喜剧","v":"喜剧"},{"n":"青春","v":"青春"},{"n":"言情","v":"言情"},{"n":"偶像","v":"偶像"},{"n":"家庭","v":"家庭"},{"n":"年代","v":"年代"},{"n":"革命","v":"革命"},{"n":"农村","v":"农村"},{"n":"都市","v":"都市"},{"n":"其他","v":"其他"}]},
            {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"}]},
        ],
    },
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:10000,
    play_parse:true,
    

lazy: $js.toString(() => {
    let id = input.split("|")[0];
    let k4 = input.split("|")[1];
    if (k4 === '7') {
        input = 'https://hls.cntv.myalicdn.com//asp/hls/4000/0303000a/3/default/' + id + '/4000.m3u8';
    } else {
        input = 'https://hls.cntv.myalicdn.com//asp/hls/2000/0303000a/3/default/' + id + '/2000.m3u8';
    }
//https://vdn.apps.cntv.cn/api/getHttpVideoInfo.do?pid='+input
}),


    limit:6,
    double:false,

    推荐: $js.toString(() => {
        var d = [];
        var list = JSON.parse(request(input)).response.docs;

        list.forEach(it => {
            // 一级标题
            let title1 = it.column_name;
            // 一级描述
            let desc1 = it.channel_name;
            // 一级图片URL
            let picUrl1 = it.column_logo;
            // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 更新至）
            let url1 = it.lastVIDE.videoSharedCode + '|' + '' + '|' + it.column_firstclass + '|' + it.column_name + '|' + '' + '|' + it.column_playdate + '|' + it.channel_name + '|' + it.column_brief + '|' + it.column_logo + '|' + '' + '|' + it.lastVIDE.videoTitle;

            d.push({
                desc : desc1,
                title : title1,
                pic_url : picUrl1,
                url : url1
            })
        })
        setResult(d);
    }),

    
    一级: $js.toString(() => {
        var d = [];
        if(MY_CATE==='栏目大全') {
            var list = JSON.parse(request(HOST+'/lanmu/columnSearch?&fl=&fc=&cid=&p='+MY_PAGE+'&n=500&serviceId=tvcctv&t=json')).response.docs;
            list.forEach(it => {
                // 一级标题
                let title1 = it.column_name;
                // 一级描述
                let desc1 = it.channel_name;
                // 一级图片URL
                let picUrl1 = it.column_logo;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 更新至）
                let url1 = it.lastVIDE.videoSharedCode + '|' + '' + '|' + it.column_firstclass + '|' + it.column_name + '|' + '' + '|' + it.column_playdate + '|' + it.channel_name + '|' + it.column_brief + '|' + it.column_logo + '|' + '' + '|' + it.lastVIDE.videoTitle;
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })
        }
     else   if(MY_CATE==='4K专区') {
     var list = JSON.parse(request(HOST+'/NewVideo/getLastVideoList4K?serviceId=cctv4k&cid=&p='+MY_PAGE+'&n=500&serviceId=tvcctv&t=json')).data.list;
            list.forEach(it => {
                // 一级标题
                let title1 = it.title;
                // 一级描述
                let desc1 = it.sc + ((typeof it.year==='undefined' || it.year==='')?'':('•'+it.year)) + ((typeof it.count==='undefined' || it.count==='')?'':('•共' + it.count + '集'));
                // 一级图片URL
                let picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                let url1 = it.id + '|' + it.area + '|' + it.sc + '|' + it.title + '|' + it.actors + '|' + it.year + '|' + it.channel + '|' + it.brief + '|' + it.image + '|' + it.count + '|' + '' + '|' + MY_CATE;
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })
     
     }
    
        else {
            var channelMap = {
                "特别节目": "CHAL1460955953877151",
                "纪录片": "CHAL1460955924871139",
                "电视剧": "CHAL1460955853485115",
                "动画片": "CHAL1460955899450127",
            };
            var list = JSON.parse(request(input+'&channelid='+channelMap[MY_CATE]+'&fc='+MY_CATE+'&p='+MY_PAGE)).data.list;
            list.forEach(it => {
                // 一级标题
                let title1 = it.title;
                // 一级描述
                let desc1 = it.sc + ((typeof it.year==='undefined' || it.year==='')?'':('•'+it.year)) + ((typeof it.count==='undefined' || it.count==='')?'':('•共' + it.count + '集'));
                // 一级图片URL
                let picUrl1 = it.image;
                // 一级URL（id 地区 类型 标题 演员 年份 频道 简介 图片 集数）
                let url1 = it.id + '|' + it.area + '|' + it.sc + '|' + it.title + '|' + it.actors + '|' + it.year + '|' + it.channel + '|' + it.brief + '|' + it.image + '|' + it.count + '|' + '' + '|' + MY_CATE;
                d.push({
                    desc : desc1,
                    title : title1,
                    pic_url : picUrl1,
                    url : url1
                })
            })
        }
        setResult(d);
    }),
    
    二级: $js.toString(() => {
        let info = input.split("|");
        
        VOD = {
            vod_id: info[0],
            vod_name: info[3],
            vod_pic: info[8],
            type_name: info[2]==='undefined'?'':info[2],
            vod_year: info[5]==='undefined'?'':info[5],
            vod_area: info[1]==='undefined'?'':info[1],
            vod_remarks: info[9]===''?('更新至'+info[10]):('共'+info[9]+'集'),
            vod_director: info[6]==='undefined'?'':info[6],
            vod_actor: info[4]==='undefined'?'':info[4],
        //   vod_content: info[7]==='undefined'?'':info[7],

        };
        var modeMap = {
            "4K专区": "0",
            "特别节目": "0",
            "纪录片": "0",
            "电视剧": "0",
            "动画片": "1",
            
        };
        var ctid = info[0].replace('https://api.cntv.cn/lanmu/','');
        var link = 'https://api.cntv.cn/NewVideo/getVideoListByAlbumIdNew?id='+ctid+'&serviceId=tvcctv&p=1&n=100&mode='+modeMap[info[11]]+'&pub=1';
        var html = JSON.parse(request(link));
        var playUrls;     
        if(html.errcode==='1001'){
            var guid = info[0].replace('https://api.cntv.cn/lanmu/','');
            var link1 = 'https://api.cntv.cn/video/videoinfoByGuid?guid='+guid+'&serviceId=tvcctv';
            ctid = JSON.parse(request(link1)).ctid.replace('https://api.cntv.cn/lanmu/','');
            var link2 = 'https://api.cntv.cn/NewVideo/getVideoListByColumn?id='+ctid+'&d=&p=1&n=100&sort=desc&mode=0&serviceId=tvcctv&t=json';
            playUrls = JSON.parse(request(link2)).data.list;

        } else {
            playUrls = html.data.list;
            // 获取更多数据，暂不需要
            var flag = '';
            if(playUrls===''){
                flag = 'true';
            }
            var page = 1;
            while(flag===''){
                page = page+1;
                var burl = 'https://api.cntv.cn/NewVideo/getVideoListByAlbumIdNew?id='+ctid+'&serviceId=tvcctv&p='+page+'&n=100&mode='+modeMap[info[11]]+'&pub=1';
                var list = JSON.parse(request(burl)).data.list;
                if (list.length!==0){
                    list.forEach(it => {
                        playUrls.push(it);
                    })
                    continue;
                }else{
                    flag='true';
                    break;
                }
            }
        }
        
        let playFrom = [];
        let playList = [];
        playFrom.append('央视频');
        playUrls.forEach(it => {
            playList.append(playUrls.map(function(it) {
                return it.title + "$" + it.guid + "|" + it.type
            }).join("#"))
        });

        // 最后封装所有线路
    //    let  vod_content = playUrls;
        let vod_play_from = playFrom.join('$$$');
        let vod_play_url = playList.join('$$$');
        VOD['vod_play_from'] = vod_play_from;
        VOD['vod_play_url'] = vod_play_url;
    }),

    搜索:'',
}