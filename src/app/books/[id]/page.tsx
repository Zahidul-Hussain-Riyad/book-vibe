// (****) From Programming Hero
// import React from 'react';
// import Image from 'next/image';

// interface IBookDetailPageProps {
//     params: {
//         id: string;
//     };
// }

// const getBooks = async () => {
//     const response = await fetch("http://localhost:3000/booksData.json");

//     const data = await response.json();

//     return data;
// };

// const BookDetailPage = async ({ params }: IBookDetailPageProps) => {

//     const { id } = await params;
//     const bookData = await getBooks();
//     const book = booksData.find((book: IBook) => String(book.bookId) === String(id)) as IBook;
//     console.log(id, "id");

//     return (
//         <div className='container mx-auto'>
//             <div className="card lg:card-side bg-base-100 shadow-sm">
//                 <figure>
//                     <Image
//                         src={book.image}
//                         alt={book.bookName} 
//                         width={500}
//                         height={300}
//                     />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{book.bookName}</h2>
//                     <p>{book.category}</p>
//                     <div className="card-actions justify-end">
//                         <button className="btn btn-primary">Listen</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookDetailPage;




// ***** From ChatGpt ******
// import Image from "next/image";
// import Link from "next/link";
// import { IBook } from "@/types/books.type";

// interface IBookDetailPageProps {
//     params: Promise<{
//         id: string;
//     }>;
// }

// const getBooks = async (): Promise<IBook[]> => {

//     const response = await fetch("http://localhost:3000/booksData.json");
//     if (!response.ok) {
//         throw new Error("Failed to fetch books");
//     }
//     const data: IBook[] = await response.json();
//     return data;
// };

// const BookDetailPage = async ({ params }: IBookDetailPageProps) => {

//     const { id } = await params;
//     const booksData = await getBooks();

//     const book = booksData.find(
//         (book) => String(book.bookId) === id
//     );

//     if (!book) {
//         return (
//             <div className="container mx-auto px-4 py-20 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800">
//                     Book Not Found
//                 </h2>

//                 <p className="mt-3 text-gray-500">
//                     Sorry, we could not find the book you are looking for.
//                 </p>

//                 <Link
//                     href="/"
//                     className="btn mt-6 rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700"
//                 >
//                     Back to Home
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto px-4 py-10">
//             <div className="card lg:card-side overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
//                 {/* Book Image */}
//                 <figure className="relative flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 p-8 sm:p-12 lg:w-2/5">
//                     <Image
//                         src={book.image}
//                         alt={book.bookName}
//                         width={500}
//                         height={650}
//                         className="h-auto max-h-[450px] w-full max-w-[300px] rounded-xl object-contain shadow-xl transition-transform duration-300 hover:scale-105"
//                         priority
//                     />
//                 </figure>

//                 {/* Book Details */}
//                 <div className="card-body gap-5 p-6 sm:p-8 lg:p-10">
//                     <div className="flex flex-wrap items-center gap-2">
//                         <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
//                             {book.category}
//                         </span>

//                         <span className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
//                             ★ {book.rating}/5
//                         </span>
//                     </div>

//                     <div>
//                         <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
//                             {book.bookName}
//                         </h1>

//                         <p className="mt-3 text-base text-gray-500">
//                             Written by{" "}
//                             <span className="font-semibold text-emerald-700">
//                                 {book.author}
//                             </span>
//                         </p>
//                     </div>

//                     <div className="h-px bg-gray-100" />

//                     {/* Book Information */}
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="rounded-2xl bg-gray-50 p-4 transition-colors hover:bg-emerald-50">
//                             <p className="text-sm text-gray-500">
//                                 Total Pages
//                             </p>
//                             <p className="mt-1 text-xl font-bold text-gray-900">
//                                 {book.totalPages}
//                             </p>
//                         </div>

//                         <div className="rounded-2xl bg-gray-50 p-4 transition-colors hover:bg-emerald-50">
//                             <p className="text-sm text-gray-500">
//                                 Published Year
//                             </p>
//                             <p className="mt-1 text-xl font-bold text-gray-900">
//                                 {book.yearOfPublishing}
//                             </p>
//                         </div>

//                         <div className="rounded-2xl bg-gray-50 p-4">
//                             <p className="text-sm text-gray-500">
//                                 Publisher
//                             </p>
//                             <p className="mt-1 font-semibold text-gray-800">
//                                 {book.publisher}
//                             </p>
//                         </div>

