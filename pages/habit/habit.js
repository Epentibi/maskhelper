// pages/habit/habit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    washImg: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Tips/Stay%20Home.jfif.jpg?sign=1962450599079c519ec73fc0ab5b83c7&t=1581860848",
  
    windImg: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Tips/Wind.jfif.jpg?sign=b4b68dee939d8fcf2304d792d8606b62&t=1581861480",

    disImg: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Tips/Disinfect.jfif.jpg?sign=332bcc71d43486ba19f3f16bcf39aeca&t=1581861732",
    habitImg: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Tips/Habit.jpg?sign=42e507a42b07e279be10694f824c3d61&t=1581861940",
    bannerImg: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Tips/Banner.jpg?sign=45214700b87e092a7bf0952201264c2e&t=1581862354",

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