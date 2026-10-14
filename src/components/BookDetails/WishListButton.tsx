"use client";
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {

    const { wishlist, setWishList } = useContext(BooksContext);

    const booksProvider = useContext(BooksContext);

    console.log(booksProvider);

    const handleAddToWishList = () => {
        console.log("Read book btn triggered", book);
        setWishList([...readBooks, book]);
        toast.success(`You have read "${book.bookName}"`);
    }

    return (
        <button
            className="btn btn-outline px-8 border-gray-300 font-semibold hover:bg-base-200 hover:text-base-content hover:border-gray-50"
            onClick={() => handleAddToWishList()}>
            Add to WishList
        </button>
    );
};

export default WishListButton;