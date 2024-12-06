import { Link } from "react-router-dom";


const EmpList = ({data})=>{
   return (
       <div className="table">
           <h3>Emp List</h3>
           <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
               <thead>
                   <tr className="table">
                       <th>ID</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Age</th>
                       <th>Department</th>
                   </tr>
               </thead>
               <tbody>
                   {data.map(user=>{
                       return (
                           <tr key={user.empId}>
                               <td>{user.empId}</td>
                               <td>{user.empName}</td>
                               <td>{user.empEmail}</td>
                               <td>{user.empAge}</td>
                               <td>{user.empDept}</td>
                               <td>
                                 <Link to={`/edit/${ user.empId}`}>Edit</Link>
                                 <br></br>
                                 <Link to={`/delete/${ user.empId}`}>Delete</Link>
                               </td>
                           </tr>
                       )
                   })}
               </tbody>
           </table>
       </div>
   )
}

export default EmpList;