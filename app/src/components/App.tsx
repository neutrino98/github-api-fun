import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Layout from '../containers/Layout'
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import {Route, Switch} from "react-router-dom"
import LandingPage from "../containers/LandingPage"


function App() {
  const client = new ApolloClient({
      uri: "https://api.github.com/graphql"
  })

  return (
      <ApolloProvider client={client}>
          <Layout>
              <Switch>
                  <Route component={LandingPage} path={'/'}/>
              </Switch>
          </Layout>
      </ApolloProvider>
  )
}

export default App;
