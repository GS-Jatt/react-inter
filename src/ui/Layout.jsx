import styled from "styled-components"
import Topbar from "./Topbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StyledLayout = styled.div`
   display :grid ;
   grid-template-columns: 1fr;
   grid-template-rows: auto 1fr;
` ;

const Content = styled.main`
   width:780px ;
   margin: 20px auto;
`

export default function Layout(){
    const navigate = useNavigate();
    const isLogedin = Boolean(localStorage.getItem('user'));
    console.log(isLogedin)
    useEffect(()=>{
        if(!isLogedin) navigate('/login');

    })
    return(
        <StyledLayout>
            <Topbar/>
            <Content>
                <Outlet/>
            </Content>
        </StyledLayout>
    )
}