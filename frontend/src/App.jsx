import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import styles from "./style";
import  Hero  from "./components/Hero";
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './components/SideBar';
const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Header /> */}
      {userInfo && (
      <Sidebar/>)}
    
      <ToastContainer />

      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default App;
