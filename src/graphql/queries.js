import gql from "graphql-tag";

export const SEARCH_REPOS = gql`
  query getRepos($queryString: String!, $cursor: String) {
    search(query: $queryString, type: REPOSITORY, first: 10, after: $cursor) {
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