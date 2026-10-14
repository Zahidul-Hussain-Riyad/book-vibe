// "use client";
// import { BooksContext } from '@/context/BooksContext';
// import React, { useContext } from 'react';

// const ListedBooks = () => {

//     const {readBooks} = useContext(BooksContext);

//     return (
//         <div className='container mx-auto py-[20px]'>
//             Listed Books
//         </div>
//     );
// };

// export default ListedBooks;



/* From ChatGpt */
"use client";

import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import Image from "next/image";
import { read } from "fs";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
    console.log(readBooks, wishlist, "readBooks");

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                Listed Books ({readBooks.length})
            </h1>

            {readBooks.length === 0 ? (
                <p className="text-gray-500">
                    No books added yet. Click the Read button to add a book.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {readBooks.map((book) => (
                        <div
                            key={book.bookId}
                            className="card card-side bg-base-100 shadow-md border border-gray-200 p-4"
                        >
                            <figure className="w-28 shrink-0">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    width={120}
                                    height={160}
                                    className="rounded-lg object-cover"
                                />
                            </figure>

                            <div className="card-body p-4">
                                <h2 className="card-title">
                                    {book.bookName}
                                </h2>

                                <p>Author: {book.author}</p>
                                <p>Category: {book.category}</p>
                                <p>Rating: {book.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListedBooks;