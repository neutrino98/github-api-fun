import gql from "graphql-tag";


export function getRepoByNameAndAuthor(name: String, owner: String) {
    return (
        gql`
            query { 
              repository(name: ${name}, owner: ${owner}) { 
                description
                url
                assignableUsers {
                  totalCount
                }
                forks {
                  totalCount
                }
                issues {
                  totalCount
                }
                languages(last: 3) {
                  nodes {
                    id 
                    name
                  }
                }
              }
            }
        `
    )
}