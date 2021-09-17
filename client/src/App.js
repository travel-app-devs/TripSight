import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SearchResults from './pages/searchResults'
import Dashboard from './pages/Dashboard'
import NewPost from './pages/NewPost'
import Navigation from './component/navigation'
import Viewpost from './pages/viewPost'
import Profile from './pages/Profile'
import Auth from './utils/auth'
import LatLngContext from './context/LatLngContext';
import AllPostsContext from './context/AllPostsContext';
import { QUERY_PLACEPOSTS } from './utils/queries';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});




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
  // const [latLng, setLatLng] = useState({
  //   lat: 0.0000,
  //   lng: 0.0000
  // })
  // const getPlaceLatLng = (address) => {
  //   let latitude, longitude, placeId;
  //   new window.google.maps.Geocoder().geocode(
  //     { address: `${address}` },
  //     function (results, status) {
  //       if (status === window.google.maps.GeocoderStatus.OK) {
  //         placeId = results[0].place_id;
  //         latitude = results[0].geometry.location.lat();
  //         longitude = results[0].geometry.location.lng();
  //         setLatLng({
  //           lat: latitude,
  //           lng: longitude
  //         })
  //         return console.log("coordinates: ", latLng.lat, latLng.lng)
  //       } else {
  //         alert(
  //           "Geocode was not successful for the following reason: " + status
  //         );
  //       }
  //     }
  //   );
  // };
  const  [place, setPlace] = useState('');
  useEffect(() => {
    if (!document.querySelector("#here")) {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAy6d25XL0PViXcyr-Erl3Gtg7SXYB0jRg&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.id = "here";
      window.document.body.appendChild(googleMapScript);
    }
  }, []);
  return (
    <ApolloProvider client={client}>
      <LatLngContext.Provider value={{place: place, setPlace: setPlace, QUERY_PLACEPOSTS: QUERY_PLACEPOSTS}}>
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
            {/* {Auth.loggedIn ? <Redirect to="/dashboard" /> : <Login />} */}
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/results">
            <SearchResults />
          </Route>
          <Route exact path="/dashboard">
            <Navigation />
            <Dashboard />
          </Route>
          <Route exact path="/newpost">
            <Navigation />
            <NewPost />
          </Route>
          <Route exact path="/viewpost/:postId">
            <Viewpost />
          </Route>
          {/* <Route exact path="/me">
            <Profile />
          </Route>
          <Route exact path="/profile/:userId">
            <Navigation />
            <Profile />
          </Route>
          {/* <Route exact path="/posts/:postId">
            <SinglePost />
          </Route> */}
              </Switch>
            </div>
          </Router>
      </LatLngContext.Provider>
      </ApolloProvider>


  );
}

export default App;