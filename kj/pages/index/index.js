const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播
    banner:[
      { id: 0, src:"http://bpic.588ku.com//back_origin_min_pic/18/06/08/13fb8c82ab0f8830cae609c36d8b1794.jpg"},
      { id: 1, src:"http://bpic.588ku.com//back_water_img/18/11/16/09557d30908493ffd396dbfc56a85d17b6.jpg"},
      { id: 2, src:"http://bpic.588ku.com//back_water_img/18/11/13/220856b5b29dd3bcf11a5df0ab79b34a48.jpg"},
      { id: 3, src:"http://bpic.588ku.com//back_water_img/18/11/13/22fae7decf0390effd522870921b7a02c4.jpg"}

    ],
    //产品
    class_pro:[
      {pid:0,name:"电热水器",pro_list:[
        { id: 0, pid:0,src: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "康佳家用储水式电热水器速热卫生间淋浴洗澡DSZF-KA80L小型出租房", price: 3245.00, sale: 464, oldprice:9999.00,spec:"默认",stock:3,num:1},
        { id: 1, pid:0,src: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "要不我们去吃火锅", price: 3245.00, sale: 464, oldprice: 9999.00, spec: "默认", stock: 6, num: 1},
        { id: 2, pid:0,src: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, sale: 464, oldprice: 9999.00, spec: "默认", stock: 3, num: 1},
        { id: 3, pid:0,src: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00,sale: 464, oldprice: 9999.00, spec: "默认", stock: 3, num: 1},
        { id: 4, pid:0,src: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, sale: 464, oldprice: 9999.00, spec: "默认", stock: 3, num: 1},
        { id: 5, pid:0,src: "https://img13.360buyimg.com/n7/jfs/t27829/23/2280614018/201959/6f8c636e/5bfcad7fN5bddd6d9.jpg", detail: "我不开系，我想你了", price: 123.00, sale: 464, oldprice: 9999.00, spec: "默认", stock: 3, num: 1},
      ]},
      {pid:1,name:"油烟机",pro_list:[
        { id: 0, pid:1,src: "https://img12.360buyimg.com/n7/jfs/t19081/64/2495675652/68780/68f74756/5afbaad6N67c0dced.jpg", detail: "很烦啊", price: 3245.00, sale: 464, oldprice: 9999.00, spec: "默认", stock: 6, num: 1},
        { id: 1, pid:1,src: "https://img12.360buyimg.com/n7/jfs/t19081/64/2495675652/68780/68f74756/5afbaad6N67c0dced.jpg", detail: "撒很大空间的卡大家", price: 3245.00, sale: 464, spec: "默认", stock: 92, num: 1},
      ]},
      {pid:2,name:"炉灶台",pro_list:[
        { id: 0, pid:2,src: "https://img14.360buyimg.com/n7/jfs/t30871/286/126368631/384561/1483f980/5be90082N4e14a126.jpg", detail: "俺家空间的卡大家", price: 3245.89, sale: 464, spec: "默认", stock: 10, num: 1}
      ]
    }]
    },

    /** 
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {    
      var class_pro = this.data.class_pro;
      console.log(class_pro)  
      for(var i=0;i<class_pro.length;i++){
       // console.log(class_pro[i].pro_list)
        // proList = proList.concat(class_pro[i].pro_list)  
        for(var j=0;j<class_pro[i].pro_list.length;j++){
          //console.log(class_pro[i].pro_list[j].price.toFixed(2))
          class_pro[i].pro_list[j].price=class_pro[i].pro_list[j].price.toFixed(2)
        }
      }
      this.setData({
        class_pro: class_pro
      })
      //存储所有的商品信息
      wx.setStorage({
        key: "globalPro",
        data: this.data.class_pro
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
  //跳转到产品列表
  products_list:function(e){ 
    var el=e.currentTarget.id;
    var class_pro=this.data.class_pro;
    //console.log(class_pro[el])
    wx.setStorage({
      key:"class_pro",
      data:class_pro[el]
    })
    wx.navigateTo({
      url:"../products_list/products_list"
    })
  },
  //跳转到产品详情
  detail:function(e){
    var carts=e.currentTarget.dataset;
    app.commonInfo.cart=carts;
    wx.navigateTo({
      url:"../pro_details/pro_details"
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