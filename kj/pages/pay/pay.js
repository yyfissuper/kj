// pages/pay/pay.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView:false,
    totle:"",
    selectAddress:"请选择收货地址",
  },
  //弹出框
  hasmore:function(){
    this.setData({
      showView:true
    })
  },
  close:function(){
    this.setData({
      showView:false
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var areaInfo=options.areaInfo;
    this.setData({
      selectAddress: areaInfo
    })
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
      totle:this.data.totle
    })
    wx.getStorage({
      key: 'payShop',
      success: (res)=>{
      // console.log(res.data)
        var carts=[];
        this.setData({
          carts:res.data
        })
      },
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
  //跳转到收货地址
  selAddress:function(e){
    wx.navigateTo({
      url:"../sel-address/sel-address"
    })
  },
  //跳转到支付页面
  submitBtn:function(){
    var selectAddress = this.data.selectAddress;
    if (selectAddress == undefined){
      wx.showToast({
        title: '请选择收货地址',
        icon:"none",
        duration:1000
      })
    }else{
      wx.navigateTo({
        url: '../orderPay/orderPay',
      })
    }
   
  }
})