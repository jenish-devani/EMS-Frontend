import React from "react";
import FormComponent from "../components/FormComponent";
import { useLocation } from "react-router-dom";
import { updateEmp } from "../services/empServices";
import { useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
  const location = useLocation();
  const employee = location.state.employee;

  const navigate = useNavigate();

  const updateEmpl = (e) => {
    const updatedEmp = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      emailId: e.target.emailId.value,
      role: e.target.role.value,
      contact: e.target.contact.value,
    };

    updateEmp(employee.id, updatedEmp).then((response) => {
      if (response.status === 200) {
        alert("Employee updated successfully!");
        console.log(response.data);
        navigate("/");
      } else {
        alert("Failed to add employee.");
      }
    });
  };

  return (
    <>
      <FormComponent editEmployee={employee} updateEmployee={updateEmpl} />
    </>
  );
};

export default UpdateEmployee;
