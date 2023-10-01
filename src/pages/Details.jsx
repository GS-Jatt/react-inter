import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineLocationOn } from "react-icons/md";
import { useState } from "react";
import ApplyForm from "../ui/ApplyForm";

const StyledDiv = styled.div`
  border: 1px solid;
  border-radius: 15px;
  padding: 10px 20px;
  margin-bottom: 20px;

  & h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  & button {
    background-color: #4f46e5;
    color: white;
    width: 80px;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    margin: 20px auto;
    display: block;
  }
`;
const Header = styled.div`
  /* display: flex; */
  justify-content: space-between;
  line-height: 25px;
  font-size: 20px;
  & h5{
    margin-top: 10px;
    font-size: 18px;
  }
`;
const Div = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 35px;
`;



export default function Details() {
  const [isApplying, setIsApplying] = useState(false);
  const { id } = useParams();

  const data = useSelector((state) => state.search.data).find(
    (item) => item.id === id
  );
  console.log(isApplying);

  return (
    <StyledDiv>
      <Header>
        <h3>{data.title}</h3>
        <h4>{data.company.display_name}</h4>
        <h5>
          <MdOutlineLocationOn /> {data.location.display_name}
        </h5>
        <Div>
          <p>Type : {data.category.label}</p>
          <p> Salary :Rs {Math.round(data.salary_max)}</p>
        </Div>
      </Header>
      <h2>About the Job</h2>
      <p>{data.description}</p>
      <button onClick={()=>setIsApplying(s=>!s)}>Apply</button>
      {isApplying && <ApplyForm setIsApplying={setIsApplying} title={data.title}/>}
    </StyledDiv>
  );
}
location.display_name;