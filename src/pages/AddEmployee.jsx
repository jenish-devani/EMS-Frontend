import React from "react";
import { addNewEmployee } from "../services/empServices";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      emailId: e.target.emailId.value,
      role: e.target.role.value,
      contact: e.target.contact.value,
    };

    addNewEmployee(emp).then((response) => {
      if (response.status === 201) {
        alert("Employee added successfully!");
        console.log(response.data);
        navigate("/");
      } else {
        alert("Failed to add employee.");
      }
    });
  };

  return <FormComponent handleSubmit={handleSubmit} />;
};

export default AddEmployee;
