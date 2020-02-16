Page({

  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addicon: '../../images/activity_add.png',
    searchstr: '',
    originalArray: [],
    array: [],
    displayMan: true,
  },

  onLoad() {
    var app = getApp();
    this.setData({
      originalArray:app.globalData.masks,
      array: app.globalData.masks,
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
    wx.navigateTo({
      url: "/pages/mask_detail/mask_detail?information=" + title
    });
  },

  convert(s) {
    console.log(s);
    return s;
  },


  //搜索框输入时触发
  searchList(ev) {
  
    const st = ev.detail;

    console.log(st.detail.value);

    this.setData({
      searchstr: st.detail.value,
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