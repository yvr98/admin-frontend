import React from "react";

const CompanyList = ({ companies, onCompanyDeleted }) => {
  const handleDelete = (companyId) => {
    fetch(`http://localhost:3001/api/companies/${companyId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Company deleted");
        onCompanyDeleted();
      })
      .catch((error) => console.error("Error deleting company:", error));
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl font-bold mb-4">Companies</h2>
      <ul>
        {companies.map((company) => (
          <li
            key={company.id}
            className="flex justify-between items-center bg-white shadow-md my-2 py-2 px-4 rounded"
          >
            <div className="flex items-center space-x-4">
              {company.logo && (
                <img
                  src={`http://localhost:3001/${company.logo}`}
                  alt={`${company.name} logo`}
                  className="h-10 w-10 object-cover"
                />
              )}
              <span className="text-gray-700">{company.name}</span>
            </div>
            <button
              onClick={() => handleDelete(company.id)}
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

export default CompanyList;
