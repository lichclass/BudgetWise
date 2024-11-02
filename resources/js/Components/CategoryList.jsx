import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

function CategoryList({ isExpense, categories, searchTerm }) {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    // Filter categories based on search term and expense type
    const filteredCategories = categories
        .filter(category => category.isExpense === isExpense)
        .filter(category =>
            searchTerm ?
                category.category.toLowerCase().includes(searchTerm.toLowerCase())
                : true
        );

    return (
        <>
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className="flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <hr className="w-1/6 border-t-1 border-gray-300 my-4 border-opacity-30" />
                    <h1 className="text-xl">
                        {isExpense ? "Expense" : "Income"}
                    </h1>
                    <hr className="w-full border-t-1 border-gray-300 my-4 border-opacity-30" />
                    <button className="text-white text-opacity-70 bg-transparent text-xs flex items-center justify-center rounded-lg shadow-sm border border-white border-opacity-30 px-5 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1 whitespace-nowrap">
                        <FaPlus className="text-xs" />
                        <p className={`font-thin`}>Add Category</p>
                    </button>
                </div>

                <div className="flex items-center gap-5 w-[1100px] h-[285px]">
                    <button onClick={scrollLeft}>
                        <IoIosArrowBack className="text-4xl text-white opacity-55 hover:opacity-65 hover:scale-110 active:opacity-100 transition-transform duration-300 ease-in-out" />
                    </button>

                    <div
                        ref={carouselRef}
                        className="flex inset-0 gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar flex-1 items-center"
                    >
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category, index) => (
                                <div key={index} className="snap-center">
                                    <CategoryCard
                                        category={category.category}
                                        amount={category.amount}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="w-full flex items-center justify-center text-white text-opacity-50">
                                <p>No categories found</p>
                            </div>
                        )}
                    </div>

                    <button onClick={scrollRight}>
                        <IoIosArrowForward className="flex text-4xl text-white opacity-55 hover:opacity-65 hover:scale-110 active:opacity-100 transition-transform duration-300 ease-in-out" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default CategoryList;