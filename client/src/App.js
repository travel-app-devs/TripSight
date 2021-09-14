
import React, {useEffect} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/home';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewPost from './pages/NewPost'
import Navigation from './component/navigation'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const apiKey = process.env.REACT_APP_MAPS_KEY


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  useEffect(() => {
    if(!document.querySelector("#here")) {
    console.log(apiKey)
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.id = "here";
    window.document.body.appendChild(googleMapScript);
    }
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Link to='/'></Link>

        <Switch>
          <Route exact path='/'>
            {/* <Header /> */}
            <Home />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/dashboard/:userId">
            <Navigation />
            <Dashboard />
          </Route>
          <Route exact path="/newpost">
            <NewPost />
          </Route>
          {/* <Route exact path="/profiles/:username">
            <Profile />
          </Route>
          <Route exact path="/posts/:postId">
            <SinglePost />
          </Route> */}
        </Switch>
        </div>
      </Router>
    </ApolloProvider>
    

  );
}

export default App;