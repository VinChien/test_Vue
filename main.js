
// 定義渲染區域
// 變數 vue1 = new Vue(); -> 新增一個 Vue 的 object
// el 指定元素 "選取器" -> 渲染target
var vue1 = new Vue ({
    el:"#vue1",
    data: {
        textContent: 'Hello Vue!',
        a:999,
        b:3,
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        yahoo: 'https://tw.yahoo.com/',
        show: true,
        hidden: false,
        activity: true
    }
})