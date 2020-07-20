import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../pages/home';
import Admin from '../pages/admin';
import GoUp from '../components/GoUp';
import ScrollUpButton from 'react-scroll-up-button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import store from '../data/store';
import WebsitesAdmin from '../pages/admin/websites';
import Login from '../pages/admin/auth/login';
import { PrivateRoute } from '../Routes/PrivateRoute';
import history from '../helpers/history';
import SkillsAdmin from '../pages/admin/skills';

const App = () => {
  AOS.init({
    duration: 800,
    disable: 'phone',
  });
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route path="/admin/websites" component={WebsitesAdmin} />
        <Route path="/admin/skills" component={SkillsAdmin} />
      </Router>
      <ScrollUpButton
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
        EasingType="linear"
        ShowAtPosition={200}
      >
        <GoUp />
      </ScrollUpButton>
    </Provider>
  );
};

export default App;
