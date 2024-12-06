import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserByid } from '../http/actions.js';
import EmpForm from "../components/EmpForm.jsx";

function DeleteUserPage() {

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

    function handleDeleteSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);

        const empId = fd.get('empId');
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        fetch('https://localhost:7095/api/Employees/' +empId, {
            method : 'DELETE'
        }).then((response) => {
            if(response){
                // alert("Deleted Successfully")
                navigate('/');}
            
        })
    } 
    return (
        <>
        <h1>Delete Employee</h1>
        <form onSubmit={handleDeleteSubmit}>
            <EmpForm name="empId" label="Emp ID" type="text" theValue={editedValues.empId} readOnly="true"/>
            <EmpForm name="empName" label="Name" type="text" onChange={(event)=> handleEditValues(event)} theValue={editedValues.empName} readOnly="true"/>
            <EmpForm name="empEmail" label="Email" type="email" onChange={(event) => handleEditValues(event)} theValue={editedValues.empEmail} readOnly="true"/>
            <EmpForm name="empAge" label="Age" type="text" onChange={(event) => handleEditValues(event)} theValue={editedValues.empAge} readOnly="true"/>
            <EmpForm name="empDept" label="Dept" type="text" onChange={(event) => handleEditValues(event)} theValue={editedValues.empDept} readOnly="true"/>
            <button type="submit">Delete</button>
        </form>
        </>
    );
}

export default DeleteUserPage;
