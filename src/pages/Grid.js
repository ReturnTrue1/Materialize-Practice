import React from 'react'
import './grid.css'

const Grid = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="col s1 box">1</div>
                <div className="col s1 box">2</div>
                <div className="col s1 box">3</div>
                <div className="col s1 box">4</div>
                <div className="col s1 box">5</div>
                <div className="col s1 box">6</div>
                <div className="col s1 box">7</div>
                <div className="col s1 box">8</div>
                <div className="col s1 box">9</div>
                <div className="col s1 box">10</div>
                <div className="col s1 box">11</div>
                <div className="col s1 box">12</div>
            </div>

            <div className="row">
                <div className="col s4 box">1</div>
                <div className="col s4 box">2</div>
                <div className="col s4 box">3</div>
            </div>

            <div className="row">
                <div className="col s6 box">1</div>
                <div className="col s6 box">2</div>
            </div>

            <div className="row">
                <div className="col s8 box">1</div>
                <div className="col s4 box">2</div>
            </div>

            <div className="row">
                <div className="col s12 l1 box">1</div>
                <div className="col s12 l1 box">2</div>
                <div className="col s12 l1 box">3</div>
                <div className="col s12 l1 box">4</div>
                <div className="col s12 l1 box">5</div>
                <div className="col s12 l1 box">6</div>
                <div className="col s12 l1 box">7</div>
                <div className="col s12 l1 box">8</div>
                <div className="col s12 l1 box">9</div>
                <div className="col s12 l1 box">10</div>
                <div className="col s12 l1 box">11</div>
                <div className="col s12 l1 box">12</div>
            </div>

            <div className="row">
                <div className="col s12 l4 box">1</div>
                <div className="col s12 l4 box">2</div>
                <div className="col s12 l4 box">3</div>
            </div>

            <div className="row">
                <div className="col s12 l9 box">1</div>
                <div className="col s12 l3 box">2</div>
            </div>

            <div className="row">
                <div className="col s3 box">1</div>
                <div className="col s9 box">2</div>
            </div>

            <div className="row">
                <div className="col s6 offset-s3 box">Login</div>
            </div>
        </div>
    )
}

export default Grid