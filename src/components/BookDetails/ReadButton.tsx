// "use client";
// import { BooksContext } from '@/context/BooksContext';
// import React, { useContext } from 'react';

// const ReadButton = ({book} : {book: IBook}) => {

//     const {readBooks, setReadBooks} = useContext(BooksContext);

//     const booksProvider = useContext(BooksContext);

//     console.log(booksProvider);

//     const handleReadBook = () => {
//         console.log("Read book btn triggered", book);
//         setReadBooks([...readBooks, book]);
//         alert(`You have read "${book.bookName}"`);
//     }

//     return (
//         <button className="btn btn-outline px-8 border-gray-300 font-semibold hover:bg-base-200 hover:text-base-content hover:border-gray-50" onClick={() => handleReadBook()}>
//             Read
//         </button>
//     );
// };

// export default ReadButton;




/* From ChatGpt */
"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBook = () => {
        const alreadyAdded = readBooks.some(
            (readBook) => readBook.bookId === book.bookId
        );

        if (alreadyAdded) {
            alert("This book is already in your Listed Books!");
            return;
        }

        setReadBooks((previousBooks) => [...previousBooks, book]);

        toast.success(`You have added "${book.bookName}" to Listed Books!`);
    };

    return (
        <button
            className="btn btn-outline px-8 border-gray-300 font-semibold hover:bg-base-200 hover:text-base-content hover:border-gray-50"
            onClick={handleReadBook}
        >
            Read
        </button>
    );
};

export default ReadButton;