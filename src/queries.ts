import gql from 'graphql-tag'

const LOGIN = gql`
  mutation Login($name: String!, $password: String!) {
    signIn(name: $name, password: $password) {
      name
    }
  }
`

const LOGOUT = gql`
  mutation {
    signOut
  }
`

const USRINFO = gql`
  query {
    userInfo {
      name
    }
  }
`

export {
  LOGIN,
  LOGOUT,
  USRINFO,
}