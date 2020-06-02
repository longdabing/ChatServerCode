// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    back: false,
    loading: true,
  },
  getdata: function () {
    wx.request({
      url: 'http://localhost:50596/weatherforecast',
      success: (res) => {
        console.log(res.data);
      }
    })
  },
  uploadfile:function(){
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
            'username':'longdb'
          },
          success (res){
            const data = res.data
            //do something
            console.log(data);
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})