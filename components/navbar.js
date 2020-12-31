import React from 'react';

function navbar() {
    return(
        <div>
            <navbar>
                <div className = "container">
                    <div className ="row align-items-center">
                        <div class = "col align-self-start">
                            <nav className = "navbar bg-transparent">
                                <ul className = "navbar nav">
                                    <li className = "nav-item">
                                        <a className = "nav-link" href = "#">Link 1</a>
                                    </li>
                                    <li className = "nav-item">
                                        <a className = "nav-link" href = "#">Link 2</a>
                                    </li>
                                    <li className = "nav-item">
                                        <a className = "nav-link" href = "#">Link 3</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </navbar>
        </div>
    )
}

export default navbar;