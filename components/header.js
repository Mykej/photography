import React from 'react';

function header() {
    return(
        <div>
            <div>
                <div className = "row bg-transparent">
                    <div className = "col align-self-center">
                        <div className = "btn-group-vertical" role = "button" aria-label = "basic example">
                            <button type = "button" class = "btn-secondary"><i class="fab fa-instagram"></i></button>
                            <button type = "button" class = "btn-secondary"><i class="fab fa-facebook-f"></i></button>
                            <button type = "button" class = "btn-secondary"><i class="fab fa-twitter"></i></button>
                        </div>
                    </div>
                </div>
            </div>
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


export default header;