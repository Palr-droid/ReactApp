import { useState, useEffect } from "react";

function EmpCount() {

    const [totalEmployees, setTotalEmployees] = useState(0);

    useEffect(() => {

        fetch("/api/persons/count")
            .then(response => response.json())
            .then(data => setTotalEmployees(data.totalDocuments))
            .catch(error => console.error("Error fetching employee count:", error));

    }, []);

    return (

        <div>

            <h2>Total Employees</h2>
            <p>Total number of employees in the database: <strong>{totalEmployees}</strong></p>

        </div>

    );

}

export default EmpCount;
