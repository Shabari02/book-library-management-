
import Filter from '../Filters/Filter';
import Navbar from '../Navbar/Navbar'
import CardC from '../Cards/fetchapi'
import { CardContainer } from '../Cards/CardContainer';
import { useState } from 'react';
import { Footer } from '../Footer/Footer';

export default function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
      setSearchQuery(query);
    };
    return (
        <div>
            <Navbar />
            <Filter onSearch={handleSearch}/>
            <Footer />
            {/* <CardContainer /> */}
        </div>
    )
}