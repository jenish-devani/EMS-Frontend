import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/api/employee";
const REST_API_BASE_URL = "https://ems-backend-9v9e.onrender.com/api/employee";

export const listOfEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

export const addNewEmployee = async (employee) => {
  return axios.post(REST_API_BASE_URL, employee, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getEmployeeById = async (empId) => {
  return axios.get(REST_API_BASE_URL + "/" + empId);
};

export const updateEmp = async (empId, employee) => {
  return axios.put(REST_API_BASE_URL + "/" + empId, employee);
};

export const deleteEmp = async (empId) => {
  return axios.delete(REST_API_BASE_URL + "/" + empId);
};
