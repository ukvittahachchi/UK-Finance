import { Outlet } from 'react-router';
import './App.css';
import Navebar from './Components/Navbar/Navbar';


function App() {

  return (
    <>
    <Navebar isLoggedIn={false} logout={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    <Outlet/>
    </>
  );
}

export default App;
