import ListEmployee from "./pages/ListEmployee";
import HeaderComponenet from "./components/HeaderComponenet";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <div className="container">
      <HeaderComponenet />
      <Routes>
        <Route path="/" element={<ListEmployee />}></Route>
        <Route path="/addEmployee" element={<AddEmployee />}></Route>
        <Route path="/updateDetail" element={<UpdateEmployee />}></Route>
      </Routes>
    </div>
  );
}

export default App;
