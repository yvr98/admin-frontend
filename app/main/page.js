"use client";
import React, { useState, useEffect } from "react";
import AddCompany from "../components/AddCompany";
import CompanyList from "../components/CompanyList";
import AddEmployee from "../components/AddEmployee";
import EmployeeList from "../components/EmployeeList";

const ParentComponent = () => {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);

  const fetchCompanies = () => {
    fetch("http://localhost:3001/api/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  };

  const fetchEmployees = () => {
    fetch("http://localhost:3001/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  };

  useEffect(() => {
    fetchCompanies();
    fetchEmployees();
  }, []);

  return (
    <div className="">
      <AddCompany onCompanyAdded={fetchCompanies} />
      <CompanyList companies={companies} onCompanyDeleted={fetchCompanies} />
      <AddEmployee onEmployeeAdded={fetchEmployees} companies={companies} />
      <EmployeeList employees={employees} onEmployeeDeleted={fetchEmployees} />
    </div>
  );
};

export default ParentComponent;
