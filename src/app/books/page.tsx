// import Books from "@/components/homepage/books";

// const BooksPage = () => {
//     return (
//         <main>
//             <Books />
//         </main>
//     );
// };

// export default BooksPage;



// import Image from "next/image";
// import BookCard from "../shared/BookCard";
// import { IBook } from "@/types/books.type";

// const getBooks = async () => {
//     const response = await fetch("http://localhost:3000/booksData.json");

//     const data = await response.json();

//     return data;
// };

// const Books = async () => {
//     const booksData = await getBooks();

//     return (
//         <section className="container mx-auto my-[70px] px-4">

//             {/* Heading */}
//             <div className="mb-10 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800">
//                     Explore All Books
//                 </h2>

//                 <p className="mt-3 text-gray-500">
//                     Discover your next favorite book
//                 </p>
//             </div>

//             {/* Books Grid */}
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

//                 {booksData.map((book: IBook, ind:number) => (
//                   <BookCard key={ind} book={book}/>
//                 ))}

//             </div>
//         </section>
//     );
// };

// export default Books;





import WishListButton from "@/components/BookDetails/WishListButton";
import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async (): Promise<IBook[]> => {
    const response = await fetch("http://localhost:3000/booksData.json");

    if (!response.ok) {
        throw new Error("Failed to fetch books data");
    }

    const data: IBook[] = await response.json();

    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-[70px] px-4">
            {/* Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold text-gray-800">
                    Explore All Books
                </h2>

                <p className="mt-3 text-gray-500">
                    Discover your next favorite book
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {booksData.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

            <WishListButton book={book}/>

        </section>
    );
};

export default Books;
