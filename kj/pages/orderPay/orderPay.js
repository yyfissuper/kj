// pages/orderPay/orderPay.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totle:"",//总价
    payment: [
      { id: 0, src: "/img/images/weifu.png", payment: "微信支付", selected: true },
      { id: 1, src: "/img/images/zhifu.png", payment: "支付宝支付", selected: false }
    ]
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
    this.data.totle = app.commonInfo.total;
    this.setData({
      totle: this.data.totle
    })
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
  // 切换支付宝 微信按钮  
  selected: function (e) {
    var el = e.currentTarget.dataset.id;
    var payment = this.data.payment;
    for (var i = 0; i < payment.length; i++) {
      payment[i].selected = false;
      payment[el].selected = true
    }
    this.setData({ payment: payment })
  },
  // 确认支付 关闭当前页面 跳转到首页
  closeBtn:function(e){
    wx.showLoading({
      title: '支付中...',
    })
    setTimeout(()=>{
      wx.hideLoading()
      wx.showToast({
        title: '支付成功',
        duration:1000,
        success:function(){
          setTimeout(()=>{
            wx.switchTab({
              url: '../index/index',
            })
          },1000)
        }
      })
    },5000)
  }
})