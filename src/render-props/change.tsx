import React from "react";
type InputProps = {
  name: string,
  type: string
};

type OnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
};

type ExpandedOnChangeProps = {
  initialValue: string ,
  render: (onChangeProps: OnChangeProps) => JSX.Element
};

type OnChangeState = {
  value: string | boolean
};

class OnChange extends React.Component<ExpandedOnChangeProps, OnChangeState> {
  state = {
    value: this.props.initialValue
  };
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    this.setState({ value: target.value });
  };
  render() {
    return this.props.render({
      value: this.state.value,
      onChange: this.onChange
    });
  }
}

const Input = ({ value, onChange, type, name }: InputProps & OnChangeProps) => (
  <input type={type} name={name} value={value} onChange={onChange} />
);

type ControlledInputProps = InputProps & { initialValue: string };

const ControlledInput = ({ initialValue, ...props }: ControlledInputProps) => (
  <OnChange
    initialValue={initialValue}
    render={onChangeProps => <Input {...props} {...onChangeProps}/>}
  />
);

export {Input, ControlledInput}
export default OnChange;