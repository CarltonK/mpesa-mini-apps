Page({
    // Global Data
    data: {
      singleNewsItem: {},
    },

    onLoad(query) {
      // Fetch from local cache
      const newsItem = my.getStorageSync({ key: 'currentNewsItem' }).data;
      this.setData({ singleNewsItem: newsItem })
    },
});