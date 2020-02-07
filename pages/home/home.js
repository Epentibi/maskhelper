const app = getApp()
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    imgUrls: [
      '../../images/Page/Battle.jpg',

      '../../images/Page/Battle3.jpg',
      '../../images/Page/Battle5.jpg'
    ],
  },
  






data:{
array:[
  {
    "img":'../../images/Search List/N95.jpg',
    "title":'N95 口罩',
    "function":'过滤效率大于95%',
    "price":'大约12元',
    "time" :'4小时一换'
  
  },
  {
    "img": '../../images/Search List/waike.jpg',
    "title": '医用外科口罩',
    "function":'过滤效率大于70%',
    "price": '3-4元',
    "time": '4小时一换'
  },
  {
    "img": '../../images/Search List/mian.jpg',
    "title": '其他种类口罩',
    "function": '过滤效率大于30%',
    "price": '价格不等',
    "time": '使用时间不等'
  }
]
}
})