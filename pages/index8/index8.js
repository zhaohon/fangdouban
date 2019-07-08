// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    listmore: [],
    jz: [],
    mp4:[],
    duanping:[],
    yingping:[],
    id :[],
    avatars:[],
    txtHidden: true,
    plHidden: true,
    kaiguan: "展开",
    // newsid:""
  },
  txtToggle: function () {
    this.txtHidden = !this.txtHidden
    let that = this;
    that.setData({
      txtHidden: !that.txtHidden

    })
    // 检测展开关闭按钮
    // console.log(this.txtHidden)
    if (this.txtHidden == true) {
      that.setData({
        kaiguan: "关闭"
      })
    } else {
      that.setData({
        kaiguan: "展开"
      })
    }
  },
  plToggle: function () {
    this.plHidden = !this.plHidden
    let that = this;
    that.setData({
      plHidden: !that.plHidden

    })
  },
  getListmore() {
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
            listmore:res.data.subjects
          })
        }
       
      }
    })
  },
  getjz(id) {
    // console.log(222)
    let that = this;
    // console.log(this)
    // let ul = "https://douban.uieee.com/v2/movie/subject/" + that.options.newsid;
    let ul = "https://douban.uieee.com/v2/movie/subject/" + id;
    console.log(ul)

    wx.request({
      url: ul,
      header: {
        // 下面这两个时好时坏，有些时候突然碰到400，请求头换一下就好了，这个问题我也无解
        // "Content-Type":"application/xml"
        "content-type": "json"
      },

      success: function (res) {
        console.log(res)
        if (res) {
          console.log(res.data)
          that.setData({
            list:res.data,
            jz: res.data.photos,
            mp4:res.data,
            yingping:res.data.popular_reviews,
            avatars : res.data.casts,
            duanping:res.data.popular_comments
            // avatars : res.data.subjects[index].casts
          })
        }

      }
    })
 
  },
  getList(data, index) {
    let that = this;
    wx.request({
      url: data,
      header: {
        // 下面这两个时好时坏，有些时候突然碰到400，请求头换一下就好了，这个问题我也无解
        // "Content-Type":"application/xml"
        "content-type": "json"
      },

      success: function (res) {
        // console.log(res.data.subjects)
        if (res) {
          // console.log(res.data.subjects[index])
          that.setData({

            list: res.data.subjects[index],
            avatars : res.data.subjects[index].casts,
            // id:res.data.subjects[index].id
          })
        }
        

      }
    })
    // console.log(this.id)
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.index)
    // this.getList(options.url, options.index)
    this.getjz(options.id)
    this.getListmore()
  
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