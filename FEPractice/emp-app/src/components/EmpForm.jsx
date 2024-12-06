const EmpForm = ({name, label, type, onChange, theValue, readOnly, required})=>{
    return(
        <>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} onChange={onChange} value={theValue} readonly={readOnly} required={required}/>
        
        </>
    );
}
export default EmpForm;

