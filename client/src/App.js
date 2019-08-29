import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, Switch } from "react-router-dom";
import client from './apollo-client';
import CategoryContainer from './components/CategoryContainer'
import Header from './components/Header'
import Joke from './components/Joke'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <Header content={"Chuck Norris Api"}/>        
            <Switch>
                <Route exact path="/" component={ CategoryContainer } />
                <Route path="/random/:category" component={ Joke } />
            </Switch> 
      </div>
    </ApolloProvider>
  );
}

export default App;
