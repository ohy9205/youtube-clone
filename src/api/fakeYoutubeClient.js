import axios from "axios";

export default class FakeYoutubeClient {
  async search(params) {
    return axios.get(`/videos/search_${params.params.q}.json`);
  }
  async videos() {
    return axios.get(`/videos/popular.json`);
  }
}
