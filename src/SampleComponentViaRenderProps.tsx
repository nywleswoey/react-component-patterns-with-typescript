import * as React from 'react';

interface SampleComponentViaRenderPropsProps {
  render: (name: string) => JSX.Element;
  name: string;
}

class SampleComponentViaRenderProps extends React.Component<SampleComponentViaRenderPropsProps, any> {
  public render() {
    const { render, name } = this.props;

    return (
      render(name)
    );
  }
}

export default SampleComponentViaRenderProps;
