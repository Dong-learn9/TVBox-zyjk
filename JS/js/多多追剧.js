var rule = {
    title: '多多追剧[优]',
    模板: '首图',
    host: 'https://www.ddkk.tv',
    url: '/channel/fyclass-fypage.html',
    //searchUrl: '/search/-------------.html?wd=**',
    detailUrl: '/detail/fyid.html',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    搜索: 'json:list;name;pic;en;id',
    searchable: 1,
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_parse: '.myui-header__menu li;a&&Text;a&&href;/(\\d+).html',
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            header: {
                'User-Agent': PC_UA
            }
        }
    }),
}