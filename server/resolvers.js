const fetch = require('node-fetch');

// resolvers
const resolvers = {
  Query: {
    joke() {
      return new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(res => res.json())
          .then(data => resolve(data));
      });
    },
    categories() {
      return new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/categories')
          .then(res => res.json())
          .then(categories => {
            resolve({categories});
          });
      });
    },
    random(parent, args) {
      return new Promise((resolve, reject) => {
        fetch(
          `https://api.chucknorris.io/jokes/random?category=${args.category}`,
        )
          .then(res => res.json())
          .then(data => resolve(data));
      });
    },
  },
};

module.exports = resolvers;
