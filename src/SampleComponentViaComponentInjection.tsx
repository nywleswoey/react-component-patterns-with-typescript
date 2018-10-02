import * as React from 'react';

interface SampleComponentViaComponentInjectionProps {
  component: React.ComponentType<any>;
  name: string;
}

class SampleComponentViaComponentInjection extends React.Component<SampleComponentViaComponentInjectionProps, any> {
  public render() {
    const { component: InjectedComponent, name } = this.props;

    return (
      <InjectedComponent name={name} />
    );
  }
}

export default SampleComponentViaComponentInjection;
