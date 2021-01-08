import React from 'react'

const Footer = () => {

    return (
        <div>
            <nav>
                <div className="nav-wrapper grey">
                    <div className="container">
                        <div className="col s12">
                            <a href="#!" className="breadcrumb">Home</a>
                            <a href="#!" className="breadcrumb">Users</a>
                            <a href="#!" className="breadcrumb">Brad</a>
                        </div>
                    </div>
                </div>
            </nav>

            <br></br>
            <br></br>

            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row ">
                        <div className="col l6 s12">
                            <h5 className="white-text">About Us</h5>
                            <p className="grey-text text-lighten-4">Fugiat minim dolore consequat consequat aliqua esse exercitation veniam officia enim mollit. Do aliquip veniam laboris amet ad. Labore exercitation minim minim ipsum amet nostrud sit mollit sunt reprehenderit commodo dolore et ullamco.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright  grey darken-2">
                    <div className="container">
                        © 2021 Copyright Text
            <div className="grey-text text-lighten-4 right">Terms & Conditions</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer