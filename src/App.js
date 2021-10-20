import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import OurDoctors from './components/Home/OurDoctors/OurDoctors';
import ServiceItem from './components/Home/ServiceItem/ServiceItem';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/services/:serviceItem">
            <ServiceItem></ServiceItem>
          </Route>
          <Route exact path="/doctors">
            <OurDoctors></OurDoctors>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
