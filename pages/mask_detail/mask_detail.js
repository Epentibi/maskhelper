// pages/mask_detail/mask_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: {
      "title": '医用防护口罩\nKN90',
      "eng": 'Medical Protection Mask KN90',
      'desc':'医⽤用外科⼝口罩  ⼤大多都为⼀一次性使⽤用，医⽤用防护⼝口罩适⽤用于医务⼈人员和相关⼯工作⼈人员对经空⽓气传播的呼吸道 传染病的防护，是⼀一种密合性⾃自吸过滤式医疗防护⽤用品，防护等级⾼高，尤其适⽤用于诊疗活动 中接触经空⽓气传播或近距离经⻜飞沫传播的呼吸道感染疾病患者时佩戴。',
      "type": '医用防护口罩',
      "filterStd": 'KN90',
      "filterCap": [{id: "非油性颗粒", value: "90%"}],
      "intl": 'FFTP2',
      "std": 'GB19083-2010',
      "time": '5小时',
      "price": '100¥',
      "virus": '普通群众穿戴即可',
      "alt": [],
      "icon": '../../images/Tests/ender.jpg',
      "img": '../../images/Tests/ender.jpg'
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