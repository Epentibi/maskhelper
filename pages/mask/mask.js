Page({

  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addicon: '../../images/activity_add.png',
    searchstr: '',
    originalArray: [
      {
        "title": '医用防护口罩',
        "eng": 'Medical Protection Mask',
        'desc': '医⽤用外科⼝口罩  ⼤大多都为⼀一次性使⽤用，医⽤用防护⼝口罩适⽤用于医务⼈人员和相关⼯工作⼈人员对经空⽓气传播的呼吸道 传染病的防护，是⼀一种密合性⾃自吸过滤式医疗防护⽤用品，防护等级⾼高，尤其适⽤用于诊疗活动 中接触经空⽓气传播或近距离经⻜飞沫传播的呼吸道感染疾病患者时佩戴。',
        "type": '医用防护口罩',
        "filterStd": ["KN90", "KN95", "KN100"],
        "filterCap": [{ id: "非油性颗粒", value: "90%" }],
        "intl": ["FFTP2"],
        "std": 'GB19083-2010',
        "time": '5小时',
        "price": '100¥',
        "virus": '普通群众穿戴即可',
        "alt": ["eafw", "feaw"],
        "icon": '../../images/Tests/ender.jpg',
        "img": '../../images/Tests/ender.jpg'
      },
      {
        "title": '活性炭口罩',
        "eng": 'Medical Protection Mask',
        'desc': '医⽤用外科⼝口罩  ⼤大多都为⼀一次性使⽤用，医⽤用防护⼝口罩适⽤用于医务⼈人员和相关⼯工作⼈人员对经空⽓气传播的呼吸道 传染病的防护，是⼀一种密合性⾃自吸过滤式医疗防护⽤用品，防护等级⾼高，尤其适⽤用于诊疗活动 中接触经空⽓气传播或近距离经⻜飞沫传播的呼吸道感染疾病患者时佩戴。',
        "type": '医用防护口罩',
        "filterStd": '',
        "filterCap": [{ id: "非油性颗粒", value: "90%" }],
        "intl": ["FFTP2"],
        "std": '',
        "time": '5小时',
        "price": '100¥',
        "virus": '普通群众穿戴即可',
        "alt": ["eafw", "feaw"],
        "icon": '../../images/Tests/ender.jpg',
        "img": '../../images/Tests/ender.jpg'
      }
    ],
    array: [],
    displayMan: true,
  },

  onLoad() {
    this.setData({
      array: this.data.originalArray
    });
  },
  
  onShow() {

  },

  tap(e) {

  },

  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件');
  },

  seeDetail(event) {
    var $this = this;
    var title = event.currentTarget.dataset.gid;
    var information = this.data.originalArray.find(x => x.title === title);
    console.log(information);
    wx.navigateTo({ url: "/pages/mask_detail/mask_detail?information=" + JSON.stringify(
      information
    ) });
  },


  //搜索框输入时触发
  searchList(ev) {
    console.log('search')
    let e = ev.detail;
    
    this.setData({
      searchstr: e.detail.value,
      displayMan: false
    })

    const arr1 = [];

    this.data.originalArray.forEach((item) => {
      const title = item.title.toLowerCase();
      const search = this.data.searchstr.toLowerCase();
      if (title.includes(search)) {
        arr1.push(item);
      }
      else if (item.eng.toLowerCase().includes(search)) {
        arr1.push(item);
      }
      else if (item.alt.toString().toLowerCase().includes(search)){
        arr1.push(item);
      }
      else if (item.filterStd.toString().toLowerCase().includes(search)) {
        arr1.push(item);
      }
    })
    
    this.setData({
      array : arr1
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: '',
      displayMan: true,
      array: this.data.originalArray
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },

  

})