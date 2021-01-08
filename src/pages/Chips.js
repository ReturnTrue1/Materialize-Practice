import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'
import sample8 from './sample8.jpg'
import sample9 from './sample9.jpg'
import sample10 from './sample10.jpg'

const Chips = () => {

    const selectOne = useRef(null);

    useEffect(() => {
        M.Chips.init(selectOne.current, {
            autocompleteOptions: {
                data: {
                    'HTML': null,
                    'css': null,
                    'javascript': null,
                },
                limit: Infinity,
                minLength: 1
            }
        })
    }, [selectOne])

    return (
        <div className="container">

            <div className="row">
                <div class="chip">Web development</div>
                <div class="chip">Web design</div>
                <div class="chip">Programming</div>
            </div>

            <div className="row">
                <div class="chip">Web development<i class="close material-icons">close</i></div>
                <div class="chip">Web design<i class="close material-icons">close</i></div>
                <div class="chip">Programming<i class="close material-icons">close</i></div>
            </div>

            <div class="chip">
                <img src={sample8} alt="Contact Person" />
                John Doe
            </div>
            <div class="chip">
                <img src={sample9} alt="Contact Person" />
                Brian Jackson
            </div>
            <div class="chip">
                <img src={sample10} alt="Contact Person" />
                Lori Smith
            </div>

            <div class="chips chips-placeholder" ref={selectOne}></div>

            <ul class="pagination">
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li class="waves-effect"><a href="#!">1</a></li>
                <li class="active"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
                <li class="waves-effect"><a href="#!">5</a></li>
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    )
}

export default Chips