// pages/myhome/myhome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    linjuan: false,//领劵
    animationData: {},//弹出框动画
    myorder:[
      {id:0,scr:"/img/images/fk.png",title:"待付款"},
      {id:1,scr:"/img/images/fh.png",title:"待发货"},
      {id:2,scr:"/img/images/sh.png",title:"待收货"},
      {id:3,scr:"/img/images/wc.png",title:"已完成"},
      {id:4,scr:"/img/images/shou.png",title:"售后"},
    ],
    mymodal:[
      {id:0,src:"/img/images/subscribe.png",title:"我的预约",jt:"/img/tab/more.png"},
      {id:1,src:"/img/images/fxs.png",title:"成为分销商",jt:"/img/tab/more.png"},
      {id:2,src:"/img/images/kj.png",title:"我的卡券",jt:"/img/tab/more.png"},
      {id:3,src:"/img/images/lj.png",title:"领券中心",jt:"/img/tab/more.png"},
      {id:4,src:"/img/images/sc.png",title:"我的收藏",jt:"/img/tab/more.png"},
      {id:5,src:"/img/images/kf.png",title:"在线客服",jt:"/img/tab/more.png"}

    ]
  },
  //点击事件跳转不同页面 我的预约
  mClick:function(e){
   // console.log(e)
    var el = e.currentTarget.id;
    console.log(el)
    //跳转到我的预约
    if(el==0){
      wx.navigateTo({
        url:"../myorder/myorder?id="+el
      })
      return false
    }
    //跳转到成为分销商
    if(el==1){
      wx.navigateTo({
        url:"../applyFor/applyFor"
      })
      return false
    }
    //跳转到我的卡券
    if(el==2){
      wx.navigateTo({
        url: "../card/card"
      })
      return false
    }
    //跳转到领券中心
    if (el == 3) {
      // wx.showToast({
      //   title: '暂时还没有开通此功能哦 !^_^!',
      //   icon: 'none',
      //   duration: 2000,
      // })
      this.setData({
        linjuan: true
      })
      this.runAnimation()
      return false
    }
    //跳转到我的优惠券
    if (el == 4) {
      wx.navigateTo({
        url: "../myPocket/myPocket"
      })
      return false
    }
    //跳转到我的收藏
    if (el == 5) {
      // wx.navigateTo({
      //   url: "../myPocket/myPocket"
      // })
      wx.showToast({
        title: '暂时还没有开通此功能哦 !^_^!',
        icon: 'none',
        duration: 2000,
      })
      return false
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  //领券
  // 领取优惠券
  getAcoupon: function () {
    wx.showToast({
      title: '领取成功',
      duration: 2000
    })
    this.noSelectCard()
  },
  //关闭领券
  noSelectCard: function (e) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: "ease"
    })
    this.animation = animation
    this.hidFade()//调用隐藏动画
    setTimeout(() => {
      this.setData({
        linjuan: false
      })
    }, 720)
  },
  //创建动画 调用执行动画
  runAnimation: function () {
    var animation = wx.createAnimation({
      duration: 600,
      timingFunction: "ease"
    })
    this.animation = animation;
    setTimeout(() => {
      this.setData({
        animationData: this.animation
      })
      this.shoFade()
    }, 200)
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
  //跳转到订单列表
  myorder:function(e){
    console.log(e.currentTarget.id)
    var id=e.currentTarget.id;
    wx.navigateTo({
      url:"../myorder/myorder?id="+id,
    })
  }
})