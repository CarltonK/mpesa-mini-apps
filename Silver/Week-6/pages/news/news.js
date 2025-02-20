Page({

    // Global Data
    data: {
        news: [],
    },

    onLoad(query) {
      // Executes when the view has loaded
      const apiKey = 'API_KEY_HERE';
      const apiUrl = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;

      my.request({
        url: apiUrl,
        method: 'GET',
        success: function(res) {
          my.alert({content: 'success'});

          if (res.status == 200) {
            this.setData({ news: res.data.articles });
          }
        },
        fail: function(res) {
          my.alert({content: 'fail'});
        },
        complete: function(res) {
          my.hideLoading();
          my.alert({content: 'complete'});
        }
      });
    },

    navigateToNewsDetail(e) {
        // Current Index
        const index = e.target.dataset.index;

        // The news item located at the index above
        const currentItem = this.data.news[index]

        // Pass the news item from news to detail
        my.setStorageSync({
            key: 'currentNewsItem',
            data: currentItem
        });

        // Navigate to detail
        my.navigateTo({
            url: '../detail/detail'
        }) 
    },
});