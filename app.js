//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    versionString: "0.1.2",
    masks: [
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
        'price': '5-10人民币',
        'virus': '有效，KN90建议普通人日常佩戴,KN95请留给医务人员',
        'alt': ['fewa', 'feawg', 'gawhb',],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Medical%20Respirator_Square.jpg?sign=81b874a8a9bd8552dee030c067a867c2&t=1581831157',
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Medical%20Respirator.png?sign=5681bb0fbcf2b23f190ead413140fbc4&t=1581851691'
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
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Surgical%20Mask.jpg?sign=9944eb35278528fc3c8efc36833b9b20&t=1581852736'
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
        'img': 'https://www.icloud.com/numbers/0uOPrxFtWe1WhPVV41dSCk3og'
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
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Cotton%20Mask.jfif.png?sign=55abc6ac190a9a4f9553676f343f7f5e&t=1581856074'
      },
      {
        'title': '海绵口罩',
        'eng': 'Pitta Mask',
        'type': '生活口罩',
        'filterStd': [],
        'intl': [],
        'filterCap': [],
        'std': '无',
        'desc': '海绵口罩可以起除臭、滤菌、阻尘等功效，并且经济耐用，可重复使用，健康卫生，但是纤维口径很大，只能过滤大的颗粒，防护率较低',
        'time': '无',
        'price': '<1人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Sponge-Mask_Square.jpg?sign=4fe2cc36d0fb0b34a15e14bdb89921d9&t=1581829689',
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Sponge%20Mask.jfif.png?sign=7452a83faa96a6f4d3fc32bfe110367a&t=1581847974'
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
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Activated%20Carbon%20Mask.jfif.png?sign=91a11775129aeba22a02ef0f015b8d15&t=1581847840'
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
        'price': '～0.5元人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Disposable-Paper-Mask_Square.jpg?sign=909cf838df1cbb26292c4d27706433d8&t=1581829571',
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Paper%20Mask.jfif.png?sign=3399479b48e7061dc479c3e35f682b98&t=1581852827'
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
        'time': '因滤片型号而不等',
        'price': '价格不一',
        'virus': '有效,但是有可能价格不菲',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Gas-Mask_Square.jpg?sign=e22be78af131d9fa82c3377e7a0748e2&t=1581829753',
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Gas%20Mask.jpg?sign=ffe4154de36cccf5c1f136fd7b3a199a&t=1581855594'
      },
      {
        'title': '保暖口罩',
        'eng': 'Warm Face Mask',
        'type': '生活口罩',
        'filterStd': [],
        'intl': [],
        'filterCap': [],
        'std': '无',
        'desc': '保暖口罩比较厚，使用棉布做的，夹层里是棉花，并且普遍用于装饰和保暖，不能起到防护作用',
        'time': '无',
        'price': '15元人民币',
        'virus': '无效',
        'alt': [],
        'icon': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Warm%20Mask_Square.jpg?sign=9ab336d72430ac115e72b0e7d07745ec&t=1581829790',
        'img': 'https://6d61-maskhelper-0unab-1301289559.tcb.qcloud.la/Mask%20Photo/Warm%20Mask.jfif.png?sign=250007e2705246db214e03ee940fb2ed&t=1581848477'
      },

    ],
  }
})