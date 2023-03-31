import React, { useEffect, useState } from "react";
import css from "./Employee.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/delete/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.area}>
        <h1>CRUD SYSTEM</h1>
        <Link
          to="/create"
          className={css.btn}
          style={{ textDecoration: "none" }}
        >
          Add +
        </Link>

        {employee && employee.length > 0 ? (
          <table className={css.table}>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((data) => (
                <tr key={data.id}>
                  <td>{data.firsname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                  <td>
                    <Link
                      to={`/update/${data.id}`}
                      className={css.linkbtn}
                      style={{ textDecoration: "none" }}
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => handleDelete(data.id)}
                      className={css.linkbtn01}
                      style={{ textDecoration: "none" }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={css.test}>
            <h2>No Information Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
