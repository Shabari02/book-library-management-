import { useState, useEffect } from "react";
import axios from "axios";
import LoadingAnimation from "../LoadingAnimation";
import { CardContainer } from "./CardContainer";
import { Card } from "./Card";

export default function Profile({ searchQuery, authorInput, sortBy, sub }) {
  const [title, setTitle] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (searchQuery) {
      fetchBooks(searchQuery, authorInput, sortBy , sub);
    } else {
      fetchRandomBooks(); 
    }
  }, [searchQuery, authorInput, sortBy, sub]);

  const fetchBooks = (query) => {    
    setLoading(true);
    axios
      .get(                          
        `https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:${authorInput}+${sub}&orderBy=${sortBy}&key=AIzaSyDSRAaD3fNordm-ulE_TsvFecpx0nFbo9Q&maxResults=6`
      )
      .then((response) => {
        const responseData = response.data;
        setData(responseData.items);
        // const filteredBooks = responseData.items.filter(item => {
        //   return item.volumeInfo.authors?.includes(authorInput);
        // });
    
        // console.log(filteredBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const fetchRandomBooks = () => {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=anime+&orderBy=${sortBy}&key=AIzaSyDSRAaD3fNordm-ulE_TsvFecpx0nFbo9Q&maxResults=6`
      )
      .then((response) => {
        const responseData = response.data;
        setData(responseData.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  if (isLoading) return <LoadingAnimation />;
  if (!data || data.length === 0) return <p>No profile data</p>;
  
 
  return (
    <div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
        {
        data.map((item) => (
        <>
          <Card
            vol={item.volumeInfo}
            title={item.volumeInfo?.title}
            img={item.volumeInfo.imageLinks?.thumbnail}
            author={item.volumeInfo.authors?.[0]}
            authorInput = {authorInput}
          />
        </>
        ))}
      </section>
      {/* <CardContainer data={data} authorInput={authorInput} /> */}
    </div>
  );
}
