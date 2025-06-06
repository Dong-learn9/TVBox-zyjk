muban.首图2.二级.desc = 'p.data:eq(-1)&&Text;;;p.data:eq(-2)&&Text;p.data:eq(-3)&&Text';
var rule = {
    title:'达达龟',
    模板:'首图2',
    host:'https://www.dadagui.me',
    url:'/vodtype/fyclass-fypage.html',
    searchUrl: '/rss.xml?wd=**',
    class_parse: '.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    lazy: $js.toString(() => {
        let js = 'try{function requestApix(callback){$.post(\"api.php\",{vid:getQueryString(\"vid\")},function(result){callback(result.data.url);},\"json\");}requestApix(function(data){location.href=sign(data);})}catch(e){}location.href=document.querySelector(\"#playleft iframe\").src;';
        input = {
            parse: 1,
            url: input,
            click: js,
            js: js
        };
    }),
    搜索: $js.toString(() => {
        let html = post(input.split('?')[0], {body: input.split('?')[1]});
        let items = pdfa(html, 'rss&&item');
        // log(items);
        let d = [];
        items.forEach(it => {
            it = it.replace(/title|link|author|pubdate|description/g, 'p');
            let url = pdfh(it, 'p:eq(1)&&Text');
            d.push({
                title: pdfh(it, 'p&&Text'),
                url: url,
                desc: pdfh(it, 'p:eq(3)&&Text'),
                content: pdfh(it, 'p:eq(2)&&Text'),
                pic_url: "",
            });
        });
        setResult(d);
    }),
}