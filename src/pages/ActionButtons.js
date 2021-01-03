import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'

const ActionButton = () => {

    const inputEl = useRef();
    

    useEffect(() => {
        M.FloatingActionButton.init(inputEl.current, {
            direction: 'left',
            hoverEnabled: false,
        })
    }, [inputEl])

    return (
        <div className="container">
            <h3>Floating & Fixed Action Buttons</h3>

            <button className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
            <button className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">create</i></button>
            <button className="btn-floating btn-large waves-effect waves-light green pulse"><i className="material-icons">publish</i></button>

            <div className="fixed-action-btn" ref={inputEl}>
                <button className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </button>
                <ul>
                    <li><button className="btn-floating red"><i className="material-icons">insert_chart</i></button></li>
                    <li><button className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></button></li>
                    <li><button className="btn-floating green"><i className="material-icons">publish</i></button></li>
                    <li><button className="btn-floating blue"><i className="material-icons">attach_file</i></button></li>
                </ul>
            </div>

        </div>
    )
}

export default ActionButton