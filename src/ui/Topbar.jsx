import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { MdLogout } from "react-icons/md";
import { setUser } from "../features/login/loginSlice";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
    height: 79px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    & span{
        font-size: 25px;
        margin-right: 10px;
    }
`

export default function Topbar(){
    const name = useSelector((state)=>state.user.user.name);
  const dispatcher = useDispatch();

    function handleClick(){
        localStorage.removeItem('user');
        dispatcher(setUser({}));

    }
    return (
      <Navbar>
        <span>Job Finder</span>
        <div>
        <span>{name} </span>
        <Link to={'/login'}>
        <MdLogout size={22} onClick={handleClick}/>
        </Link>
      </div>
      </Navbar>
    );
}