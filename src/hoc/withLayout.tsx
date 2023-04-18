import QuizzLink from "../components/QuizzLink/QuizzLink";

/**
 * HOC that wraps the component in a section with flexbox styling and a link to the home page
 * @param WrappedComponent the component to wrap
 * @returns the WrappedComponent with flexbox styling
 */
export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
  const Laypout: React.FC<P & {}> = (props) => {
    return (
      <section className="flex flex-col gap-4 justify-center items-center h-screen">
        <QuizzLink route="/" text="Back to Start" />
        <WrappedComponent {...props} />
      </section>
    );
  };

  return Laypout;
}

export default withLayout;
