import gql from "graphql-tag";

export const SEARCH_REPOS = gql`
  query getRepos($queryString: String!, $cursor: String) {
    search(query: $queryString, type: REPOSITORY, first: 12, after: $cursor) {
      nodes {
        ... on Repository {
          url
          id
          name
          owner {
            login
            id
            url
            avatarUrl
          }
          forkCount
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

export const query = gql`
  {
    savedRepos @client {
      url
      id
      name
      owner {
        login
        id
        url
        avatarUrl
      }
      forkCount
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
    }
  }
`;

export const VIEW_REPOS = gql`
query getRepos($name: String!, $owner: String!) {
  repositoryOwner (login: $owner) {
    repository(name: $name) {
      url
      id
      description
      name
      owner {
        login
        id
        url
        avatarUrl
      }
      forkCount
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
    }
  }
}
`;