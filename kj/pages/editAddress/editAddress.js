// pages/editAddress/editAddress.js
var address = require('../../utils/citys.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",//用户姓名
    userPhone:"",//用户电话
    userAddress:"",//用户详细地址
    // cityName:'请选择',//选择地址 第一种方式
    //第二种方式 三级联动
    menuType: 0,
    begin: null,
    status: 1,
    end: null,
    isVisible: false,
    animationData: {},
    animationAddressMenu: {},
    addressMenuIsShow: false,
    value: [0, 0, 0],
    provinces: [],
    citys: [],
    areas: [],
    province: '',
    city: '',
    area: ''
    
  },
  //(方式一)跳转到城市页面
  // address:function(e){
  //   wx.navigateTo({
  //     url: '../logs/logs',
  //   })
  // },
  // 方式二
  selectDistrict:function(e){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 选择地址 第一种方式
    //console.log(options.cityName)
    // this.data.cityName=options.cityName;
    // this.setData({
    //   cityName:options.cityName
    // })
    // 选择地址 三级联动
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: "50% 50%",
      timingFunction: 'ease',
    })
    this.animation = animation;
    // 默认联动显示北京
    var id = address.provinces[0].id
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      areas: address.areas[address.citys[id][0].id],
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
  // 点击所在地区弹出选择框
  selectDistrict: function (e) {
    var that = this
    console.log('111111111')
    if (that.data.addressMenuIsShow) {
      return
    }
    that.startAddressAnimation(true)
  },
  // 执行动画
  startAddressAnimation: function (isShow) {
    console.log(isShow)
    var that = this
    if (isShow) {
      that.animation.translateY(0 + 'vh').step()
    } else {
      that.animation.translateY(40 + 'vh').step()
    }
    that.setData({
      animationAddressMenu: that.animation.export(),
      addressMenuIsShow: isShow,
    })
  },
  // 点击地区选择取消按钮
  cityCancel: function (e) {
    this.startAddressAnimation(false)
  },
  // 点击地区选择确定按钮
  citySure: function (e) {
    var that = this
    var city = that.data.city
    var value = that.data.value
    that.startAddressAnimation(false)
    // 将选择的城市信息显示到输入框
    var areaInfo = that.data.provinces[value[0]].name + ',' + that.data.citys[value[1]].name + ',' + that.data.areas[value[2]].name
    that.setData({
      areaInfo: areaInfo,
    })
  },
  hideCitySelected: function (e) {
    console.log(e)
    this.startAddressAnimation(false)
  },
  // 处理省市县联动逻辑
  cityChange: function (e) {
    console.log(e)
    var value = e.detail.value
    var provinces = this.data.provinces
    var citys = this.data.citys
    var areas = this.data.areas
    var provinceNum = value[0]
    var cityNum = value[1]
    var countyNum = value[2]
    if (this.data.value[0] != provinceNum) {
      var id = provinces[provinceNum].id
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id],
      })
    } else if (this.data.value[1] != cityNum) {
      var id = citys[cityNum].id
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id],
      })
    } else {
      this.setData({
        value: [provinceNum, cityNum, countyNum]
      })
    }
    // console.log(this.data)
  },
  //获取收货人信息
  eNameInput:function(e){
    //console.log("收货人", e.detail.value)
    this.data.userName = e.detail.value;
    this.setData({
      userName: this.data.userName
    })
  },
  // 获取用户电话
  ePhoneInput:function(e){
    //console.log("电话", e.detail.value)
    this.data.userPhone=e.detail.value;
    this.setData({
      userPhone: this.data.userPhone
    })
  },
  eAddressInput:function(e){
   // console.log("详细地址",e.detail.value)
    this.data.userAddress=e.detail.value;
    this.setData({
      userAddress:this.data.userAddress
    })
  },
  //保存 并跳转到上一页 sel-address
  saveBtn:function(){
  //  console.log(this.data.areaInfo)
    var userName = this.data.userName;
    var userPhone = this.data.userPhone;
    var userAddress=this.data.userAddress;
    var areaInfo = this.data.areaInfo;
    var reg = /^1[34578]\d{9}$/;
    //如果收货人姓名为空 提示 
    if(userName == ""){
      wx.showToast({
        title: '请输入收货人',
        icon:"none",
        duration:1000
      })
      return false
    }
    //如果电话号码为空 或者格式不正确 提示
    if (userPhone == ""){
      wx.showToast({
        title: '请输入联系电话',
        icon:"none",
        duration:1000
      })
      return false
    }
    if(!reg.test(userPhone)){
      wx.showToast({
        title: "手机号格式不正确",
        icon: "none",
        duration: 1000
      })
      return false
    }
    //如果所在地区为空 提示 不往下执行
    if (areaInfo == undefined){
      wx.showToast({
        title: "所在地区不能为空",
        icon: "none",
        duration: 1000
      })
      return false
    }
    // 如果详细地址为空 提示  不往下执行
    if(userAddress == ""){
      wx.showToast({
        title: "详细地址不能为空",
        icon: "none",
        duration: 1000
      })
      return false
    }else{
      wx.navigateTo({
        url: '../pay/pay?areaInfo=' + areaInfo,
      })
    }
  }
})