import { Fragment, useState } from "react";
import { CategoryAdd } from "./Components/Categories/CategoryAdd";
import { GifGrid } from "./Components/Gifs/GifGrid";

const GifExpertApp = ( { defaultCategories = [] } ) => {
    const [categories, setCategories] = useState(defaultCategories)

    const handleAddCategory = (value) => {
        if (!categories.find( c => c === value))
            setCategories([value, ...categories]);
    }

    return (
        <Fragment>
            <div className="container">
                <h2 className="title">
                    GiftExpertApp
                </h2>
                <CategoryAdd setCategory={ handleAddCategory } />
                <div className="categories">    
                    {
                        categories.map(
                            category => 
                                (
                                    <GifGrid 
                                        key={category}
                                        category={category} 
                                    />
                                )
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default GifExpertApp;