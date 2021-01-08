import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'

const FancyForm = () => {

    const selectOne = useRef(null)
    const selectTwo = useRef(null)

    useEffect(() => {
        M.Datepicker.init(selectOne.current, {
            autoClose: true,
        })
    }, [selectOne])

    useEffect(() => {
        M.Timepicker.init(selectTwo.current, {
            autoClose: true,
        })
    }, [selectTwo])

    return (
        <div className="container">
            <div className="switch">
                <label>
                    Disable
                    <input type="checkbox" />
                    <span className="lever"></span>
                    Enable
                </label>
            </div>

            <div className="switch">
                <label>
                    Disable
                    <input type="checkbox" />
                    <span className="lever"></span>
                    Enable
                </label>
            </div>

            <form action="#">
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload File</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
            </form>

            <form action="#">
                <p className="range-field">
                    <input type="range" id="test5" min="0" max="100" />
                </p>
            </form>

            <input type="text" className="datepicker" ref={selectOne} placeholder="Date Picker" />

            <input type="text" className="timepicker" ref={selectTwo} placeholder="Time Picker" />

        </div>
    )
}

export default FancyForm