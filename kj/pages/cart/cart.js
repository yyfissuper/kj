// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:"orange",
    selected:false,
    totle:'',//计算总价
    spec:"默认",//规格  
    carts:[],//商品
    edit:"编辑",
    index:null,//下标
    hasList:true
  },
  //加减按钮i
  delCount:function(e){
   // console.log(e.currentTarget.dataset.index)
    var el = e.currentTarget.dataset.index;
    var carts=this.data.carts;
    if (carts[el].num > 0){
      carts[el].num--;
      this.setData({
        carts: carts
      })
    }
    this.getTotalPrice()
  },
  addCount:function(e){
    var el = e.currentTarget.dataset.index;
    var carts=this.data.carts;
    carts[el].num++;
    this.getTotalPrice()
    this.setData({
      carts: carts
    })
  },
  //购物车总价
  getTotalPrice: function (e) {
    var carts = this.data.carts;
    var totle = 0;
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        totle += carts[i].num * carts[i].price;//计算总价
      }   
    }
    this.setData({
      carts: carts,
      totle: totle.toFixed(2)
    })
    //console.log("购物车",this.data.totle)
    app.commonInfo.total = this.data.totle;
  },
  /*选择商品按钮*/
  selectList: function (e) {
    //表示当前元素
    const index = parseInt(e.currentTarget.dataset.index);
    this.data.index=index;
    this.setData({index:this.data.index})
    // console.log(this.data.index)
    let carts = this.data.carts;
    //当前selected
    const selected = carts[index].selected;
    carts[index].selected = !selected //改变状态
    this.setData({
      carts: carts,
    })
    this.getTotalPrice()
  },
  //选择
  selected: function (e) {
    //console.log(this.data.carts)
    var carts=this.data.carts;
    var selected = this.data.selected;
    for(var i=0;i<carts.length;i++){
      carts[i].selected=!selected
    }
    this.setData({
      selected: !selected,
      carts:carts
    })
    this.getTotalPrice()
    app.commonInfo.total=this.data.totle
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
    var totle = 0;
    this.setData({totle:parseInt(totle)})
    //获取商品信息
    wx.getStorage({
      key: 'addCart',
      success: (res) => {
        var res=res.data;
        // console.log(res)
        //如果数组为空 则显示没有商品
        if (res.length < 1) {
          this.setData({
            hasList:false
          })
        }else{
          this.setData({
            hasList: true,
            carts:res
          })
        }
      }
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
  //跳转到支付页面
  pay:function(e){
    var carts=this.data.carts;
    var payList=[];
    for(var i=0;i<carts.length;i++){
      console.log(carts[i].selected)
      if(carts[i].selected){
        payList = payList.concat(carts[i])
      }
    }
    // 需要支付的商品
    wx.setStorage({
      key: 'payShop',
      data: payList,
    })
    var totle=parseInt(this.data.totle);
    if(totle >0){
      wx.navigateTo({
        url: "../pay/pay"
      })
    }else{
      wx.showToast({
        title: '请选择您要购买的商品',
        icon:"none",
        duration:2000
      })
    }
  },
  //点击编辑
  redact:function(e){
        var pro=this.data.carts;
        //选中商品的下标
        var el = parseInt(this.data.index);
        for(var i=0;i<pro.length;i++){
          if(pro[i].selected){
            this.setData({ edit: "删除" })
            wx.showModal({
              title: '提示',
              content: '确定删除商品吗?',
              showCancel: true,
              cancelText: "取消",
              confirmText: "确定",
              confirmColor: "#FF002D",
              success: (res) => {
                if (res.confirm) {
                  wx.getStorage({
                    key: 'addCart',
                    success: (res) => {
                      // console.log(res.data)
                      //如果数组里面有数据 删除当前数据
                      if(res.data.length-1 > 0){
                        this.data.carts = res.data.splice(el, 1);
                        wx.setStorage({
                          key: 'addCart',
                          data: res.data,
                        })
                        // console.log(this.data.carts)
                      }else{
                        this.data.carts=[];
                        wx.setStorage({
                          key: 'addCart',
                          data: this.data.carts,
                        })
                        this.getTotalPrice();
                        this.setData({
                          hasList:false
                        })
                      }
                      this.setData({
                        carts: res.data,
                        edit: "编辑",
                        totle:0
                      })
                      wx.showToast({
                        title: '删除成功 ^_^',
                        icon: "none",
                        duration: 2000
                      })
                    },
                  })
                }else if(res.cancel){
                  this.setData({
                    edit:"编辑"
                  })
                }
              }
            })    
            return false
          }else{
            this.setData({
              edit: "编辑"
            })
          }
        } 
        
  }
})