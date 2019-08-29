const { gql } = require('apollo-server');

//schema
const schema = gql`  
  type Categories {
      categories: [String]
  }
  
  type Joke {
      id: ID
      created_at: String
      icon_url: String
      updated_at: String
      url: String
      value: String
      categories: [String]
  }
  
  type Query {
      joke: Joke
      categories: Categories
      random(category: String): Joke
  }    
`;

module.exports = schema;
