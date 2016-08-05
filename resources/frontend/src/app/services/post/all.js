import Vue from 'vue';
import store from './../../store';
import { fetchPosts } from './../../store/modules/post/actions';
import { addNotification } from './../../store/modules/notification/actions';
import postTransformer from './../../transformers/post';
import paginationTransformer from './../../transformers/pagination';

const success = ({ data }) => {
  const pagination = paginationTransformer.fetch(data.pagination);
  const posts = postTransformer.fetchCollection(data.data);

  fetchPosts(store, posts, pagination);
};

const failed = () => {
  addNotification(store, {
    type: 'danger',
    message: 'Fetching posts failed!',
  });
};


export default (page = 1, limit = 5) => {
  Vue.http
    .get(`posts?page=${page}&limit=${limit}`)
    .then(success, failed);
};
