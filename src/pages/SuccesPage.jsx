import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    & h3{
        margin: 20px;
    }
    & p{
        margin-bottom: 10px;
}
& h4{
    margin-bottom: 10px;
}
`;

export default function SuccesPage() {
  const data = useSelector((state) => state.user.apply);
  return (
    <Div>
    <h4><Link to={'/'}>Back to Search</Link> </h4>
      <h1>You have successfully applied for {data.title}</h1>
      <h3>Your application</h3>
      <p>Name : {data.name}</p>
      <p>Email : {data.email}</p>
      <p>Cover Letter : {data.coverNote}</p>
    </Div>
  );
}
