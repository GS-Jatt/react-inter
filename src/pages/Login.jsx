import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUser } from "../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
`;
const LoginDiv = styled.div`
  width: 600px;
  height: 340px;
  /* border: solid black; */
  border-radius: 8px;
  padding: 30px 50px;
  background-color: white;
  & label {
    font-size: 19px;
    letter-spacing: 3px;
    font-weight: 700;
  }
  & button {
    width: 100%;
    height: 38px;
    border-radius: 8px;
    font-weight: 900;
    letter-spacing: 3px;
    margin-top: 45px;
  }
`;
const Input = styled.input`
  padding: 10px 15px;
  height: 24px;
  width: 94%;
  border-radius: 8px;
  border: 1px solid #696464;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const dispatcher = useDispatch();
  function hanleSubmit(e) {
    e.preventDefault();
    const user = { name: name, password: password };
    dispatcher(setUser(user));
    localStorage.setItem("user", JSON.stringify(user));
    navigate('/')
  }
  return (
    <StyledDiv>
      <LoginDiv>
        <form onSubmit={hanleSubmit}>
          <label>User Name</label>
          <Input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>Password</label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </LoginDiv>
    </StyledDiv>
  );
}
