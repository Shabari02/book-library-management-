
import Filter from '../Filters/Filter';
import Navbar from '../Navbar/Navbar'
import CardC from '../Cards/fetchapi'
import { CardContainer } from '../Cards/CardContainer';
import { useState } from 'react';

export default function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
      setSearchQuery(query);
    };
    return (
        <div>
            <Navbar />
            <Filter onSearch={handleSearch}/>
            
            {/* <CardContainer /> */}
        </div>
    )
}