//                         <div className="rounded-2xl bg-gray-50 p-4">
//                             <p className="text-sm text-gray-500">
//                                 Book ID
//                             </p>
//                             <p className="mt-1 font-semibold text-gray-800">
//                                 #{book.bookId}
//                             </p>
//                         </div>
//                     </div>

//                     {/* Tags */}
//                     <div>
//                         <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-700">
//                             Book Tags
//                         </h3>

//                         <div className="flex flex-wrap gap-2">
//                             {book.tags.map((tag) => (
//                                 <span
//                                     key={tag}
//                                     className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm text-emerald-700 transition-colors hover:bg-emerald-100"
//                                 >
//                                     #{tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Review */}
//                     <div>
//                         <h3 className="mb-2 text-lg font-bold text-gray-900">
//                             About This Book
//                         </h3>

//                         <p className="text-sm leading-7 text-gray-600 sm:text-base">
//                             {book.review}
//                         </p>
//                     </div>

//                     {/* Actions */}
//                     <div className="card-actions mt-2 flex-wrap justify-start gap-3">
//                         <button
//                             type="button"
//                             className="btn rounded-full border-0 bg-emerald-600 px-7 text-white shadow-md shadow-emerald-100 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
//                         >
//                             Listen Now
//                         </button>

//                         <Link
//                             href="/"
//                             className="btn rounded-full border border-gray-200 bg-white px-7 text-gray-700 transition-colors hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
//                         >
//                             Back to Books
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookDetailPage;




// *** From Gemini ****
import React from 'react';
import Image from 'next/image';
import ReadButton from '@/components/BookDetails/ReadButton';

interface IBookDetailPageProps {
    params: {
        id: string;
    };
}

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");
    const data = await response.json();
    return data;
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
    const { id } = await params;
    const booksData = await getBooks(); // এখানে আপনার ভেরিয়েবল নেম 'booksData' করা হয়েছে 
    const book = booksData.find((b: any) => String(b.bookId) === String(id));
    console.log(id, "id");

    return (
        <div className='container mx-auto px-4 py-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl gap-10 items-center">
                {/* Left Side: Book Image Container */}
                <figure className="bg-base-200 p-12 rounded-2xl flex justify-center items-center w-full lg:w-1/2">
                    <Image
                        src={book?.image || "/placeholder.jpg"}
                        alt={book?.bookName || "Book Image"} 
                        width={400}
                        height={550}
                        className="rounded-lg object-cover shadow-md"
                    />
                </figure>

                {/* Right Side: Book Details */}
                <div className="card-body px-0 lg:px-4 w-full lg:w-1/2 space-y-4">
                    <div>
                        <h1 className="text-4xl font-bold text-base-content mb-2">{book?.bookName}</h1>
                        <p className="text-lg text-gray-500 font-medium">By : {book?.author || "Awlad Hossain"}</p>
                    </div>

                    <div className="divider my-1"></div>

                    <p className="text-xl font-medium text-base-content">{book?.category}</p>

                    <div className="divider my-1"></div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-bold text-base-content">Review : </span> 
                        {book?.review || "Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare."}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-3 py-2">
                        <span className="font-bold text-sm text-base-content">Tag</span>
                        <span className="badge badge-success badge-soft px-3 py-3 text-success font-semibold bg-emerald-50">
                            #{book?.tag1 || "Young Adult"}
                        </span>
                        <span className="badge badge-success badge-soft px-3 py-3 text-success font-semibold bg-emerald-50">
                            #{book?.tag2 || "Identity"}
                        </span>
                    </div>

                    {/* Meta Information Grid */}
                    <div className="grid grid-cols-2 gap-y-3 text-sm py-2 text-gray-600 max-w-md">
                        <p>Number of Pages:</p>
                        <p className="font-bold text-base-content">{book?.totalPages || "281"}</p>

                        <p>Publisher:</p>
                        <p className="font-bold text-base-content">{book?.publisher || "J.B Lippincott & Co."}</p>

                        <p>Year of Publishing:</p>
                        <p className="font-bold text-base-content">{book?.yearOfPublishing || "1960"}</p>

                        <p>Rating:</p>
                        <p className="font-bold text-base-content">{book?.rating || "4.8"}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions justify-start gap-4 pt-4">
                        <ReadButton book={book}/>
                        <button className="btn bg-[#59c6d2] hover:bg-[#4ab3be] text-white px-8 font-semibold border-none">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;