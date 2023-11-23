import React from "react";

const EmployeeList = ({ employees, onEmployeeDeleted, onEditEmployee }) => {
  const handleDelete = (employeeId) => {
    fetch(`http://localhost:3001/api/employees/${employeeId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Employee deleted");
        onEmployeeDeleted();
      })
      .catch((error) => console.error("Error deleting employee:", error));
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl font-bold mb-4">Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="flex justify-between items-center bg-white shadow-md my-2 py-2 px-4 rounded"
          >
            <span className="text-gray-700">
              {`${employee.firstName} ${employee.lastName}`} -{" "}
              {employee.company ? employee.company.name : "No Company"}
            </span>
            <button
              onClick={() => handleDelete(employee.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
