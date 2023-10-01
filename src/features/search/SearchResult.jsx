import { useEffect, useRef, useState } from "react";
import getData from "../../service/fetchApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SearchItem from "./SeacrchItem";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "./searchSlice";

const List =styled.ul`
    
    list-style: none;
`;
const NotFound = styled.h2`
  text-align: center;
  margin-top: 50px;
`

export default function SearchResults() {
  const { search } = useParams();
  const dispatcher = useDispatch()
  const data = useSelector((state)=>state.search.data);
  const isLoading = useRef(true);
  useEffect(() => {
    async function get() {
      isLoading.current= true;
      const data = await getData(search);
      dispatcher(setdata(data));
      isLoading.current= false
    }
    get();
  }, [search]);

  console.log(data)
  if(data?.length === 0 && !isLoading.current) return <NotFound>No Results founded for {search} language</NotFound>

  return (
    <List>
        { 
            data?.map((item)=><SearchItem item={item} key={item.id}/>)
        }
    </List>
  );
}
