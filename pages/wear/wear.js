// pages/wear/wear.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    washImg: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Tips/Mask%20On.jfif.jpg?sign=816088832af6cdc7945237e623ac8be0&t=1581859980",
  },

  clickImg: function (e) {
    var imgUrl = e.currentTarget.dataset.src; wx.previewImage({ urls: [imgUrl], success: function (res) { }, fail: function (res) { }, complete: function (res) { }, })
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