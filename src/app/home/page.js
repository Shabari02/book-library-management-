"use client";

import Filter from "../../components/Filters/Filter";
import Navbar from "../../components/Navbar/Navbar";
import CardC from "../../components/Cards/fetchapi";
import { CardContainer } from "../../components/Cards/CardContainer";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { withAuth } from "../auth/auth";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <Navbar />
      <Filter onSearch={handleSearch} />
      <Footer />
      {/* <CardContainer /> */}
    </div>
  );
};

export default withAuth(Home);
