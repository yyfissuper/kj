// pages/search/search.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    click:false,
    hasList:false,//判断有无商品
    noHasList:false,
    searchContent:[],//当前商品
    proData:[],//分类下的商品
    s_class:[
      {id:0,name:"默认",active:true},
      {id:1,name:"秒杀",active:false},
      {id:2,name:"拼团",active:false},
      {id:3,name:"预约",active:false},
    ],
    text:"默认",
    inputValue: "",//搜索框的值
    showView:true//历史记录  默认显示
  },
  //搜索功能
  bindKeywordInput:function(e){
    //console.log(e.detail.value)
    this.setData({
      inputValue:e.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'globalPro',
      success:(res)=>{
        //设置当前商品
        var searchContent=[];
        this.setData({
          searchContent:res.data
        })
      },
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
  //搜索
  search:function(e){
    var searchList=this.data.searchContent;
    var inputValue = this.data.inputValue;
    var proData=[];
    var hasList=this.data.hasList;
    for(var i=0;i<searchList.length;i++){
      if (searchList[i].name == inputValue){
        proData = searchList[i].pro_list;
        this.data.hasList=true;
        this.data.noHasList = false;
       }//else{
      //   console.log("没有此商品");
      //   this.data.noHasList=true;
      // }
    }
   wx.showLoading({title: '正在加载...',})
   setTimeout((e)=>{
     wx.hideLoading();
     this.setData({
       proData: proData,
       hasList:this.data.hasList,
       noHasList:this.data.noHasList,
       showView:false
     })
   },2000)
  },
  //点击默认切换选项
  default:function(e){
    this.setData({click:true})
  },
  //点击默认 选项
  searchClass:function(e){
    //console.log(e.currentTarget.id)
    var that=this;
    var id=e.currentTarget.id;
    var s_class=that.data.s_class;
    for(var i=0;i<s_class.length;i++){
      s_class[i].active=false;
      s_class[id].active=true;
    }
   
    that.data.text=s_class[id].name;
    var text=that.data.text;
    this.setData({
      s_class:s_class,
      text:text,
      click:false
    })
  },
  //点击进入商品详情页
  proDetail:function(e){
    var proData=this.data.proData;
    var el = proData[e.currentTarget.id];
    app.commonInfo.cart=el;
    wx.navigateTo({
     url: '../pro_details/pro_details',
    })
  }
})