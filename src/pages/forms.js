import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'

const Forms = () => {

    const selectOne = useRef(null);
    const selectTwo = useRef(null);
    const selectThree = useRef(null);

    useEffect(() => {
        M.FormSelect.init(selectOne.current, {

        })
    }, [selectOne])

    useEffect(() => {
        M.FormSelect.init(selectTwo.current, {

        })
    }, [selectTwo])

    useEffect(() => {
        M.FormSelect.init(selectThree.current, {

        })
    }, [selectThree])

    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="Username" type="text" className="validate" placeholder="Name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" placeholder="jonh@gmail.com" />
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" placeholder="jonh@gmail.com" />
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="Message" type="text" className="validate" placeholder="Message" />
                            <label for="Message">Message</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            Number of Users:
                            <div className="input-field inline">
                                <input type="email" placeholder="#" className="validate" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">call</i>
                            <input id="phone-number" type="text" className="validate" placeholder="Phone Number" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" placeholder="Email" />
                            <label for="email">Email</label>
                        </div>
                    </div>


                    <div className="input-field col s12">
                        <select ref={selectOne} >
                            <option value="" disabled selected>Select Option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Select List</label>
                    </div>

                    <div className="input-field col s12">
                        <select ref={selectTwo} >
                            <option value="1" selected>Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Option Group Select</label>
                    </div>

                    <div className="input-field col s12">
                        <select ref={selectThree} >
                            <option value="" disabled selected>Select Option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Select List</label>
                    </div>

                    <form action="#">
                        <p>
                            <label>
                                <input name="group1" type="radio" checked />
                                <span>Male</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Female</span>
                            </label>
                        </p>
                    </form>

                    <br></br>
                    <br></br>

                    <form action="#">
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>HTML</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" checked="checked" />
                                <span>CSS</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked="checked" />
                                <span>JavaScript</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" disabled="disabled" />
                                <span>PHP</span>
                            </label>
                        </p>
                    </form>

                </form>
            </div>
        </div>
    )
}

export default Forms