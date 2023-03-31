import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./component/CreateEmployee/CreateEmployee";
import Employee from "./component/Employee/Employee";
import UpdateEmployee from "./component/UpdateEmployee/UpdateEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee/>}></Route>
          <Route path="/create" element={<CreateEmployee/>}></Route>
          <Route path="/update/:id" element={<UpdateEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
