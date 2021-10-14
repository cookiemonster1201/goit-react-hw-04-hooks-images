import axios from 'axios';

export default class ImageSearchApi {
  constructor(key, url) {
    this.query = '';
    this.page = 1;
    this.key = key;
    this.baseUrl = url;
  }

  async fetchData() {
    const searchParams = new URLSearchParams({
      q: this.query,
      page: this.page,
      key: this.key,
    });
    const url = `${this.baseUrl}image_type=photo&orientation=horizontal&per_page=12&${searchParams}`;
    const response = await axios.get(url);
    return response.data.hits;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get searchQuery() {
    return this.searchQuery;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }
}
