import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import styles from "./style";
import  Hero  from "./components/Hero";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      
      <ToastContainer />

      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default App;
