import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params:{
        term: string
    };
};

function SearchPage({params: {term}} : Props) {
    if(!term) notFound(); 
    
    const termTouse = decodeURI(term);
    // console.log(props);
  return (
    
    <div>SearchPage {termTouse}</div>
  )
}

export default SearchPage