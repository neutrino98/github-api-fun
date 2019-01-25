import React from "react";
import "../App.css";
import Layout from "../containers/Layout";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  let token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Switch>
          <Route component={LandingPage} path={"/"} />
        </Switch>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
