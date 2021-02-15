import React from 'react';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/containers/Content';

const Home = () => (
  <Page>
    <AppHeader />
    <Content
      title="Les recettes oRecipes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
    />
  </Page>
);

export default Home;
