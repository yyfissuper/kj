// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:0,name:"待付款"},
      {id:1,name:"待发货"},
      {id:2,name:"待收货"},
      {id:3,name:"已完成"},
      {id:4,name:"售后"},
    ],
    order:true,
    showView:true//全部显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.id)
    var id=options.id;
    //console.log(this.data.list)
    var list=this.data.list;
    for(var i=0;i<list.length;i++){
      list[id].active=true;
      list[i].active=false;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    this.setData({
      list:list,
      showView:false,
      order:false
    })
    setTimeout(() => {
      wx.hideLoading();
      this.setData({ order: true, showView:true})
    }, 1500)
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

  },
  active:function(e){
    var el=e.currentTarget.id;
    var list=this.data.list;
    for(var i=0;i<list.length;i++){
      list[i].active=false;
      list[el].active=true;
    }
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    this.setData({
      list:list,
      order:false
    })
    setTimeout(()=>{
      wx.hideLoading();
      this.setData({order:true})
    },1500)
  }
})