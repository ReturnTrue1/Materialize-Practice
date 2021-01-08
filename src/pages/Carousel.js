import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'

import sample11 from './sample11.png'
import sample12 from './sample12.jpg'
import sample13 from './sample13.jpg'
import sample14 from './sample14.jpg'
import sample15 from './sample15.jpg'


const Carousel = () => {

    const selectOne = useRef(null);
    const selectTwo = useRef(null);
    const selectThree = useRef(null);

    useEffect(() => {
        M.Carousel.init(selectOne.current, {})
    }, [selectOne])

    useEffect(() => {
        M.Carousel.init(selectTwo.current, {
            indicators: true,
            fullWidth: true,
        })
    }, [selectTwo])
    
    useEffect(() => {
        M.Carousel.init(selectThree.current, {
            indicators: true,
            fullWidth: true,
        })
    }, [selectThree])

    return (
        <div className="container">
            <div className="carousel" ref={selectOne}>
                <a className="carousel-item" href="#one!"><img src={sample11} /></a>
                <a className="carousel-item" href="#two!"><img src={sample12} /></a>
                <a className="carousel-item" href="#three!"><img src={sample13} /></a>
                <a className="carousel-item" href="#four!"><img src={sample14} /></a>
                <a className="carousel-item" href="#five!"><img src={sample15} /></a>
            </div>

            <div className="carousel carousel-slider" ref={selectTwo}>
                <a className="carousel-item" href="#one!"><img src={sample11} /></a>
                <a className="carousel-item" href="#two!"><img src={sample12} /></a>
                <a className="carousel-item" href="#three!"><img src={sample13} /></a>
                <a className="carousel-item" href="#four!"><img src={sample14} /></a>
                <a className="carousel-item" href="#five!"><img src={sample15} /></a>
            </div>

            <div class="carousel carousel-slider center" ref={selectThree}>
                <div class="carousel-fixed-item center">
                    <a class="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div class="carousel-item red white-text" href="#one!">
                    <h2>First Panel</h2>
                    <p class="white-text">This is your first panel</p>
                </div>
                <div class="carousel-item amber white-text" href="#two!">
                    <h2>Second Panel</h2>
                    <p class="white-text">This is your second panel</p>
                </div>
                <div class="carousel-item green white-text" href="#three!">
                    <h2>Third Panel</h2>
                    <p class="white-text">This is your third panel</p>
                </div>
                <div class="carousel-item blue white-text" href="#four!">
                    <h2>Fourth Panel</h2>
                    <p class="white-text">This is your fourth panel</p>
                </div>
            </div>
        </div>
    )
}

export default Carousel