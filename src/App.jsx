import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import ViewProperties from "./components/ViewProperties";
import ViewSingleProperty from "./components/ViewSingleProperty";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ViewProperties />} />
        <Route path="properties/:property_id" element={<ViewSingleProperty />} />
      </Routes>
    </>
  );
}

export default App;
