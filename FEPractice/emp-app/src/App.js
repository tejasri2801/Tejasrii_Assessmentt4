import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import NewUserPage from './pages/NewUser';
import EditUserPage from './pages/EditUser';
import DeleteUserPage from './pages/DeleteUser';
import DetailsPage from './pages/Details';

const router = createBrowserRouter([
  {path : '/', element : <RootLayout/>, children : [
    {path : '/', element : <HomePage/>},
    {path : '/details', element : <DetailsPage/>},
    {path : '/add', element : <NewUserPage/>},
    {path : '/edit/:id', element: <EditUserPage/>},
    {path : '/delete/:id', element : <DeleteUserPage/> },
  ]},
]) 

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
