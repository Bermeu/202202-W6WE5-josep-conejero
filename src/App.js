import { Route, Routes } from "react-router-dom";
import PageComponent from "./components/PageComponent/PageComponent";

function App() {
  return (
    <>
      <h1>Lista de robots</h1>
      <PageComponent />
      {/* <Routes>
        <Route path="/*" element={<PageComponent />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
