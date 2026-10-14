import React from 'react';
import Banner from "@/components/homepage/Banner";
import Books from '@/components/homepage/books';

const page = () => {
  return (
    <h1>
      <Banner/>
      <Books/>
    </h1>
  );
};

export default page;