//index.js
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  
  
  data: {
    guestList:["","","","","",""],
    length:4,
    flag:true,
    meetingName:"第53届国际饭店与餐馆列会年会暨一带一路国际饭店也合作大会"
   
   
  },
  goTo: function (num) {
    console.log(num)
  },
  
  showInfo:function(){
   
    if (this.data.flag){
      this.setData({ flag:false})
    }else{
      this.setData({ flag: true })
    }
   console.log( this.data.flag)
  },

  //scroll-view滑到底部触发的事件
    lower:function(){
      wx.showToast({
        title:'没有更多了',
        icon:'success',
        image:'../../img/up.png',
        duration:2000
      })
       
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.setData({ meetingName:options.id});
    console.log(this.data.meetingName);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
