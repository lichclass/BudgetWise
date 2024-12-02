import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AddCategoryBtn from "./AddCategoryBtn";

function CategoryList({ type, categories, searchTerm, selectedLedger }) {
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
        .filter((category) => category.category_type === type)
        .filter((category) => category.ledger_id === selectedLedger.ledger_id)

        .filter((category) =>
            searchTerm
                ? category.category_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                : true
        );

    return (
        <>

            <div className="flex flex-col w-full">

                {/* Header */}
                <div className="flex items-center gap-2">
                    <hr className="w-1/6 border-t-1 border-gray-300 my-4 border-opacity-30" />
                    <h1 className="text-xl">
                        {type === "expense" ? "Expense" : "Income"}
                    </h1>
                    <hr className="w-full border-t-1 border-gray-300 my-4 border-opacity-30" />
                    {/* Add Category Button */}
                    <AddCategoryBtn type={type} locked={true} />
                </div>

                {/* Body */}
                <div className="flex items-center gap-5 h-[285px]">
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
                                        category={category}
                                        amount={100}
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
