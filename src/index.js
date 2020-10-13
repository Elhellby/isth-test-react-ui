import React from 'react';
import ReactDOM from 'react-dom';
import './content/css/index.css';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
