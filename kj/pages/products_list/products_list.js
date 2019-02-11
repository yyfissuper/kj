// pages/products_list/products_list.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      {id:0,name:"综合",active:true},
      {id:1,name:"最新",active:false},
      {id:2,name:"价格",active:false},
      {id:3,name:"综合",active:false},
    ],
    pro:[],
    mask:true//默认显示
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
    wx.getStorage({
      key: 'class_pro',
      success: (res)=>{
        this.setData({
          pro: res.data.pro_list
        })
      },
    })
    console.log(this.data.pro)
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

  },
  //切换
  active:function(e){
    var n = e.currentTarget.id;
    var nav = this.data.nav;
    wx.showLoading({
      title: '加载中',
    })
    for (var i = 0; i < nav.length; i++) {
      nav[i].active = false;
      nav[n].active = true
    }
    this.setData({ mask: false, nav: nav})
    setTimeout(()=>{
      wx.hideLoading()
      this.setData({
        mask: true
      })
    }, 2000)
  },
 //跳转到产品详情
 detail:function(e){
   console.log(e.currentTarget.id)
   var el=e.currentTarget.id;
   var pro=this.data.pro;
   app.commonInfo.cart=pro[el]
   //console.log(pro[el])
    wx.navigateTo({
      url:"../pro_details/pro_details"
    })
  },
})