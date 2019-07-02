// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    listr: [],
    listj:[],
    inputShowed: false,
    inputVal: ""
  },
  
showInput: function () {
    this.setData({
        inputShowed: true
    });
},
hideInput: function () {
    this.setData({
        inputVal: "",
        inputShowed: false
    });
},
clearInput: function () {
    this.setData({
        inputVal: ""
    });
},
inputTyping: function (e) {
    this.setData({
        inputVal: e.detail.value
    });
},
  getList() {
    let that=this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header:{
        // 下面这两个时好时坏，有些时候突然碰到400，请求头换一下就好了，这个问题我也无解
        // "Content-Type":"application/xml"
        "content-type":"json"
    },

      success:function(res){
        // console.log(res.data.subjects)
        if(res){
          that.setData({
            list:res.data.subjects
          })
        }
       
      }
    })
  },
  // reying(data){
  //   wx.navigateTo({
  //     url:'../index2/index2'
  //   })
  // },
  getListr() {
    let that=this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250?start=0&count=10',
      header:{
        // 下面这两个时好时坏，有些时候突然碰到400，请求头换一下就好了，这个问题我也无解
        // "Content-Type":"application/xml"
        "content-type":"json"
    },

      success:function(res){
        // console.log(res)
        if(res){
          that.setData({
            listr:res.data.subjects
          })
        }
       
      }
    })
  },
  getListj() {
    let that=this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      header:{
        // 下面这两个时好时坏，有些时候突然碰到400，请求头换一下就好了，这个问题我也无解
        // "Content-Type":"application/xml"
        "content-type":"json"
    },

      success:function(res){
        // console.log(res.data.subjects)
        if(res){
          that.setData({
            listj:res.data.subjects
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
    this.getListr()
    this.getListj()
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