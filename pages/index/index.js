//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: ""
},
onLoad() {
    this.setData({
        search: this.search.bind(this)
    })
},
search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '大饼', value: 1}, {text: '只说代码的大饼', value: 2}])
        }, 200)
    })
},
selectResult: function (e) {
    console.log('select result', e.detail)
},
})
