import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SampleComponent from './SampleComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SampleComponent
    name='Francis'
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
