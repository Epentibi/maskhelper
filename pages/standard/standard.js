// pages/standard/standard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    standards: [
      {
        "name": 'KN95',
        "img": '../../images/Tests/ender.jpg',
        "std":'GB19083-2010',
        "country":'中国',
        "capacity": [{ id: "非油性颗粒", value: "90%" }],
        "desc":'这是一种能阻止经空气传播的直径≤5μmg感染因子或近距离（≤1m）接触经飞沫传播的疾病而发生感染的口罩。医用口罩的使用包括密合性测试、培训、型号的选择、医学处理和维护。',
        "virus":'有效，建议普通人日常佩戴',
      },
      {
        "name": 'FFTP2',
        "img": '../../images/Tests/ender.jpg',
        "std": 'GB19083-2010',
        "country": '美国',
        "capacity": [{ id: "非油性颗粒", value: "90%" }],
        "desc": '这是一种能阻止经空气传播的直径≤5μmg感染因子或近距离（≤1m）接触经飞沫传播的疾病而发生感染的口罩。医用口罩的使用包括密合性测试、培训、型号的选择、医学处理和维护。',
        "virus": '有效，建议普通人日常佩戴',
      }
    ],
    standard: {
      "name": 'KN95',
      "img": '../../images/Tests/ender.jpg',
      "std": 'GB19083-2010',
      "country": '中国',
      "capacity": [{ id: "非油性颗粒", value: "90%" }],
      "desc": '这是一种能阻止经空气传播的直径≤5μmg感染因子或近距离（≤1m）接触经飞沫传播的疾病而发生感染的口罩。医用口罩的使用包括密合性测试、培训、型号的选择、医学处理和维护。',
      "virus": '有效，建议普通人日常佩戴',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id != null)
    {
      console.log(options.id);
      this.setData({
        standard: this.data.standards.find(x => x.name === options.id)
      })
    }
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