import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom";

const Input = styled.input`
  width: 500px;
  height: 35px;
  border-radius: 20px;
  margin: 20px 0px;
  padding: 0px 17px;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 17%;
    top: 28px;
  }
`;

export default function SearchBar() {
    const nvvigate = useNavigate();
    const [search ,setSearch] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        nvvigate(search);
        
        
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="React js" value={search} onChange={(e)=> setSearch(e.target.value)} />
      <button type="submit">
        <AiOutlineSearch size={23} />
      </button>
    </Form>
  );
}
