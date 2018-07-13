//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var util = require('../../utils/util.js')
import { radar } from '../../utils/radar/radar'

// 引入雷达图

Page({
  radar,
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        hiddenLoading: false,
        percent:0
    },

    

/**                                              
 * 初次加载
 */
onLoad:function(options){
  
  var that = this;
  try {
    var res = wx.getStorageInfoSync()
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)

    that.closeLoading()

   
  } catch (e) {
    // Do something when catch error
  }
  console.log("555")
  //wx.hideLoading();
},
/**
 * 
 */
closeLoading: function(){
  var that = this;

  var Interval = setInterval(function () {
    var res = wx.getStorageInfoSync();
    //要延时执行的代码  
    console.log("length:" + res.keys.length)
    if (res.keys.length == 1) {
      that.setData({
        percent: 20
      })
    }
    if (res.keys.length == 2) {
      that.setData({
        percent: 40
      })
    }
    if (res.keys.length == 3) {
      that.setData({
        percent: 60
      })
    }
    if (res.keys.length == 4) {
      that.setData({
        percent: 80
      })
    }
    if (res.keys.length == 5) {
      that.setData({
        hiddenLoading: true,
        percent: 100
      })
      clearInterval(Interval);
    }

  }, 1000) //延迟时间 这里是1秒

 
    
    console.log("55545454545")
  },
/**
   * 用户点击右上角分享
   */
onShareAppMessage: function () {
  console.log("清楚本地缓存的")
 // wx.clearStorage()
}

})
