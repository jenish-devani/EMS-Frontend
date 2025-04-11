import React, { useEffect, useState } from "react";
import { deleteEmp, listOfEmployees } from "../services/empServices";
import { useNavigate } from "react-router-dom";

function ListEmployee() {
  const [data, setData] = useState([]);

  const fetchEmployees = () => {
    listOfEmployees()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const navigate = useNavigate();

  const handleEdit = (employee) => {
    navigate("/updateDetail", { state: { employee } });
  };

  const handleDelete = (employee) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`
    );
    if (confirmDelete) {
      deleteEmp(employee.id, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Employee deleted successfully!");
            fetchEmployees(); // Refresh the employee list
          } else {
            alert("Failed to delete employee.");
          }
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
        });
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-center mt-4">
        List of Current Employees
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-auto border-collapse border border-gray-300 mx-auto mt-4">
          <thead className="font-bold">
            <tr>
              <th className="border px-4 py-2">Employee Id</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Email Id</th>
              <th className="border px-4 py-2">Contact</th>
              <th colSpan="2" className="border px-4 py-2">
                Edit User
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={index} className="odd:bg-gray-100 hover:bg-gray-200">
                <td className="border px-4 py-2">{employee.id}</td>
                <td className="border px-4 py-2">{employee.firstName}</td>
                <td className="border px-4 py-2">{employee.lastName}</td>
                <td className="border px-4 py-2">{employee.role}</td>
                <td className="border px-4 py-2">{employee.contact}</td>
                <td className="border px-4 py-2">{employee.emailId}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(employee)}
                    className=" hover:text-blue-500"
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(employee)}
                    className=" hover:text-blue-500"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
