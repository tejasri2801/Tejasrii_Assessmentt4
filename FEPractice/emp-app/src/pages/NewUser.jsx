import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./Error";
import EmpForm from "../components/EmpForm";

let content;

function NewUserPage() {

    const [values, setValues] = useState({
        EmpId : '',
        EmpName : '',
        EmpEmail : '',
        EmpAge : '',
        EmpDept : ''
    });
    // const emailIsInvalid = values.email!=='' && !values.email.Includes('@');
    const navigate = useNavigate();

    function handleValues(event) {
        setValues({...values, [event.target.name] : event.target.value})
    }
    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);

        const user = {
            empname : fd.get('empname'),
            empemail : fd.get('empemail'),
            empage : fd.get('empage'),
            empdept : fd.get('empdept')
        };
        // event.target.reset();
        fetch('https://localhost:7095/api/Employees', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        }).then((response) => {
            if(!response.ok) {
                content = <ErrorPage title="An error occured" message="Unable to send data"/>
            }

            navigate('/');
        });
    }

 return (
    <>
    <h1>New Employee</h1>
    <form onSubmit={handleSubmit}>
        <EmpForm name="empname" label="Employee Name" type="text" onChange={(e) => handleValues(e)} theValue={values.empname} required="true"/>
        <EmpForm name="empemail" label="Email" type="email" onChange={(e) => handleValues(e)} theValue={values.empemail} required="true"/>
        <EmpForm name="empage" label="Age" type="text" onChange={(e) => handleValues(e)} theValue={values.empage} required="true"/>
        <EmpForm name="empdept" label="Department" type="text" onChange={(e) => handleValues(e)} theValue={values.empdept} required="true"/>
        <button type="submit">Add Employee</button>
    </form> 
    {content}
    </>
 );
}

export default NewUserPage; 
