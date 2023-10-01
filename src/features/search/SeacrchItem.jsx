import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
    height: 110px;
  border: 1px solid;
  border-radius: 15px;
  padding: 10px 20px;
  margin-bottom: 20px;
  position: relative;
`;
const Header = styled.div`
  /* display: flex; */
  justify-content: space-between;
  line-height: 25px;
  font-size: 20px;
`;
const Main = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 35px;
`;
const Button = styled.button`
  text-align: right;
  float: right;
  border-radius: 15px;
  padding: 5px;
`;

export default function SearchItem({ item }) {
    const navigate = useNavigate()
  return (
    <Item>
      <Header>
        <h4>{item.title}</h4>
        <h5>{item.company.display_name}</h5>
      </Header>
      <Main>
        <p>Type : {item.category.label}</p>
        <p> Salary :Rs {Math.round(item.salary_max)}</p>
      </Main>

      <Button onClick={()=>navigate(`/details/${item.id}`) }>  View Details</Button>
    </Item>
  );
}
