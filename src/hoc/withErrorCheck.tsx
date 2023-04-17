type ErrorCheckProps = {
  error: boolean;
  resource: string;
};

/**
 * HOC that checks for errors and displays a message if there is an error
 * @param WrappedComponent the component to wrap
 * @returns the WrappedComponent if there is no error, otherwise a message
 */
export function withErrorCheck<P>(WrappedComponent: React.ComponentType<P>) {
  const ErrorChecked = (props: P & ErrorCheckProps) => {
    if (props.error) {
      return <section>Could not load {props.resource}</section>;
    }

    return <WrappedComponent {...props} />;
  };

  return ErrorChecked;
}

export default withErrorCheck;
