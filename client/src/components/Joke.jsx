import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_RANDOM_JOKE = gql`
  query random($category: String!) {
    random(category: $category) {
      id
      value
      categories
      icon_url
    }
  }
`;

const Joke = ({match}) => {
  const {category} = match.params;
  const {loading, data} = useQuery(GET_RANDOM_JOKE, {
    variables: {category: `${category}`},
  });
  if (loading) return <p>Loading ...</p>;
  const {random} = data;
  return (
    <React.Fragment>
      {random && (
        <div>
          <img src={random.icon_url} alt={random.icon_url} />
          <p>{random.value}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Joke;
