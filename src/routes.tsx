import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Lading';
import ContentPage from './pages/ContentPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/content" exact component={ContentPage} />
    </Switch>
  );
};

export default Routes;
