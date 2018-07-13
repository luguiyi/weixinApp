//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    
    globalData:{
      WebAppURL:"https://luguiyi.top",
      WebAppName:"Demo",
    },
 
    onLaunch: function () {
    
        this.getUrlAndData()
      
    },
    getUrlAndData:function(){
      var that = this;
      var WebAppURL = that.globalData.WebAppURL;
      var WebAppName = that.globalData.WebAppName;
      console.log("加载中")
      
      try {
        var value = wx.getStorageSync('generalattribute')
        
        if (!value) {
          console.log("开始加载generalattribute数据")
          wx.request({
            url: WebAppURL+"/" + WebAppName+'/general/generalattribute.txt',
            data: {},
            method: 'POST',
            header: {
              'content-type': 'application/json',
            },
            success: function (res) {
              wx.setStorage({
                key: "generalattribute",
                data: res.data
              })
              console.log("generalattribute数据加载完成")
            }
          })
        }
   
      } catch (e) {
        console.log("generalattribute加载失败")
      }
      try {
        var value = wx.getStorageSync('general')

        if (!value) {
          console.log("开始加载general数据")
          wx.request({
            url: WebAppURL + "/" + WebAppName +'/general/general.txt',
            data: {},
            method: 'POST',
            header: {
              'content-type': 'application/json',
            },
            success: function (res) {
              wx.setStorage({
                key: "general",
                data: res.data
              })
              console.log("general数据加载完成")
            }
          })
        }
    
      } catch (e) {
        console.log("general数据加载错误")
      }

      try {
        var value = wx.getStorageSync('generala')
        if (!value) {
          console.log("开始加载generala数据")
          wx.request({
            url: WebAppURL + "/" + WebAppName + '/general/generala.txt',
            data: {},
            method: 'POST',
            header: {
              'content-type': 'application/json',
            },
            success: function (res) {
              wx.setStorage({
                key: "generala",
                data: res.data
              })
              console.log("generala数据加载完成")
            }
          })
        }
      } catch (e) {
        console.log("general数据加载错误")
      }

      try {
        var value = wx.getStorageSync('languageCN')

        if (!value) {
          console.log("开始加载languageCN")
          wx.request({
            url: WebAppURL + "/" + WebAppName +'/language_cn.txt',
            data: {},
            method: 'POST',
            header: {
              'content-type': 'application/json',
            },
            success: function (res) {
              wx.setStorage({
                key: "languageCN",
                data: res.data
              })
              console.log("languageCN加载完成")
            }
          })
        }
    
      } catch (e) {
        console.log("languageCN加载错误")
      }
      try {
        var value = wx.getStorageSync('generalspecialattributes')

        if (!value) {
          console.log("开始加载generalspecialattributes数据")
          wx.request({
            url: WebAppURL + "/" + WebAppName +'/general/generalspecialattributes.txt',
            data: {},
            method: 'POST',
            header: {
              'content-type': 'application/json',
            },
            success: function (res) {
              wx.setStorage({
                key: "generalspecialattributes",
                data: res.data
              })
              console.log("generalspecialattributes数据加载完成")
            }
          })
        }
      } catch (e) {
        console.log("generalspecialattributes数据加载错误")
      }
    },
    
    
})