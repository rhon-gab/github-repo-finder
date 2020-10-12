import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "@apollo/client";
import { RepoContainer } from './components/repoContainer/RepoContainer'
import styled from "styled-components";
import { query } from "./graphql/queries";

import './App.css';

const TOKEN = ''

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  }),
  cache,
});

const data = {
  savedRepos: [],
};

client.writeQuery({ query, data });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Wrapper>
          <RepoContainer />
        </Wrapper>
      </ApolloProvider>
    );
  }
}

export default App;

const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
`;
