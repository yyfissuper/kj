// pages/shopDetails/shopDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     //轮播
     banner:[
      {id:0,name:"https://img12.360buyimg.com/n1/s450x450_jfs/t29014/323/743793134/202079/c74f8bac/5bfcad9fNc1bc6747.jpg"},
      {id:1,name:"https://img12.360buyimg.com/n1/s450x450_jfs/t29014/323/743793134/202079/c74f8bac/5bfcad9fNc1bc6747.jpg"}
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
  map:function(e){
    wx.getLocation({
      type:'gcj02',
      success:function(res){
        const latitude=res.latitude;
        const longitude=res.longitude;
        wx.openLocation({
          latitude,
          longitude,
          scale:18
        })
      }
    })
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