import { FaCaretDown, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { logo } from "../assets";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  const profileHandler = () => {
  
    navigate('/profile');
  };

  return (
    // <header className="bg-gradient-to-r from-indigo-500 text-gray-800">
    <header className="bg-image bg-cover bg-center text-gray-800  " style={{backgroundImage: "url('/src/assets/earth.jpg')"}}>


      
      <nav className="container mx-auto flex items-center justify-between " style={{height:"15rem"}}>
        <Link to='/home' className="text-2xl font-bold">
        
        </Link>
        <div className="flex  items-center space-x-4">
          {userInfo ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={profileHandler}
                className="text-lg font-semibold flex items-center focus:outline-none"
              >
                {userInfo.name}
              </button>
              <button
                onClick={logoutHandler}
                className="text-lg font-semibold flex items-center focus:outline-none text-gray-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4 ">
              <Link to='/login' className="text-lg flex items-center text-gray-800">
                Sign In
              </Link>
              <Link to='/register' className="text-lg flex items-center text-gray-800">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
