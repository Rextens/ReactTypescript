import React, { useState } from 'react'
import './ChooseOptions.css'
import CreateGist from './gistOptions/create'
import DeleteGist from './gistOptions/delete'
import EditGist from './gistOptions/edit'
import FilterGist from './gistOptions/filter'
import PaginateGist from './gistOptions/pagination'

import { Route, NavLink, HashRouter } from "react-router-dom";

function ChooseOption() {
    //RETURN
        return (
            <HashRouter>
                <div className="menu">
                    <div className="chooseOption">
                        <NavLink to='/CreateGist'>Create gist</NavLink>
                    </div>
                    <div className="chooseOption">
                        <NavLink to='/DeleteGist'>Delete gist</NavLink>
                    </div>
                    <div className="chooseOption">
                        <NavLink to='/EditGist'>Edit gist</NavLink>
                    </div>
                    <div className="chooseOption">
                        <NavLink to='/FilterGists'>Filter gists</NavLink>
                    </div>
                    <div className="chooseOption">
                        <NavLink to='/PaginateGist'>Paginate gists</NavLink>
                    </div>
                </div>
                <div className="content">
                    <Route exact path="/CreateGist" component={CreateGist}></Route>
                    <Route exact path="/DeleteGist" component={DeleteGist}></Route>
                    <Route exact path="/EditGist" component={EditGist}></Route>
                    <Route exact path="/FilterGists" component={FilterGist}></Route>
                    <Route exact path="/PaginateGist" component={PaginateGist}></Route>
                </div>
            </HashRouter>
        )
}

export default ChooseOption;