import { useState, useEffect } from "react";
import axios from "axios";
import LoadingAnimation from "../LoadingAnimation";
import { CardContainer } from "./CardContainer";
import { Card } from "./Card";
import Error from "../Error/Error";

export default function Profile({ searchQuery, authorInput, sortBy, sub }) {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState();
  const [isLoading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    if (searchQuery) {
      fetchBooks(searchQuery, authorInput, sortBy, sub);
      setUserInput(searchQuery);
    } else {
      fetchRandomBooks();
    }
  }, [searchQuery, authorInput, sortBy, sub]);

  const fetchBooks = (query) => {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:${authorInput}+${sub}&orderBy=${sortBy}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}&maxResults=6`
      )
      .then((response) => {
        const responseData = response.data;
        setData(responseData.items);
        setDataLength(responseData.totalItems);
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
        `https://www.googleapis.com/books/v1/volumes?q=anime+inauthor:${authorInput}+${sub}&orderBy=${sortBy}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}&startIndex=${startIndex}&maxResults=6`
      )
      .then((response) => {
        const responseData = response.data;
        setData(responseData.items);
        setStartIndex(startIndex + 6);
        setDataLength(responseData.totalItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}+inauthor:${authorInput}+${sub}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=6&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
      );
      const data = await response.json();
      setData((prevBooks) => [...prevBooks, ...data.items]);
      setStartIndex(startIndex + 6);
      setDataLength(data.totalItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <LoadingAnimation />;
  if (!data || data.length === 0) return <Error />;

  return (
    <div className="">
      <h2 className="sm:text-4xl  text-2xl text-center font-extrabold mt-4">
        Total number of items: {dataLength}
      </h2>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data?.map((item) => (
          <>
            <Card
              vol={item.volumeInfo}
              title={item.volumeInfo?.title}
              img={item.volumeInfo.imageLinks?.thumbnail}
              author={item.volumeInfo.authors?.[0]}
              authorInput={authorInput}
              available={item.saleInfo}
            />
          </>
        ))}
      </section>
      <div className="flex items-center justify-center">
        <button
          onClick={handleClick}
          type="button"
          className="text-gray-900   bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mr-2 mb-2"
        >
          Load More
        </button>
      </div>
      {/* <CardContainer data={data} authorInput={authorInput} /> */}
    </div>
  );
}
