import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "@apollo/client";
import { RepoContainer } from './components/repoContainer/RepoContainer'
import styled from "styled-components";

import './App.css';

const TOKEN = '2b915d61b753c4d5f5b9897847f7e42d3363e4c9'

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
  background-color: #000000;
  background-size: 120% 190%;
`;
