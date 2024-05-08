import React, { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
// All the svg files
import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/starred.svg";
import Documents from "../assets/draft.svg";
import PowerOff from "../assets/power-off-solid.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';
import Header from "./Header";

const Container = styled.div`
  position: fixed;
  background-color: black;
`;

const Button = styled.button`
 
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: black;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")}; /* Changed width */
  height: 98.5vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  transition: width 0.5s ease; /* Added transition */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: 100%; /* Changed width */
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid white;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: 14rem;
  height: 3rem;

  padding: 0.5rem 1rem;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
    const { userInfo } = useSelector((state) => state.auth);
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const { pathname } = useLocation(); 
  const isHome = pathname === '/home';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileHandler = () => {
  
    navigate('/profile');
  };

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  let firstName = userInfo && userInfo.name ? userInfo.name.split(" ")[0] : undefined;

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
  return (
    <div style={{ display: 'flex' }}>
        
    <Container  >
      {/* <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button> */}
     
      <SidebarContainer clicked={click}> {/* Added clicked prop */}
    
      <Link to='/home' className="text-2xl font-bold">
          <img src={logo} alt="hoobank" className="w-[50px] h-[50px] rounded" />
        </Link>
        
        <SlickBar>
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-4 w-7 border-dark-purple
           border-2 rounded-full  ${!click && "rotate-180"}`}
          onClick={() => handleClick()}
        />
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/home"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/team"
          >
            <img src={Team} alt="Team" />
            <Text clicked={click}>Export Docs</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/calender"
          >
            <img src={Calender} alt="Calender" />
            <Text clicked={click}>Invoices</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/documents"
          >
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>Purchase Orders</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Contacts</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Products</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Snipets</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects"
          >
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Integrations</Text>
          </Item>
          
          
        </SlickBar>
        {userInfo ? (
        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
            {firstName}
            
              <a href  onClick={profileHandler}>view&nbsp;profile</a>
            </Name>

            <Logout onClick={logoutHandler}>
              <img src={PowerOff} alt="logout" />
            </Logout>
          </Details>
        </Profile>):(
            <div className="flex space-x-4 ">
           
            </div>
          )}
      </SidebarContainer>
    </Container>
    {isHome && (
    <div style={{ flex: 1 }}>
    <Header />
  </div>)}
    </div>
  );
};

export default Sidebar;
