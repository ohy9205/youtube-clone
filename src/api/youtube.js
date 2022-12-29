export default class Youtube {
  // 생성자로 url과 기본키 설정
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async related(videoId) {
    return this.#relatedByVideoId(videoId);
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async category(categoryId) {
    console.log(categoryId);
    return this.#categoryByid(categoryId);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: "25",
          type: "video",
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: "25",
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async #categoryByid(categoryId) {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: "50",
          chart: "mostPopular",
          videoCategoryId: categoryId,
        },
      })
      .then((res) => res.data.items);
  }

  async #relatedByVideoId(videoId) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          relatedToVideoId: videoId,
          type: "video",
          maxResults: "25",
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}
