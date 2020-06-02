//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
},
//上传图片到服务器
  uploadimg:function(e){
      console.log(e.currentTarget.dataset.mimg)
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        console.log(res);
        wx.uploadFile({
          url: 'http://localhost:50596/api/DealFile', 
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'userid': 'longdbid',
            'username':'longdb',
            'imgpath':e.currentTarget.dataset.mimg
          },
          success (res){
            const data = res.data
            //do something
            console.log(data);
            wx.showModal({
              title:'提示：',
              content:'图片上传成功('+res.data+')'
            })
          }
        })
      }
    })
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
