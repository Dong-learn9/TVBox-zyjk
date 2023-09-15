muban.短视2.二级.img = '.detail-pic&&img&&data-src';
var rule = {
    title: '星星影视',
    模板:'短视2',
    host: 'https://www.xy1080.net',
    homeUrl:'/map.html',
    // url: '/index.php/api/vod#type=fyclass&page=fypage',
    url: '/index.php/api/vod/#type=class&page=fypage',
   //url:'/index.php/vod/show/id/fyfilter.html',
   
    filterable:1,//是否启用分类筛选,

   
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'}
    },
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    搜索:'json:list;name;pic;;id',
    class_parse:'.swiper-wrapper&&li;a&&Text;a&&href;.*/(\\d+).html',
    class_name:'',
    class_url:'',
    detailUrl:'/voddetail/fyid/',
    推荐:'.border-box .public-list-box;a&&title;.data-src;.public-list-prb&&Text;a&&href',
    图片来源:'@Referer=https://www.xy1080.net/',
    double: false, // 推荐内容是否双层定位
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
}