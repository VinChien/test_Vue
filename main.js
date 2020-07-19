
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
        activity: true,
        range: 5,
        testArray: [
            {
                text: "YAHOO",
                web:"https://tw.yahoo.com/"
            },
            {
                text: "GOOGLE",
                web:"https://www.google.com/"
            }
        ],
        toggle: false,
        textContent2: '123',
        count:0,
        name:'',
    },
    methods: {
        show2: function() {
            this.textContent2 = '點到了標題二';
        },
        add: function() {
            this.count++;
        },
        sub: function() {
            this.count--;
        }
    }
})