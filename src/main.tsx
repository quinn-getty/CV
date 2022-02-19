import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base';
import Work from './components/Work';
import Project from './components/Project';
import Other from './components/Other';

const App = ()=><>
  <Base />
  <Work />
  <Project />
  <Other />
</>

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
