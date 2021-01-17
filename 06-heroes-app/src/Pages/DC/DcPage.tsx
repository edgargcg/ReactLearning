import React from "react"
import { HeroList } from "../../Components/Heroes/HeroList"

export const DcPage = () => {
    return (
        <div>
            <h1>DC</h1>
            <HeroList publisher="DC Comics" />
        </div>
    )
}
