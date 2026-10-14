import React from 'react';
import Image from "next/image";
import { IBook } from '@/types/books.type';
import Link from 'next/link';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

            {/* Image */}
            <div className="flex h-72 items-center justify-center bg-gray-100 p-6">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={180}
                    height={250}
                    className="h-60 w-44 rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Category + Rating */}
                <div className="mb-3 flex items-center justify-between">

                    <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                        {book.category}
                    </span>

                    <span className="font-semibold text-yellow-500">
                        ★ {book.rating}
                    </span>

                </div>

                {/* Book Name */}
                <h3 className="mb-1 text-xl font-bold text-gray-800">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mb-4 text-sm text-gray-500">
                    By {book.author}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mb-5 border-t border-gray-100 pt-4">

                    <div className="flex justify-between text-sm text-gray-500">
                        <span>
                            Pages:{" "}
                            <strong className="text-gray-700">
                                {book.totalPages}
                            </strong>
                        </span>

                        <span>
                            Year:{" "}
                            <strong className="text-gray-700">
                                {book.yearOfPublishing}
                            </strong>
                        </span>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-green-700">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;