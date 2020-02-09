// pages/mask_detail/mask_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: {
      "img": '../../images/Search List/N95.jpg',
      "title": 'K/N95',
      "function": '过滤效率大于95%',
      "price": '大约12元',
      "time": '4小时一换',
      "alt": []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.information != null)
    {
      var l = JSON.parse(options.information);
      this.setData({
        information: l
      });
    }
    console.log("已打开页面" + this.data.information.title);
    
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

  }
})