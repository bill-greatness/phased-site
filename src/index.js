import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import 'react-awesome-slider/dist/styles.css';
import './index.css';
import App from './App';
import { Footer} from './layouts'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />,document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('foot'));


serviceWorker.unregister();
