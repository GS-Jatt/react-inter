import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Outlet, useParams } from "react-router-dom";

const HeroText = styled.div`
  text-align: center;
  margin-top: 30px;
  & h2{

      font-weight: 900;
      margin-bottom: 10px;
  }
`;

export default function Search() {
    const { search } = useParams();
    console.log(search)

  return (
    <>
    {!search &&   <HeroText>
        <h2>Find you dream job now</h2>
        <p>Pleace enter language in which you want to find a job</p>
      </HeroText>
    }
      <SearchBar/>
      <Outlet/>
    </>
  );
}
