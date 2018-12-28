//Todo generate type
export interface Repo {
    description: string,
    url: string,
    assignableUsers: AssignableUsers,
    forks: Forks
    issues: Issues,
}

interface AssignableUsers {
    totalCount: number
}

interface Forks {
    totalCount: number
}

interface Issues {
    totalCount: number
}