function LegendBtn(){

    return(
        <div className="border border-gray-600 shadow-xl h-48 w-full rounded-lg hover:transform space-y-2
                    hover:scale-105 transition-transform duration-300 flex flex-col items-start" >
                
                <div
                className="border-b border-gray-600 text-white h-10 w-full rounded-t-lg text-black text-1xl font-extrabold py-2 px-4">
                    <h1>Legend</h1>
                </div>

                <div className="text-center text-white py-2 px-4">
                    <p>Items Here</p>
                </div>
       
                </div>
    );

}

export default LegendBtn;