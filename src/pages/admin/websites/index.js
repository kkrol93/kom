import React from 'react';
import AddWebsites from './addWebsite';
import ShowWebsites from './showWebsites';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import EditWebsite from './editWebsite';

const WebsitesAdmin = () => {
  return (
    <>
      <AddWebsites />
      <Switch>
        <Route exact path="/admin/websites" component={ShowWebsites} />
        <Route path="/admin/websites/:id" component={EditWebsite} />
      </Switch>
    </>
  );
};
export default WebsitesAdmin;
