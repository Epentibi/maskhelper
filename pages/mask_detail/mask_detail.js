// pages/mask_detail/mask_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: null,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.information != null)
    {
      var app = getApp();
      this.setData({
        information : app.globalData.masks.find(x => x.title === options.information)
      });
    }
    console.log("已打开页面" + this.data.information.img);
    
  },

  standardS: function(event) {


    wx.navigateTo({
      url: "/pages/standard/standard?id=" + event.currentTarget.dataset.gid
    });
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
  formatString : function (str) {
    if (typeof (str) != "string") {
      console.log('去除回车换行空格失败！参数不是字符串类型')
      return;
    }
    str = str.replace(/\ +/g, "");//去掉空格
    str = str.replace(/[\r\n]/g, "");//去掉回车换行
    return str;
  }

})