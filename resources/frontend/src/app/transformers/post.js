export default {
  receive(post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
    };
  },

  receiveCollection(posts) {
    const newCollection = [];

    posts.forEach((post) => {
      newCollection.push(this.receive(post));
    });

    return newCollection;
  },

  send(post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
    };
  },

  sendCollection(posts) {
    const newCollection = [];

    posts.forEach((post) => {
      newCollection.push(this.send(post));
    });

    return newCollection;
  },
};
