import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserByid } from '../http/actions.js';
import EmpForm from "../components/EmpForm.jsx";

function EditUserPage() {

    const [editedValues, setEditedValues]= useState({
        empId : '',
        empname : '',
        empemail : '',
        empage : '',
        empdept : '',
    });

    const navigate = useNavigate();

    const params = useParams();

    const empId = params.id;

    useEffect(() => {
        const fetchEmployeeData = async () => {
            const result = await fetchUserByid(empId);

            setEditedValues({
                empId : result.empId,
                empName : result.empName,
                empEmail : result.empEmail,
                empAge : result.empAge,
                empDept : result.empDept,
            });
        };

        fetchEmployeeData();
    }, [empId]);

    function handleEditValues(event) {
        setEditedValues({...editedValues, [event.target.name] : event.target.value});
    }

    function handleEditSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);

        const user = {
            empName : fd.get('empName'),
            empEmail : fd.get('empEmail'),
            empAge : fd.get('empAge'),
            empDept : fd.get('empDept'),
            empId : fd.get('empId'),
        };

        fetch('https://localhost:7095/api/Employees/' +user.empId, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        }).then((response) => {
            navigate('/');
        })
    }

    return (
        <>
        <h1>Edit User</h1>
        <form onSubmit={handleEditSubmit}>
            <EmpForm name="empId" label="Emp ID" type="text" theValue={editedValues.empId} readOnly="true" />
            <EmpForm name="empName" label="Name" type="text" onChange={(event)=> handleEditValues(event)} theValue={editedValues.empName} />
            <EmpForm name="empEmail" label="Email" type="email" onChange={(event) => handleEditValues(event)} theValue={editedValues.empEmail} />
            <EmpForm name="empAge" label="Age" type="text" onChange={(event) => handleEditValues(event)} theValue={editedValues.empAge} />
            <EmpForm name="empDept" label="Dept" type="text" onChange={(event) => handleEditValues(event)} theValue={editedValues.empDept} />
            <button type="submit">Edit</button> 
        </form>
        </>
    );
}

export default EditUserPage; 