// 地址发布页 https://www.bttwo.vip/
var rule = {
    title:'两个BT',
    // host:'https://www.bttwoo.com',
    host:'https://www.bttwo.net',
    url:'/fyclass/page/fypage',
	filterable:0,//是否启用分类筛选,
    searchUrl:'/xssearch?q=**&f=_all&p=fypage',
    searchable:1,
    quickSearch:1,
    headers:{
        'User-Agent':'UC_UA',
        'Cookie':'myannoun=1'
    },
    timeout:5000,
    class_name:'电影&电视剧&动画',//静态分类名称拼接
    class_url:'gf&dsj&movie_bt_tags/donghua',//静态分类标识拼接
    // class_parse: '.navlist li:gt(0):lt(7);a&&Text;a&&href;.*/(\\w+)',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.leibox;li;*;*;*;*',
    double:true, // 推荐内容是否双层定位
    一级:'.bt_img li;.lazy&&alt;.thumb.lazy&&data-original;.jidi span&&Text;a&&href',
    二级:{
        "title":"h1&&Text;.moviedteail_list&&li:eq(0)&&Text",
        "img":".dyimg.fl img&&src",
        "desc":".moviedteail_list&&li:eq(9)&&Text;;;.moviedteail_list&&li:eq(7)&&Text;.moviedteail_list&&li:eq(5)&&Text",
        "content":".yp_context&&p:eq(0)&&Text",
        "tabs":".ypxingq_t:eq(1) span",
        "lists":".paly_list_btn:eq(#id) a"
    },
    搜索:'*',
}