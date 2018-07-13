// pages/lgy/personal/personal.js
let lgygeneral = "general";
let personal = {
 

  getSGTXT: function (id) {
    var sanguo = new Array();
    try {
      var value = wx.getStorageSync('general')
      console.log("三国志sssssssssssssss：" + value[0].length)
      var value2 = wx.getStorageSync('generala')
      console.log("三国志aaa：" + value2[0].length)
      if (0 < id && id<=value[0].length) {
       console.log("三国志：" + value[0][id - 1].Description0 + "三国演义：" + value[0][id - 1].Description1 + "野史：" + value[0][id - 1].Description2)
        sanguo[0] = value[0][id - 1].Description0;
        sanguo[1] = value[0][id - 1].Description1;
        sanguo[2] = value[0][id - 1].Description2;
      }else{
        var id2 = (id - value[0].length)
        console.log("三国志：" + value2[0][id2-1].General_Name+"dddd:"+id)
        sanguo[0] = value2[0][id2 - 1].Description0;
        sanguo[1] = value2[0][id2 - 1].Description1;
        sanguo[2] = value2[0][id2 - 1].Description2;
      } 
    } catch (e) {
      
      console.log("加载general数据失败")
    }
   

    try {

      var value = wx.getStorageSync('languageCN')
      if (value) {
        var a = value.split("\n");
        for (var i = 0; i < a.length; i++) {
          var b = a[i];
          var bb = b.substr(0, 5)
          if (bb == sanguo[0]) {
            //console.log("列传:" + b.substr(6))
            sanguo[0] = b.substr(6)
          }
          if (bb == sanguo[1]) {
            //console.log("列传:" + b.substr(6))
            sanguo[1] = b.substr(6)
          }
          if (bb == sanguo[2]) {
            //console.log("列传:" + b.substr(6))
            sanguo[2] = b.substr(6)
          }
        }
        return sanguo;
      }
    } catch (e) {
      console.log("加载languageCN数据失败")
    }
  }
};

module.exports = {
  personal
};