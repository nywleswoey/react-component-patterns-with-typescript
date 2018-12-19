import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SampleComponent from './SampleComponent';
import SampleComponentViaRenderProps from './SampleComponentViaRenderProps';
import SampleComponentViaComponentInjection from './SampleComponentViaComponentInjection';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.Fragment>
    <SampleComponentViaComponentInjection
      component={SampleComponent}
      name='Using component injection'
    />
    <br />
    <SampleComponentViaRenderProps
      render={(name: string) => <span>Hello! {name}</span>}
      name="Using render props"
    />
  </React.Fragment>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
