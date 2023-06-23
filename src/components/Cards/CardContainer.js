import React from "react";
import { Card } from "./Card";

export const CardContainer = ({data,authorInput}) => {
    let filteredBooks = [];
    if (data && data.items) {
        filteredBooks = data.items.filter(item => {
          return item.volumeInfo.authors?.includes(authorInput);
        });
    }
  
      console.log(filteredBooks);
  return (
    <div>
      <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
      </section>
    </div>
  );
};
