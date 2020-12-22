import { Fragment, useState } from "react";
import { CategoryAdd } from "./Components/Categories/CategoryAdd";
import { GifGrid } from "./Components/Gifs/GifGrid";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man'])

    const handleAddCategory = (value) => {
        if (!categories.find( c => c == value))
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

export default GiftExpertApp;