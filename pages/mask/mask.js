Page({

  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addicon: '../../images/activity_add.png',
    searchstr: '',
    originalArray: [
      {
        'title': '医用防护口罩',
        'eng': 'Medical Respirator',
        'type': '医用防护',
        'filterStd': ['KN90', 'KN95', 'KN100',],
        'intl': ['N95', 'N99', 'N100', 'R95', 'R99', 'R100', 'P95', 'P99', 'P100', 'FFP1', 'FFP2', 'FFP3',],
        'filterCap': [],
        'std': 'GB19083-2010',
        'desc': '这是一种能阻止经空气传播的直径≤5μmg感染因子或近距离（≤1m）接触经飞沫传播的疾病而发生感染的口罩。医用口罩的使用包括密合性测试、培训、型号的选择、医学处理和维护。',
        'time': '2-4小时',
        'price': '～为5-10人民币',
        'virus': '有效，KN90建议普通人日常佩戴,KN95请留给医务人员',
        'alt': ['fewa', 'feawg', 'gawhb',],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Medical%20Respirator_Square.jpg?sign=81b874a8a9bd8552dee030c067a867c2&t=1581831157',
        'img': ''
      },
      {
        'title': '医用外科口罩',
        'eng': 'Surgical Mask',
        'type': '医用防护',
        'filterStd': [],
        'intl': [],
        'filterCap': [{ id: "气溶胶", value: "90%" }, { id: "细菌", value: "95" },],
        'std': 'YY0469-2011',
        'desc': '在医疗有创操作过程中，对血液、体液和飞溅物的溅出起到防护作用。',
        'time': '4小时',
        'price': '～1元人民币',
        'virus': '有效，建议普通人日常佩戴',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Surgical-Mask_Square.jpg?sign=254b072624d8305747c3ac92cdb4a15a&t=1581829906',
        'img': ''
      },
      {
        'title': '普通医用口罩',
        'eng': 'One-Time Medical Mask',
        'type': '医用防护',
        'filterStd': [],
        'intl': [],
        'filterCap': [{ id: "细菌过滤率", value: "95%" }, { id: "非油性颗粒", value: "30%" },],
        'std': 'YY/T 0969-2013',
        'desc': '医用口罩多采用一层或者多层非织造布复合制作而成，主要用于医务防护',
        'time': '4—6个小时',
        'price': '～1元人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Medical%20Mask_Square.jpg?sign=b5f97f8f1e0c41d01e82ac29aa85cdd0&t=1581831670',
        'img': ''
      },
      {
        'title': '棉布口罩',
        'eng': 'Cotton Mask',
        'type': '生活口罩',
        'filterStd': [],
        'intl': [],
        'filterCap': [],
        'std': '无',
        'desc': '普遍用于日常装饰或隐藏身份，可以反复洗反复佩戴，但是透气性低，防护率低',
        'time': '8小时',
        'price': '<1人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Cotton%20Mask_Square.png?sign=cdc551f92c382132ff69662d1410b4e7&t=1581831887',
        'img': ''
      },
      {
        'title': '海绵口罩',
        'eng': 'Sponge Mask',
        'type': '生活口罩',
        'filterStd': [],
        'intl': [],
        'filterCap': [],
        'std': '无',
        'desc': '',
        'time': '',
        'price': '<1人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Sponge-Mask_Square.jpg?sign=4fe2cc36d0fb0b34a15e14bdb89921d9&t=1581829689',
        'img': ''
      },
      {
        'title': '活性炭口罩',
        'eng': 'Activated Carbon Mask',
        'type': '呼吸防护',
        'filterStd': [],
        'intl': [],
        'filterCap': [{ id: "滤菌", value: "99.9%" },],
        'std': '无',
        'desc': '可以用来除臭阻尘，建议在刚刚装修完的办公楼内使用，但是防护率低，并且会带来呼吸困难',
        'time': '～1个小时',
        'price': '<1人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Carbon%20Mask_Square.jpg?sign=e2a02886739cffbc4b08b5a88c19b470&t=1581829636',
        'img': ''
      },
      {
        'title': '纸口罩',
        'eng': 'Disposable Paper Mask',
        'type': '服务业，手工制造业',
        'filterStd': [],
        'intl': [],
        'filterCap': [],
        'std': '无',
        'desc': '医疗，食品，化工，美容，环保等行业首选一次性用品，不刺激皮肤，佩带舒适，可依不同脸型做最舒适的调整，但是防护率低',
        'time': '4—6个小时',
        'price': '～5元人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Disposable-Paper-Mask_Square.jpg?sign=909cf838df1cbb26292c4d27706433d8&t=1581829571',
        'img': ''
      },
      {
        'title': '防尘口罩',
        'eng': 'Dust Mask',
        'type': '呼吸防护',
        'filterStd': ['KN90', 'KN95', 'KN100', 'KP90', 'KP95', 'KP100',],
        'intl': [],
        'filterCap': [],
        'std': 'GB2626-2006',
        'desc': '从事和接触粉尘的作业人员必不可少的防护用品，防止或减少空气中粉尘进入人体呼吸器官从而保护生命安全',
        'time': '8-40个小时',
        'price': '1-2元人民币',
        'virus': '有效，建议普通人日常佩戴',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Dust-Mask_Square.jpg?sign=c4a5c2dde3e914e10a191b05ab546a18&t=1581830767',
        'img': ''
      },
      {
        'title': '防毒面罩',
        'eng': 'Gas Mask',
        'type': '特种防护',
        'filterStd': ['KN95', 'KN100',],
        'intl': ['FFP3', 'N95', 'N100',],
        'filterCap': [{ id: "颗粒", value: "95%" },],
        'std': 'GB2890-2009',
        'desc': '防毒面具是个人劳动保护用品，也是单兵防护用品，戴在头上，保护人的呼吸器官、眼睛和面部，防止毒气、粉尘、细菌、有毒有害气体或蒸汽等有毒物质伤害的个人防护器材。',
        'time': '通过不同的滤材有不同的使用时间',
        'price': '价格不一',
        'virus': '有效,但是有可能价格不菲',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Gas-Mask_Square.jpg?sign=e22be78af131d9fa82c3377e7a0748e2&t=1581829753',
        'img': ''
      },
      {
        'title': '保暖口罩',
        'eng': 'Warm Face Mask',
        'type': '生活口罩',
        'filterStd': [],
        'intl': [],
        'filterCap': [],
        'std': '无',
        'desc': '',
        'time': '',
        'price': '15元人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Warm%20Mask_Square.jpg?sign=9ab336d72430ac115e72b0e7d07745ec&t=1581829790',
        'img': ''
      },

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

  convert(s) {
    console.log(s);
    return s;
  },


  //搜索框输入时触发
  searchList(ev) {
    console.log('search')
    let e = eva
    
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