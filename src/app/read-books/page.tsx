// "use client"
// import React, { useContext } from 'react';
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     BarShapeProps,
//     LabelList,
//     Label,
//     LabelProps,
//     Tooltip,
// } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

// const getPath = (x: number, y: number, width: number, height: number) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props: BarShapeProps) => {
//     const { x, y, width, height, index } = props;

//     const color = colors[index % colors.length];

//     return (
//         <path
//             strokeWidth={props.isActive ? 5 : 0}
//             d={getPath(Number(x), Number(y), Number(width), Number(height))}
//             stroke={color}
//             fill={color}
//             style={{
//                 transition: 'stroke-width 0.3s ease-out',
//             }}
//         />
//     );
// };

// const CustomColorLabel = (props: LabelProps) => {
//     const fill = colors[(props.index ?? 0) % colors.length];
//     return <Label {...props} fill={fill} />;
// };

// const ReadBooks = () => {

//     const { readBooks } = useContext(BooksContext);

//     const data = readBooks.map(
//         (book:IBook, index:number) => {
//             return {
//                 name: book.title,
//                 uv: index + 1,
//                 pv: index + 1,
//                 amt: index + 1
//             }
//         }
//     );

//     return (
//         <div className='container mx-auto my-5'>
//             {readBooks.length > 0 ? <BarChart
//                 style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
//                 responsive
//                 data={data}
//                 margin={{
//                     top: 20,
//                     right: 0,
//                     left: 0,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid />
//                 <Tooltip cursor={{ fillOpacity: 0.5 }} />
//                 <XAxis dataKey="name" />
//                 <YAxis width="auto" />
//                 <Bar dataKey="uv" shape={TriangleBar} activeBar>
//                     <LabelList content={CustomColorLabel} position="top" />
//                 </Bar>
//                 {/* <RechartsDevtools /> */}
//             </BarChart>}
//         </div>
//     );
// };

// export default ReadBooks;




"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
} from "recharts";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
];

const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
) => {
    return `M${x},${y + height}
        C${x + width / 3},${y + height}
        ${x + width / 2},${y + height / 3}
        ${x + width / 2},${y}
        C${x + width / 2},${y + height / 3}
        ${x + (2 * width) / 3},${y + height}
        ${x + width},${y + height}
        Z`;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[(index ?? 0) % colors.length];

    return (
        <path
            d={getPath(
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            )}
            stroke={color}
            fill={color}
            strokeWidth={props.isActive ? 2 : 0}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];

    return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
    const { readBooks } = useContext(BooksContext);

    const data = readBooks.map((book: IBook) => ({
        name: book.bookName,
        pages: Number(book.totalPages),
    }));

    return (
        <div className="container mx-auto my-8 px-4">
            <h1 className="text-2xl font-bold mb-6">
                Read Books Chart
            </h1>

            {readBooks.length === 0 ? (
                <p className="text-center py-10 text-gray-500">
                    No books added yet. Please click the Read
                    button on a book first.
                </p>
            ) : (
                <div className="w-full overflow-x-auto">
                    <BarChart
                        style={{
                            width: "100%",
                            maxWidth: "900px",
                            maxHeight: "70vh",
                            aspectRatio: 1.618,
                        }}
                        responsive
                        data={data}
                        margin={{
                            top: 30,
                            right: 20,
                            left: 10,
                            bottom: 50,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <Tooltip />

                        <XAxis
                            dataKey="name"
                            interval={0}
                            angle={-25}
                            textAnchor="end"
                            height={80}
                        />

                        <YAxis
                            label={{
                                value: "Total Pages",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />

                        <Bar
                            dataKey="pages"
                            shape={TriangleBar}
                            activeBar
                        >
                            <LabelList
                                dataKey="pages"
                                content={CustomColorLabel}
                                position="top"
                            />
                        </Bar>
                    </BarChart>
                </div>
            )}
        </div>
    );
};

export default ReadBooks;