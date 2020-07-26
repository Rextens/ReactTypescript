import React, {  } from 'react'
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
                    <NavLink to='/CreateGist'>
                        <div className="chooseOption">
                            Create gist
                        </div>
                    </NavLink>
                    <NavLink to='/DeleteGist'>
                        <div className="chooseOption">
                            Delete gist
                        </div>
                    </NavLink>

                    <NavLink to='/EditGist'>
                        <div className="chooseOption">
                            Edit gist
                        </div>
                    </NavLink>
                    <NavLink to='/FilterGists'>
                        <div className="chooseOption">
                            Filter gists
                        </div>    
                    </NavLink>
                    <NavLink to='/PaginateGist'>
                        <div className="chooseOption">
                            Paginate gists
                        </div>
                    </NavLink>
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