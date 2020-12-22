import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const rootContainer = document.querySelector('#root');

ReactDOM.render( <CounterApp value={15} /> , rootContainer );