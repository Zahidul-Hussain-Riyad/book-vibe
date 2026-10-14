// "use client"
// import React, { createContext, useState, ReactNode } from 'react';

// export const BooksContext = createContext(null);

// const BooksProvider = ({children} : {children: ReactNode}) => {

//     const [readBooks, setReadBooks] = useState([]);
//     const [wishlist, setWishlist] = useState([]);

//     const sharedData = {
//         readBooks,
//         setReadBooks,
//         wishlist,
//         setWishlist,
//     }

//     return (
//         <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
//     );
// };

// export default BooksProvider;



/* From ChatGpt */
"use client";

import { IBook } from "@/types/books.type";
import { createContext, useState, ReactNode } from "react";

interface IBooksContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setReadBooks: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);

    return (
        <BooksContext.Provider value={{ readBooks, setReadBooks }}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;