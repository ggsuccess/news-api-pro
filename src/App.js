import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <React.Fragment>
      <Categories />
      <NewsList />
    </React.Fragment>
  );
};

export default App;
