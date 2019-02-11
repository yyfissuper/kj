// pages/myPocket/myPocket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:true,
    active:false,
    pocket:[
      {id:0,name:"商品",active:true},
      { id: 1, name: "专题", active: false},
    ],
    pro:[
      { id: 0, pic: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, num: 123243 },
      { id: 1, pic: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, num: 123243 },
      { id: 1, pic: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, num: 123243 },
      { id: 0, pic: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, num: 123243 },
      { id: 1, pic: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, num: 123243 },
    ]
  },
  //切换按钮
  active:function(e){
    //console.log(e)
    // var pocket=this.data.pocket;
    // var el = e.currentTarget.id;
    // for(var i=0;i<pocket.length;i++){
    //   pocket[i].active=false;
    //   pocket[el].active=true;
    // }
    // this.setData({
    //   pocket:pocket,
      
    // })
    var active=this.data.active;
    var selected = this.data.selected
    this.setData({
      active:!active,
      selected: !selected
    })
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