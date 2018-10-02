import * as React from 'react';

interface SampleComponentProps {
  name: string;
}

class SampleComponent extends React.Component<SampleComponentProps, any> {
  public render() {
    const {name}=this.props;

    return (
      <span>Hello! {name}</span>
    );
  }
}

export default SampleComponent;
