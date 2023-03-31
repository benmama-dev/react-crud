import axios from "axios";
import React, { useState } from "react";
import css from "./CreateEmployee.module.scss";
import { useNavigate, Link } from "react-router-dom";

const CreateEmployee = () => {
  const [firsname, setFirsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  const handleCreate = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/create", { firsname, lastname, email, age })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={css.container}>
      <div className={css.area}>
        <div className={css.item}>
          <h1>Add Employee</h1>
          <Link
            className={css.btnBlcak}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Back
          </Link>
        </div>
        <form onSubmit={handleCreate}>
          <div className={css.control}>
            <label>Fristname</label>
            <input
              type="text"
              placeholder="Enter Firstname"
              onChange={(e) => setFirsname(e.target.value)}
              required
            />
          </div>
          <div className={css.control}>
            <label>Lastname</label>
            <input
              type="text"
              placeholder="Enter Lastname"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className={css.control}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={css.control}>
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className={css.btn_area}>
            <button className={css.btn}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
