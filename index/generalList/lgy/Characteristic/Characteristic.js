
let Characteristic= {
  getSGWJSP: function (id) {
    var special=new Array;
    var DEPICT = new Array;
    var ConditionDesc = new Array;
    var EffectDesc = new Array;
    var TEMP = new Array;
    try {
      var value = wx.getStorageSync('general')
      var value2 = wx.getStorageSync('generala')
      if (0 < id && id <= value[0].length) {
        special = value[0][id - 1].specialattributes.split(","); 
       // console.log("武将特性有special：" + special)
      }else{
        var id2 = (id - value[0].length)
        special = value2[0][id2 - 1].specialattributes.split(","); 
        console.log("武将特性有special：" + special)
      }
    } catch (e) {
      console.log("加载general数据失败")
    }
    try {

      var value = wx.getStorageSync('generalspecialattributes')
      if (value) {
        for (let i = 0; i < special.length-1;i++){
          if (special[i]==0){//当武将没有特性就跳出循环
              break;
          }
          DEPICT[i] = value[0][special[i] - 1].DEPICT;
          ConditionDesc[i] = value[0][special[i] - 1].ConditionDesc;
          EffectDesc[i] = value[0][special[i] - 1].EffectDesc;
          TEMP[i] = value[0][special[i] - 1].TEMP;
          /*console.log("特性有：" + value[0][special[i] - 1].ID + " 特性名字:" + value[0][special[i] - 1].TEMP + " 说明：" + value[0][special[i] - 1].DEPICT + " 条件：" + value[0][special[i] - 1].ConditionDesc + " 效果：" + value[0][special[i] - 1].EffectDesc)*/
        }
 
        try {
          var value = wx.getStorageSync('languageCN')
          if (value) {
            DEPICT= this.getSGSP(value,DEPICT)
            ConditionDesc = this.getSGSP(value,ConditionDesc)
            EffectDesc = this.getSGSP(value,EffectDesc)
          }
        } catch (e) {
          console.log("加载languageCN数据失败")
        }
        
        
      }
    } catch (e) {
      console.log("加载generalspecialattributes数据失败")
    }
 
    return this.getSPdata(TEMP, DEPICT, ConditionDesc, EffectDesc);

  },
  getSPdata:function(a,b,c,d){
    var data = new Array;
    data = [a,b,c,d]
    return data;
  },
  /**
   * 根据取到的特性中的数据，去语言文件中找相应的数据，然后返回。
   */
  getSGSP:function (value,num) {
        var dataArr = new Array;
        var a = value.split("\n");
        for (var i = 0; i < a.length; i++) {
          var b = a[i];
          var bb = b.substr(0, 5)
          for(var j=0;j<num.length;j++){
            if (bb == num[j]) {
              //console.log("b[1]=" + b.substr(6))
              dataArr[j] = b.substr(6)
            }
          }
        }
        return dataArr;
  }

};

module.exports = {
    Characteristic
};