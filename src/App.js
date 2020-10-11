import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "@apollo/client";
import { RepoContainer } from './components/RepoContainer'

import './App.css';

const TOKEN = 'de20f0a9fa360c96cec3ceaf2dea3b0efbf17a19'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <RepoContainer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
