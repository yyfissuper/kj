// pages/class/class.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class:null,
    nav:[],//导航
    pro:[],//存放缓存回来的所有商品信息
    proList:[],//存放当前商品
    mask:true,//是否显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: "globalPro",
      success: (res) => {
        this.data.nav = res.data;
        //console.log(this.data.nav)
        for (var i = 0; i < res.data.length; i++) {
          this.data.pro = this.data.pro.concat(res.data[i].pro_list)
          //console.log(this.data.pro[i].price.toFixed(2))
          // this.data.pro[i].price = this.data.pro[i].price.toFixed(2)
        }
        this.setData({
          nav: this.data.nav,
          pro: this.data.pro
        })
        var nav = this.data.nav;
        var pro = this.data.pro;
        nav[0].select = true;
        this.data.proList.splice(0, this.data.proList.length)
        //console.log("nav",nav[0].pid)
        for (var i = 0; i < pro.length; i++) {
          // console.log(pro[i].pid)
          var pid = parseInt(pro[i].pid)
          //console.log(pid)
          if (pid == 0) {
            this.data.proList = this.data.proList.concat(pro[i])
          }
        }

        this.setData({
          nav: nav,
          proList: this.data.proList
        })
      }
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
  //跳转到搜索页面
  search:function(e){
    wx.navigateTo({
      url:"../search/search"
    })
  },
  //导航按钮
  activeBtn:function(e){
    //console.log(e)
    var n=e.currentTarget.id;
    var nav=this.data.nav;
    var pro=this.data.pro;
    this.data.proList.splice(0,this.data.proList.length)
    // console.log(nav[n].pid)
    for(var i=0;i<pro.length;i++){
      //当点击的按钮的pid==商品的pid 显示对应商品
      if(pro[i].pid==nav[n].pid){
        this.data.proList=this.data.proList.concat(pro[i])
       }
    }
    for(var i=0;i<nav.length;i++){
      nav[i].select=false;
      nav[n].select=true;
    }
    this.setData({
      nav:nav,
      proList: this.data.proList,
      mask:false
    })
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(()=>{
      wx.hideLoading();
      this.setData({
        mask:true
      })
    },1500)
  },
  //跳转到商品详情页
  pro_details:function(e){
    var el = e.currentTarget.id;
    //当前商品信息
    var pro=this.data.pro[el];
    //把当前商品放到全局变量中保存
    app.commonInfo.cart=pro;
  //  console.log(app.commonInfo.cart)
    wx.navigateTo({
      url:"../pro_details/pro_details"
    })
  }
})