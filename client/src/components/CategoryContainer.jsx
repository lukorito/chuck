import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

const CategoryContainer = () => {
    const { loading, data, error } = useQuery(gql`
        query {
          categories{
            categories
          }
        }
    `)

    const { categories } = data;
    console.log(error, data, loading)
    if(loading) return <p>Loading...</p> 

    return (
        <div className="category-container">
            <p>Categories</p>
            {
                categories && categories.categories.map((category) => (
                    <Link key={category} to={`/random/${category}`}>
                        <li className="category-link">{category}</li>
                    </Link> 
            ))
        }
    </div>
) 
}

export default CategoryContainer;
