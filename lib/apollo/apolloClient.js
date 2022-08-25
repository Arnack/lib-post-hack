import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://37.218.241.79:1337/graphql/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;