import React, { useRef, useEffect } from 'react';

import M from 'materialize-css'


const Collection = () => {

    const dropdown = useRef();

    useEffect(() => {
        M.Dropdown.init(dropdown, {
            hover: true,
        });
    }, [dropdown])


    return (
        <div className="container">
            <div className="collection">
                <a href="#!" className="collection-item black-text">First Item</a>
                <a href="#!" className="collection-item black-text">Second Item</a>
                <a href="#!" className="collection-item black-text">Third Item</a>
                <a href="#!" className="collection-item black-text">Fourth Item</a>
            </div>

            <div className="collection">
                <a href="#!" className="collection-item">First Item</a>
                <a href="#!" className="collection-item">Second Item</a>
                <a href="#!" className="collection-item">Third Item</a>
                <a href="#!" className="collection-item">Fourth Item</a>
                <a href="#!" className="collection-item"><span className="badge">44</span>Fifth Item</a>
                <a href="#!" className="collection-item"><span className="new badge">3</span>Six Item</a>
            </div>

            <div className="collection with-header">

                <h3 className="collection-header">Items</h3>

                <a href="#!" className="collection-item">First Item</a>
                <a href="#!" className="collection-item">Second Item</a>
                <a href="#!" className="collection-item">Third Item</a>
                <a href="#!" className="collection-item">Fourth Item</a>
            </div>

            <ul className="collection with-header">

                <h3 className="collection-header">Items</h3>

                <li className="collection-item"><div>First Item<a href="#!" className="secondary-content"><i className="material-icons">clear</i></a></div></li>
                <li className="collection-item"><div>Second Item<a href="#!" className="secondary-content"><i className="material-icons">clear</i></a></div></li>
                <li className="collection-item"><div>Third Item<a href="#!" className="secondary-content"><i className="material-icons">clear</i></a></div></li>
                <li className="collection-item"><div>Fourth Item<a href="#!" className="secondary-content"><i className="material-icons">clear</i></a></div></li>

            </ul>



            <ul className="collection">
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">John doe</span>
                    <p>jdoe@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">Steve Smith</span>
                    <p>steve@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">Karen Johnson</span>
                    <p>karen@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">Mary Williams</span>
                    <p>mary@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>



            <ul id="dropdown2" className="dropdown-content">
                <li><a href="#!">one<span className="badge">1</span></a></li>
                <li><a href="#!">two<span className="new badge">1</span></a></li>
                <li><a href="#!">three</a></li>
            </ul>
            <a className="btn dropdown-trigger" ref={dropdown} href="#!" data-target="dropdown2">Dropdown<i className="material-icons right">arrow_drop_down</i></a>


        </div>
    )
}

export default Collection