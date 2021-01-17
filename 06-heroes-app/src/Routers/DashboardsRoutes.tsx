import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import { Navbar } from "../Components/NavBar/NavBar"
import { Search } from "../Components/Search/Search"
import { DcPage } from "../Pages/DC/DcPage"
import { HeroePage } from "../Pages/Heroes/HeroePage"
import { MarvelPage } from "../Pages/Marvel/MarvelPage"

export const DashboardsRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Switch>
                    <Route exact path="/dc" component={ DcPage } />
                    <Route exact path="/search" component={ Search } />
                    <Route exact path="/marvel" component={ MarvelPage } />
                    <Route exact path="/hero/:heroId" component={ HeroePage } />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
