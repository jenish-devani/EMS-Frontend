import React from "react";
import { useState, useEffect } from "react";

const FormComponent = ({ handleSubmit, editEmployee, updateEmployee }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [form, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    role: "",
    contact: "",
  });

  console.log("in effect", editEmployee);

  useEffect(() => {
    if (editEmployee) {
      setIsEdit(true);
      setFormData({
        firstName: editEmployee.firstName || "",
        lastName: editEmployee.lastName || "",
        emailId: editEmployee.emailId || "",
        role: editEmployee.role || "",
        contact: editEmployee.contact || "",
      });
    } else {
      setIsEdit(false);
      setFormData({
        firstName: "",
        lastName: "",
        emailId: "",
        role: "",
        contact: "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateEmployee(e);
    } else {
      handleSubmit(e);
    }
    setFormData({
      firstName: "",
      lastName: "",
      emailId: "",
      role: "",
      contact: "",
    });
    setIsEdit(false);
  };

  return (
    <div>
      <div className="container mt-7">
        <p className="py-2 px-4 mx-auto text-center text-xl font-semibold">
          {isEdit ? "Edit" : "Add"} Employee Information
        </p>
        <form
          onSubmit={submitData}
          className="flex items-center justify-center"
        >
          <div className="flex flex-col gap-7 w-[75%] mt-7 items-center">
            <div className="sm:col-span-3 w-96">
              <label
                htmlFor="firstName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 w-96">
              <label
                htmlFor="lastName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 w-96">
              <label
                htmlFor="emailId"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email Id
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="emailId"
                  id="emailId"
                  value={form.emailId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 w-96">
              <label
                htmlFor="role"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={form.role}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 w-96">
              <label
                htmlFor="contact"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Contact
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  value={form.contact}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
