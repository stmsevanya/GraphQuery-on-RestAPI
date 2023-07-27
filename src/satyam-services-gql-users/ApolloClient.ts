import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const uri = 'https://dummy.restapiexample.com';
// const uri = 'https://reqres.in/api/users';
// const uri = 'https://swapi.dev';
// const uri = 'https://dummyjson.com/'; // Replace with your GraphQL server endpoint

//-------------
// Create an HTTP Link
//const httpLink = createHttpLink({ uri });

//-------------
// const httpLink = createHttpLink({ uri, fetch });
// const link = ApolloLink.from([httpLink]);

//-------------
// Create the RestLink for your REST API
const restLink = new RestLink({
  uri: uri,
});
// Use ApolloLink.from to combine multiple links if needed
const link = ApolloLink.from([restLink]);

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default apolloClient;