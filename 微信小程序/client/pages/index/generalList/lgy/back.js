// pages/lgy/show.js
import { radar } from '../../../../utils/radar/radar';
import { personal } from 'personal/personal.js';
import { Characteristic } from 'Characteristic/Characteristic.js';
import { Biographies } from 'Biographies/Biographies.js';
var lgygeneralattribute = "generalattribute";
var WebAppURL = getApp().globalData.WebAppURL;
var WebAppName = getApp().globalData.WebAppName;
Page({
  radar,
  personal,
  Characteristic,
  Biographies,
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "code": "步兵", "text": "", "color": "" },
      { "code": "骑兵", "text": "", "color": "" },
      { "code": "弓兵", "text": "", "color": "" },
      { "code": "水军", "text": "", "color": "" },
      { "code": "攻城", "text": "", "color": "" },
      { "code": "守城", "text": "", "color": "" },
      { "code": "练兵", "text": "", "color": "" },
      { "code": "征兵", "text": "", "color": "" },
      { "code": "武艺", "text": "", "color": "" },
      { "code": "勇猛", "text": "", "color": "" },
      { "code": "骑术", "text": "", "color": "" },
      { "code": "箭术", "text": "", "color": "" },
      { "code": "生擒", "text": "", "color": "" },
      { "code": "谋略", "text": "", "color": "" },
      { "code": "计略", "text": "", "color": "" },
      { "code": "冷静", "text": "", "color": "" },
      { "code": "抢掠", "text": "", "color": "" },
      { "code": "情报", "text": "", "color": "" },
      { "code": "治农", "text": "", "color": "" },
      { "code": "治市", "text": "", "color": "" },
      { "code": "治水", "text": "", "color": "" },
      { "code": "修筑", "text": "", "color": "" },
      { "code": "巡查", "text": "", "color": "" },
      { "code": "算学", "text": "", "color": "" },
      { "code": "人脉", "text": "", "color": "" },
      { "code": "仁德", "text": "", "color": "" },
      { "code": "辩才", "text": "", "color": "" },
      { "code": "交涉", "text": "", "color": "" },
      { "code": "文化", "text": "", "color": "" },
      { "code": "魅力", "text": "", "color": "" },
    ],
   
    sanguozhi: WebAppURL +"/"+ WebAppName + "/image/generalback/new_information_07_33_cn.png",
    sanguoyanyi: WebAppURL + "/" + WebAppName + "/image/generalback/new_information_07_32_cn.png",
    sanguoqita: WebAppURL + "/" + WebAppName + "/image/generalback/new_information_07_31_cn.png",
    fsbackimg: WebAppURL + "/" + WebAppName + "/image/generalicon/0.jpg",
    indexback: WebAppURL + "/" + WebAppName + "/image/generalback/new_login_03.png",
    HeadPortraitImgBack: WebAppURL + "/" + WebAppName + "/image/generalback/new_public_04.png",
    RadarMapBackImg: WebAppURL + "/" + WebAppName + "/image/generalback/new_information_10.png",
    attributeImgBack: WebAppURL + "/" + WebAppName + "/image/generalback/new_information_07_20_cn.png",
    attributeImg2Back: WebAppURL + "/" + WebAppName + "/image/generalback/new_information_07_19_cn.png",
    choiceimgnot: WebAppURL + "/" + WebAppName + "/image/generalback/new_public_button_36_n.png",
    choiceimgyes: WebAppURL + "/" + WebAppName + "/image/generalback/new_public_button_36_h.png",
    generalName: "",
    showlgy:1,
    fontcolor: "#ffffff",
    fontcolor2: "#ffffff",
    fontcolor3: "#ffffff",
    fontcolor4: "#ffffff",
    choiceimg:"",
    choiceimg2: "",
    choiceimg3: "",
    choiceimg4: "",
    SGZ:"",
    SGYY:"",
    SGQT:"",
    SPnum:"",
    SPTEMP:"",
    DEPICT:"",
    ConditionDesc:"",
    EffectDesc:"",
    fsname:"---",
    fsdatalist:[],
    radarData:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    this.setData({
      fontcolor: "#yellow",
      choiceimg: this.data.choiceimgyes,
      choiceimg2: this.data.choiceimgnot,
      choiceimg3: this.data.choiceimgnot,
      choiceimg4: this.data.choiceimgnot,
      radarData: that.getIntegratedData(options.id),
    })
    
    console.log("接收到的参数是str=" + options.id);
    that.tapName(options.id);
  },
  /**
   * 设置三国的列传文本
   */
  setSGTXT(id){
    var that = this;
    var sanguo = that.personal.getSGTXT(id);
    that.setData({
      SGZ: sanguo[0],
      SGYY: sanguo[1],
      SGQT: sanguo[2],
    })
  },
  setSGSP(id){
    var that = this;
    var data = that.Characteristic.getSGWJSP(id);
   console.log("特性长度：" + data[0].length)
    that.setData({
      SPnum:data[0].length,
      SPTEMP:data[0],
      DEPICT: data[1],
      ConditionDesc:data[2],
      EffectDesc: data[3],
    })
  },
  setSGFS(id) {
    var that = this;
    var fsdata = that.Biographies.getSGFS(id);
    //fsdata = [128,130,413]

    //console.log(fsdata.Borther[0].id)
    if (fsdata.Borther[0]!=null){
      var bgImg = fsdata.Borther[0].url;
      var fsname = fsdata.Borther[0].name;
    }
    console.log(fsdata.Borther)
    this.setData({
      fsdatalist: fsdata
    });
  },
  /**
   * 根据ID加载武将相应信息
   */
  tapName: function (id) {
    var that = this;
    //var generalName = "listData[" + 0 + "].general";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
    var text;
    var color;
    // var general = that.getGeneralById(id);
    // console.log("666" + ss.id);

    that.setSGTXT(id)
    that.setSGSP(id)
    that.setSGFS(id)
    that.Characteristic.getSGWJSP(id)
    that.changeImg(id);

    that.radar.draw(that.data.radarData);//根据传入的数据对能力图进行绘画

    wx.getStorage({
      key: lgygeneralattribute,
      success: function (res) {
        var obj;
        for (var i = 0; i < 30; i++) {
          text = "listData[" + i + "].text";
          obj = "A" + i;
          color = "listData[" + i + "].color";
          that.changeColor(color, res.data[0][id - 1][obj]);
          that.setData({
            [text]: res.data[0][id - 1][obj],
          })
        }
        that.setData({
          generalName: res.data[0][id - 1].Temp,
        })
      },
    })
    

   

  },
  
  /**
   * 从数据中根据id返回相应的武将对象
   */
  getGeneralById: function (id) {
    var that = this;
    try {
      console.log("开始同步数据")
      var value = wx.getStorageSync(lgygeneralattribute)
      if (value) {
        return value[0][id - 1]
      }
    } catch (e) {
      console.log("同步加载本地数据失败")
    }
  },
 
  /**
   * 根据数值改变颜色
   */
  changeColor: function (color, generalNum) {
    if (generalNum < 60) {
      this.setData({
        [color]: "#ABABAB"
      })
    } else
      if (generalNum >= 60 && generalNum < 70) {
        this.setData({
          [color]: "greenyellow",
        })
      } else
        if (generalNum >= 70 && generalNum < 80) {
          this.setData({
            [color]: "#AEEEEE"
          })
        } else
          if (generalNum >= 80 && generalNum < 90) {
            this.setData({
              [color]: "yellow"
            })
          } else
            if (generalNum >= 90 && generalNum < 100) {
              this.setData({
                [color]: "orange"
              })
            } else
              if (generalNum >= 100) {
                this.setData({
                  [color]: "red"
                })
              }
  },
  /**
     * 根据武将的id从服务器中加载相应的头像
     */
  changeImg: function (id) {
    var i = id;
    var bgImg = WebAppURL + "/" + WebAppName + '/image/generalicon/' + i + '.jpg';
    this.setData({
      pageBackgroundImg: bgImg
    });
  },
  /**
  *根据传入的ID获取相应武将雷达图的数据
  */
  getIntegratedData: function (id) {
    var that = this;
    var general = that.getGeneralById(id);   //general武将对象
    var aa;//外交综合
    var bb;//人事综合
    var cc;//智谋综合
    var dd;//军事综合
    var ee;//勇武综合
    var ff;//政务综合
    ee = (general.A8 * 0.5 + general.A9 * 0.1 + general.A10 * 0.1 + general.A11 * 0.1 + general.A12 * 0.1 + general.A15 * 0.1);
    ee = parseInt(ee);
    cc = (general.A13 * 0.3 + general.A14 * 0.3 + general.A15 * 0.3 + general.A17 * 0.05 + general.A26 * 0.05);
    cc = parseInt(cc);
    aa = (general.A27 * 0.4 + general.A26 * 0.3 + general.A29 * 0.1 + general.A28 * 0.1 + general.A17 * 0.1);
    aa = parseInt(aa);
    bb = ((general.A24 * 0.5 + general.A25 * 0.2 + general.A29 * 0.2 + general.A28 * 0.1 + general.A26 * 0.1) / 1.1);
    bb = parseInt(bb);
    var arraybb = that.sortArray([general.A18, general.A19, general.A20]);
    ff = ((arraybb[0] * 0.4 + arraybb[1] * 0.3 + arraybb[2] * 0.2 + general.A21 * 0.1 + general.A22 * 0.1 + general.A23 * 0.2 + general.A7 * 0.1) / 1.4);
    ff = parseInt(ff);
    arraybb = that.sortArray([general.A0, general.A1, general.A2, general.A3]);
    dd = ((arraybb[0] * 0.27 + arraybb[1] * 0.18 + arraybb[2] * 0.1 + arraybb[3] * 0.1 + general.A4 * 0.1 + general.A5 * 0.1 + general.A6 * 0.05 + general.A7 * 0.05 + general.A16 * 0.05) * 1.1);
    dd = parseInt(dd);
    return [aa, bb, cc, dd, ee, ff];
  },
  
  /**
  *根据传入的数组进行排序，返回从大到小排序的数组
  */
  sortArray: function (array) {
    if (array instanceof Array) {
      var length = array.length;
      for (var i = 0; i < length - 1; i++) {
        var max = i;
        for (var j = i + 1; j < length; j++) {
          if (array[j] > array[max]) {
            max = j;
          }
        }
        if (i != max) {
          var temp = array[max];
          array[max] = array[i];
          array[i] = temp;
        }
      }
      return array;
    } else {
      return "请输入数组参数";
    }
  },
  

  selected:function(e){
    var that = this
    that.radar.draw(that.data.radarData);
    this.setData({
      showlgy: 1,
      fontcolor: "#yellow",
      fontcolor2: "#ffffff",
      fontcolor3: "#ffffff",
      fontcolor4: "#ffffff",
      choiceimg:this.data.choiceimgyes,
      choiceimg2:this.data.choiceimgnot,
      choiceimg3:this.data.choiceimgnot,
      choiceimg4:this.data.choiceimgnot,
    })
  },
  selected2: function (e) {
    this.setData({
      showlgy: 2,
      fontcolor: "#ffffff",
      fontcolor2: "#yellow",
      fontcolor3: "#ffffff",
      fontcolor4: "#ffffff",
      choiceimg: this.data.choiceimgnot,
      choiceimg2: this.data.choiceimgyes,
      choiceimg3: this.data.choiceimgnot,
      choiceimg4: this.data.choiceimgnot,
    })
  },
  selected3: function (e) {
  
    this.setData({
      showlgy: 3,
      fontcolor: "#ffffff",
      fontcolor2: "#ffffff",
      fontcolor3: "#yellow",
      fontcolor4: "#ffffff",
      choiceimg: this.data.choiceimgnot,
      choiceimg2: this.data.choiceimgnot,
      choiceimg3: this.data.choiceimgyes,
      choiceimg4: this.data.choiceimgnot,
    })
  },
  selected4: function (e) {

    this.setData({
      showlgy: 4,
      fontcolor: "#ffffff",
      fontcolor2: "#ffffff",
      fontcolor3: "#ffffff",
      fontcolor4: "#yellow",
      choiceimg: this.data.choiceimgnot,
      choiceimg2: this.data.choiceimgnot,
      choiceimg3: this.data.choiceimgnot,
      choiceimg4: this.data.choiceimgyes,
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

  
})