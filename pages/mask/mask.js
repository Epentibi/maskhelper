Page({

  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '../../images/activity_add.png',
    searchstr: '',
    originalArray: [
      {
        "img": '../../images/Search List/mian.jpg',
        "title": '其他种类口罩',
        "function": '过滤效率大于30%',
        "price": '价格不等',
        "time": '使用时间不等',
        "alt": []
      },
      {
        "img": '../../images/Search List/N95.jpg',
        "title": 'K/N95',
        "function": '过滤效率大于95%',
        "price": '大约12元',
        "time": '4小时一换',
        "alt": []
      },
      {
        "img": '../../images/Search List/N95.jpg',
        "title": 'K/N100',
        "function": '过滤效率大于95%',
        "price": '大约12元',
        "time": '4小时一换',
        "alt": ['N100','KN100','K100']
      },
      {
        "img": '../../images/Search List/waike.jpg',
        "title": '医用外科口罩',
        "function": '过滤效率大于70%',
        "price": '3-4元',
        "time": '4小时一换',
        "alt": []
      },
      {
        "img": '../../images/Search List/N95.jpg',
        "title": 'K/N90',
        "function": '过滤效率大于95%',
        "price": '大约12元',
        "time": '4小时一换',
        "alt": []
      }
    ],
    array: [],
    displayMan: true,
  },

  onLoad() {
    this.setData({
      array: this.data.originalArray
    })
  },
  
  onShow() {

  },

  tap(e) {

  },

  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件');
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
      if (title.includes(this.data.searchstr.toLowerCase())) {
        arr1.push(item);
      }
      else
      {
        item.alt.forEach((itemAlt) =>
        {
          if (itemAlt.toLowerCase().includes(this.data.searchstr.toLowerCase()))
          {
            arr1.push(item);
          }
        })
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