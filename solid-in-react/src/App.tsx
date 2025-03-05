import SingleResponsibility from "./components/singe-responsibility";
import OpenClosedButton from "./components/open-closed";
import LiskovSubstitution from "./components/liskov-substitution";
import InterfaceSegregation from "./components/interface-segregation";
import DependencyInversion from "./components/dependency-inversion";

const App = () => {
  return (
    <>
      <ShowTitle title="1. Single Responsibility(Seperate data fetching logic from UI)">
        <SingleResponsibility />
      </ShowTitle>
      <ShowTitle title="2. Open/Closed">
        <OpenClosedButton variant="primary">Primary Button</OpenClosedButton>
        <OpenClosedButton variant="secondary">Secondary Button</OpenClosedButton>
      </ShowTitle>
      <ShowTitle title="3. Liskov Substitution">
        <LiskovSubstitution />
      </ShowTitle>
      <ShowTitle title="4. Interface Segregation">
        <InterfaceSegregation />
      </ShowTitle>
      <ShowTitle title="5. Dependency Inversion">
        <DependencyInversion />
      </ShowTitle>
    </>
  );
};

export default App;

type ShowTitleProps = {
  title: string;
  children: React.ReactNode;
};

const ShowTitle = ({ title, children }: ShowTitleProps) => {
  return (
    <div
      style={{
        marginBottom: "0.5rem",
      }}
    >
      <h2>{title}</h2>
      {children}
      <hr />
    </div>
  );
};
