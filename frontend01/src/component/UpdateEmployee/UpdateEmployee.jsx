import axios from "axios";
import React, { useEffect, useState } from "react";
import css from "../CreateEmployee/CreateEmployee.module.scss";
import { useNavigate, Link, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const [firsname, setFirsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${id}`)
      .then((res) => {
        setFirsname(res.data[0].firsname);
        setLastname(res.data[0].lastname);
        setEmail(res.data[0].email);
        setAge(res.data[0].age);
      })
      .catch((err) => console.log(err));
      console.log(firsname);
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put('http://localhost:8080/update/' + id, {
        id,
        firsname,
        lastname,
        email,
        age,
      })
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
          <h1>Edit Employee</h1>
          <Link
            className={css.btnBlcak}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Back
          </Link>
        </div>
        <form onSubmit={handleUpdate}>
          <div className={css.control}>
            <label>Fristname</label>
            <input
              type="text"
              placeholder="Enter Firstname"
              onChange={(e) => setFirsname(e.target.value)}
              value={firsname}
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
              value={lastname}
            />
          </div>
          <div className={css.control}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>
          <div className={css.control}>
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
              required
              value={age}
            />
          </div>
          <div className={css.btn_area}>
            <button className={css.btn}>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
