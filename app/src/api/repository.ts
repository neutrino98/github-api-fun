import gql from "graphql-tag";
import {Repo} from "../types/Repo";


export function getRepoByNameAndAuthor(name: String, owner: String): Repo {
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
               
                }
              }
            }
        `
    )
}