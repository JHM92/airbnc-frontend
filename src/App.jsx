import "./App.css";
import Header from "./components/Header";
import CheckboxOption from "./components/CheckboxOption";

function App() {
  return (
    <>
      <Header />

      <div className="property-types-wrapper">
        Property Types
        <div className="property-type-options">
          <CheckboxOption prompt="property-type" option="house" />
          <CheckboxOption prompt="property-type" option="apartment" />
          <CheckboxOption prompt="property-type" option="studio" />
        </div>
      </div>
    </>
  );
}

export default App;
