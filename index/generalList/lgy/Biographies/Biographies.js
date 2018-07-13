// pages/lgy/Biographies/Biographies.js
let Biographies = {
  getSGFS:function(id){
    var that = this;
    console.log("武将关系的ID：" + id)
    try {

      var value = wx.getStorageSync('generalattribute')
      if (value) {
        var fsdata = { "Borther": [], "Friend": [], "HateGeneral": [], "Enemy": [] };

        console.log("value.borther:" + value[0][id - 1].Brother)
        console.log("value.borther:" + value[0][id - 1].Friend)
        console.log("value.borther:" + value[0][id - 1].HateGeneral)
        console.log("value.borther:" + value[0][id - 1].Enemy)
        var brotherArray = value[0][id - 1].Brother.split(",")
        var friendArray = value[0][id - 1].Friend.split(",")
        var hateGeneralArray = value[0][id - 1].HateGeneral.split(",")
        var enemyArray = value[0][id - 1].Enemy
        var WebAppURL = getApp().globalData.WebAppURL;
        var WebAppName = getApp().globalData.WebAppName;
        
        var url = WebAppURL + "/" + WebAppName + '/image/generalicon/'

        if(brotherArray.length<=3){
          for(var i=0;i<3;i++){
            if ("undefined" == typeof brotherArray[i] || brotherArray[i]==""){
              brotherArray[i]="0"
            }
          }
        }
        if (friendArray.length <= 7) {
          for (var i = 0; i < 7; i++) {
            if ("undefined" == typeof friendArray[i] || friendArray[i] == "") {
              friendArray[i] = "0"
            }
          }
        }
        if (hateGeneralArray.length <= 7) {
          for (var i = 0; i < 7; i++) {
            if ("undefined" == typeof hateGeneralArray[i] || hateGeneralArray[i] == "") {
              hateGeneralArray[i] = "0"
            }
          }
        }



        for (var i = 0; i < brotherArray.length;i++){
          if (brotherArray[i] != 0){
            var newurl = url + brotherArray[i]+".jpg"
            fsdata.Borther.push({ "name": that.getNameById(brotherArray[i]), "id": brotherArray[i],"url":newurl});
          }else{
            var newurl = url +"0.jpg"
            fsdata.Borther.push({ "name": "---", "id":"0", "url": newurl });
          }
        }
        for (var i = 0; i < friendArray.length; i++) {
          if (friendArray[i] != 0) {
            var newurl = url + friendArray[i] + ".jpg"
            fsdata.Friend.push({ "name": that.getNameById(friendArray[i]), "id": friendArray[i],"url":newurl});
          }else {
            var newurl = url + "0.jpg"
            fsdata.Friend.push({ "name": "---", "id": "0", "url": newurl });
          }
        }
        for (var i = 0; i < hateGeneralArray.length; i++) {
          if (hateGeneralArray[i] != 0) {
            var newurl = url + hateGeneralArray[i] + ".jpg"
            fsdata.HateGeneral.push({ "name": that.getNameById(hateGeneralArray[i]), "id": hateGeneralArray[i], "url": newurl});
          } else {
            var newurl = url + "0.jpg"
            fsdata.HateGeneral.push({ "name": "---", "id": "0", "url": newurl });
          }
        }

          if (enemyArray != 0) {
            var newurl = url + enemyArray + ".jpg"
        
            fsdata.Enemy.push({ "name": that.getNameById(enemyArrayy), "id": enemyArray, "url": newurl });
          } else {
            var newurl = url + "0.jpg"
            fsdata.Enemy.push({ "name": "---", "id": "0", "url": newurl });
          }
        

        console.log(fsdata)
          return fsdata;
      }
    } catch (e) {
      console.log("加载generalattribute数据失败")
    }
  },
  /**
   * 根据ID查找武将名，ID存在就返回相应武将名，不存在就返回0 
   */
  getNameById:function(id){
 
    try {
      var value = wx.getStorageSync('generalattribute')
      if (value) {
        return value[0][id - 1].Temp;
      }
    } catch (e) {
      
      console.log("找不到相应ID返回0")
      return 0;
    }
  }

};

module.exports = {
  Biographies
};