// pages/wash/wash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Test/Slide/washmethod.png?sign=089448226f7f38f96bf2cbafe1f679c2&t=1581694875", 
  },
  clickImg: function (e) { var imgUrl = this.data.imgUrl; wx.previewImage({ urls: [imgUrl], success: function (res) { }, fail: function (res) { }, complete: function (res) { }, }) },


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

    }
  })