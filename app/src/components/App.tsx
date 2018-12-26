import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Layout from '../containers/Layout'
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import {Route, Switch, Redirect} from "react-router-dom"

function App() {
  const client = new ApolloClient({
      uri: "https://api.github.com/graphql"
  })

  return (
      <ApolloProvider client={client}>
          <Layout>
            <h1>Hello, world</h1>
          </Layout>
      </ApolloProvider>
  )
}

export default App;
