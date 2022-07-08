import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import HomeScreen from './screens/HomeScreen';

const CartScreen = React.lazy(() => import('./screens/CartScreen'));
const LoginScreen = React.lazy(() => import('./screens/LoginScreen'));
const ProductScreen = React.lazy(() => import('./screens/ProductScreen'));
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'));
const RegisterScreen = React.lazy(() => import('./screens/RegisterScreen'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route
            path="/login"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <LoginScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/register"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <RegisterScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <ProfileScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/product/:id"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                {console.log(
                  'History and match is',
                  props.history,
                  props.match
                )}
                <ProductScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/cart/:id?"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <CartScreen {...props} />
              </Suspense>
            )}
          />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
