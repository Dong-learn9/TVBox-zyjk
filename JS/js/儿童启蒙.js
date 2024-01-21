var rule = {
    title:'兔小贝',
    host:'https://www.tuxiaobei.com',
    homeUrl:'https://www.tuxiaobei.com/list/25',
    url:'/list/mip-data?typeId=fyclass&page=fypage&callback=',
    detailUrl:'/play/fyid',
    searchUrl:'/search/index?key=**',
    searchable:1,
    quickSearch:1,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_url:'2&3&4&25',
    class_name:'儿歌&故事&国学&启蒙',
    //class_name:'#page-viewport&&ul&&li;.text&&Text;a&&href;/(.*)',
    cate_exclude:'应用',
    推荐:'.mip-infinitescroll-page;.items;.title&&text;mip-img&&src;.sort&&text;a&&href',
 
    limit:5,
    play_parse:true,
    lazy:'js:fetch_params.headers["user-agent"] = IOS_UA;let html=fetch(input,fetch_params);let src = jsp.pdfh(html,"body&&#videoWrap&&video-src");input=src;',
    // 一级:'json:data.items;name;image;collect_num;category_id+video_id',
    一级:'json:data.items;name;image;duration_string;video_id',
    二级:'*',
    搜索:'.list-con&&.items;.text&&Text;mip-img&&src;.time&&Text;a&&href',
}