// pages/pro_details/pro_details.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart:null,//商品信息
    selPro:[],
    //商品详情  切换
    selected:true,
    select:false,
    showModal:false,
    showView:false,
    animationData:"",
  },
  //加减按钮i
  delCount:function(e){
    var cart=this.data.cart;

    if(cart.num>0){
      cart.num--;
      cart.stock++;
    }
    this.setData({
      cart:cart
    })
  },
  addCount:function(e){
    var cart = this.data.cart;
    if(cart.stock>0){
      cart.stock--;
      cart.num++;
    }else{
      wx.showToast({
        title: "没有更多商品了,再看看其他的!!!",
        icon: "none",
        duration: 2000
      })
    }
    this.setData({
      cart: cart
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前商品 并且把当前商品放入cart中
    this.setData({
      cart: app.commonInfo.cart
    })
    //console.log(this.data.cart)
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
  //点击切换事件
  active:function(e){
    this.setData({
      selected:true,
      select:false,
    })
  },
  disabled:function(e){
    this.setData({
      selected:false,
      select:true,
    })
  },
  //跳转到首页
  index:function(e){
    wx.switchTab({
      url:"../index/index"
    })
  },
  share:function(e){
    this.setData({
      showModal:true
    })
  },
  close:function(){
    this.setData({
      showModal:false
    })
  },
  //跳转到购物车
  mycart:function(){
    wx.switchTab({
      url:"../cart/cart"
    })
  },
  //加入购物车
  addcart:function(e){
    this.setData({
      showView:true
    })
    this.runAnimation()
  },
  //创建动画 调用时执行
  runAnimation:function(){
    var animation=wx.createAnimation({
      duration:600,
      timingFunction:"ease"
    })
    this.animation=animation;
    setTimeout(()=>{
      this.setData({
        animationData:this.animation
      })
      this.shoFade()
    },200)
  },
  //显示动画
  shoFade: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  // 隐藏动画
  hidFade: function () {
    this.animation.translateY(600).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  //将数据添加到购物车
  goCart:function(e){
    var mgwc = wx.getStorageSync("addCart");
    // console.log(mgwc)
    if (mgwc == ""){
      var salePro = [];
      salePro.push(this.data.cart);
      wx.setStorage({
        key: 'addCart',
        data: salePro,
      })
    }else{
      mgwc.push(this.data.cart);
      wx.setStorage({
        key: 'addCart',
        data: mgwc,
      })
    }
    wx.showToast({
      title: '添加成功',
      icon:"none",
      duration:2000
    })
    this.cartClose()
  },
  //关闭加入购物车按钮
  cartClose:function(e){
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: "ease"
    })
    this.animation = animation
    this.hidFade()//调用隐藏动画
    setTimeout(() => {
      this.setData({
        showView: false
      })
    }, 720)
  },
  //客服电话
  phone:function(e){
    wx.makePhoneCall({
      phoneNumber: "15847294649",
      success:(e)=>{
        console.log("成功")
      },
      fail:(e)=>{
        console.log("失败")
      }
    })
  }
})