//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
},
onLoad() {
    this.setData({
        search: this.search.bind(this)
    })
},
search: function (value) {
    console.log(value,222);
    return new Promise((resolve, reject) => {
        console.log(resolve,reject,33);
        //resolve() 成功时调用，reject()失败时调用。
        setTimeout(() => {
            resolve([{text: '大饼', value: 1}, {text: '只说代码的大饼', value: 2}])
        }, 200)
    })
},
selectResult: function (e) {
    console.log('select result', e.detail.item)
wx.showModal({
  title:"搜索组件",
  content:e.detail.item.text

})
},
})
