
// 定義渲染區域
// 變數 vue1 = new Vue(); -> 新增一個 Vue 的 object
// el 指定元素 "選取器" -> 渲染target
var vue1 = new Vue({
    el: "#vue1",
    data: {
        textContent: 'Hello Vue!',
        a: 999,
        b: 3,
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        yahoo: 'https://tw.yahoo.com/',
        show: true,
        hidden: false,
        activity: true,
        range: 5,
        testArray: [
            {
                text: "YAHOO",
                web: "https://tw.yahoo.com/"
            },
            {
                text: "GOOGLE",
                web: "https://www.google.com/"
            }
        ],
        toggle: false,
        textContent2: '123',
        count: 0,
        name: '',
    },
    methods: {
        show2: function () {
            this.textContent2 = '點到了標題二';
        },
        add: function () {
            this.count++;
        },
        sub: function () {
            this.count--;
        }
    }
})

// 定義元件
// ("元件名稱"，{樣板: "元件內容"})
// 單行 HTML
Vue.component("test-a", {
    template: "<h2>這是測試元件</h2>"
})
// 多行 HTML
Vue.component("test-b", {
    template: `
    <div>
    <h2>這是測試元件b</h2>
    <p>段落文字</p>
    <hr>
    </div>`
})

var vue3 = new Vue ({
    el:"#vue3"
})

// 元件應用：分頁重複內容 - navBar、footer
Vue.component("navbar", {
    template: `
    <nav>
        <a href="./about.html">關於我</a>
        <a href="./work.html">作品集</a>
        <a href="./index.html">LOGO</a>
        <a href="./news.html">最新消息</a>
        <a href="./contact.html">聯絡我</a>
    </nav>
    `
})

var vue2 = new Vue ({
    el:"#vue2"
})




