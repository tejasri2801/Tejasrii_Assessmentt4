import {useNavigate} from 'react-router-dom';
const DeleteWindow = (handleDeleteSubmit)=>{
   const navigate = useNavigate();
   return (
       <div>
           <h2>Are you sure to Delete this?</h2>
           <button onClick={handleDeleteSubmit}>Delete</button>
           <button onClick = {()=> navigate('/')}>Cancel</button>
       </div>
   )
}

export default DeleteWindow;