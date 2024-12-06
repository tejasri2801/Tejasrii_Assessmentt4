import { useEffect, useState } from "react";
import EmpList from "../components/EmpList";
import TableComponent from "../components/TableComponent";

function HomePage() {

    const [data, setData] = useState([]);

   useEffect(() => {
       const fetchData = async () => {
           const response = await fetch('https://localhost:7095/api/Employees');

           const resultData = await response.json();

           setData(resultData);

           return resultData;
       }
       fetchData();
   }, [data]);

   return (
       <div className = "list">
           <h2>Home Page</h2>
           <TableComponent data={data}/>
           {/* <EmpList data={data}/> */}
       </div>
   );
}

export default HomePage;