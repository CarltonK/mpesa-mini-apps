Page({
    data: {
      inputValue: '',
    },
    getData(input) {
      this.setData({
        inputValue: input.detail.value
      });
      // NB: Explore the this keyword
      console.log(this)
      console.log(this.data.inputValue)
    },
    // fetchApi() {
    //   return new Promise((resolve, reject) => {
  
    //   });
    // },
    goBack(e) {
      // console.log(my)
  
      if (this.data.inputValue == '') {
        my.alert({
          content: 'please enter input'
        })
      } else {
  
        // Fetch External APIs
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        my.request({
          url: apiURL,
          method: 'GET',
          data: {
            inputValue: this.data.inputValue
          },
          success: function (res) {
            let result, content;
            if (res.status == 200) {
              result = 'Success';
              content = res.data;
            } else {
              result = 'Fail';
              content = 'Error sending the request'
            }
            my.alert({
              title: result,
              content: content
            });
          },
          fail: function (res) {
            console.log(`Negative ${res}`);
          },
        });
      }
  
    },
    onLoad(query) {
      // 页面加载
      console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    },
    onReady() {
      // 页面加载完成
    },
    onShow() {
      // 页面显示
    },
    onHide() {
      // 页面隐藏
    },
    onUnload() {
      // 页面被关闭
    },
    onTitleClick() {
      // 标题被点击
    },
    onPullDownRefresh() {
      console.log("Hello")
    },
    onReachBottom() {
      // 页面被拉到底部
    },
    onShareAppMessage() {
      // 返回自定义分享信息
      return {
        title: 'My App description orders',
        path: 'pages/orders/orders',
      };
    },
  });