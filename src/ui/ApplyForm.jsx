import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setApply, setUser } from "../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginDiv = styled.div`
  position: absolute;
  top: 18%;
  width: 600px;
  /* height: 340px; */
  /* border: solid black; */
  border-radius: 8px;
  padding: 30px 50px;
  background-color: #f9fafb;
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
  & span{
    cursor: pointer;
    position: absolute;
    right: 3%;
    top: 5%;
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

export default function ApplyForm({ setIsApplying ,title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cover, setCover] = useState("");

  const navigate = useNavigate();
  const dispatcher = useDispatch();

  function hanleSubmit(e) {
    e.preventDefault();
    const user = { name: name, email: email,coverNote:cover, title:title };
    dispatcher(setApply(user));
    navigate("/succes");
  }
  return (
    <LoginDiv>
      <span onClick={() => setIsApplying((s) => !s)}>X</span>
      <form onSubmit={hanleSubmit}>
        <label>Name</label>
        <Input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Cover Letter</label>
        <Input
          type="text"
          required
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />

        <button type="submit">Apply</button>
      </form>
    </LoginDiv>
  );
}
