// pages/virusinfo/virusinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: null,
    dataTime: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.tianapi.com/txapi/ncov/index?key=abd0046d3cec278b36b83197b38c65e5',
      success: function (res) {
        if (res.data.code == 200) {
          console.log(res.data);
          that.setData({
            content: res.data
          })
        } else {
          that.setData({
            content: res.data
          })
        }

        var t = res.data.newslist[0].desc.modifyTime;

        var a = new Date(t);
        var year = a.getFullYear();
        var month = a.getMonth();
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = year + '年' + month + '月' + date + '日 ' + hour + ':' + min + ':' + sec;

        that.setData({
          dataTime: time
        });
        console.log(time);

      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  Unix_timestamp: function(t)
  {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
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