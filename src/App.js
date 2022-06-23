import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import "./App.css";
import Routers from "./routes/Router.navigation";
import { AccessToken, BaseUrl } from "./utils";

const httpLink = createHttpLink({
  fetch,
  uri: BaseUrl,
  headers: {
    authorization: `Bearer ${AccessToken}`,
    'Content-Language': 'en-us',
    'Content-Type': 'application/json',
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Routers />
    </ApolloProvider>

  );
}

export default App;
