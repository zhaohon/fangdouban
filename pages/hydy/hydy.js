// pages/hydy/hydy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  getList() {
    let that = this;
    wx.request({
      url: "https://douban.uieee.com/v2/movie/top250?start=0&count=10",
      header: {
        // 下面这两个时好时坏，有些时候突然碰到400，请求头换一下就好了，这个问题我也无解
        // "Content-Type":"application/xml"
        "content-type": "json"
      },

      success: function (res) {
        // console.log(res.data.subjects)
        if (res) {
          console.log(res.data.subjects)
          that.setData({

            list: res.data.subjects
          })
        }
        

      }
    })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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