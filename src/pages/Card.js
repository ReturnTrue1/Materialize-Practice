import React from 'react';
import sample1 from './sample1.jpg'
import sample2 from './sample2.jpg'
import sample3 from './sample3.jpg'
import sample4 from './sample4.jpg'
import sample5 from './sample5.jpg'
import sample6 from './sample6.jpg'
import sample7 from './sample7.jpg'

const card = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col s6 ">
                    <div className="col s12">
                        <div className="card darken-1">
                            <div className="card-content black-text">
                                <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="card red darken-1">
                            <div className="card-content white-text">
                                <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="card">
                        <div className="card-content black-text">
                            <span className="card-title">Card With Title</span>
                            <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">READ MORE</a>
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={sample1} />
                            <span className="card-title">Card Image</span>
                        </div>
                        <div className="card-content">
                            <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s6">
                        <div className="card">
                            <div className="card-image">
                                <img src={sample2} />
                                <span className="card-title">Card Image</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light blue "><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={sample3} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h1 className="card-title">Horizontal</h1>
                                <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={sample4} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Reveal<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Read More</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Reveal<i className="material-icons right">close</i></span>
                            <p>Lorem laborum do elit pariatur esse officia nostrud exercitation reprehenderit. Dolore nostrud exercitation aute deserunt Lorem eiusmod aliquip.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="card-title">Tabbed Card</h3>
                            <p>Elit est non Lorem culpa sunt deserunt cupidatat exercitation eu laboris ea quis. Nulla adipisicing nostrud enim incididunt fugiat sint Lorem excepteur eu mollit adipisicing incididunt cillum ullamco. Id anim non commodo Lorem fugiat ullamco pariatur pariatur. Laboris voluptate elit qui exercitation reprehenderit officia in consequat ipsum commodo enim velit sit.</p>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab"><a href="#test4">Tab 1</a></li>
                                <li className="tab"><a href="#test5">Tab 2</a></li>
                                <li className="tab"><a href="#test6">Tab 3</a></li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                            <div id="tab 1">This is the content for tab 3</div>
                        </div>
                    </div>
                </div>

                <div className="col s6">
                    <div className="card">
                        <div className="card-content orange">
                            <h3 className="card-title">Tabbed Card</h3>
                            <p>Elit est non Lorem culpa sunt deserunt cupidatat exercitation eu laboris ea quis. Nulla adipisicing nostrud enim incididunt fugiat sint Lorem excepteur eu mollit adipisicing incididunt cillum ullamco. Id anim non commodo Lorem fugiat ullamco pariatur pariatur. Laboris voluptate elit qui exercitation reprehenderit officia in consequat ipsum commodo enim velit sit.</p>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width orange">
                                <li className="tab"><a className="white-text" href="#tab1">Tab 1</a></li>
                                <li className="tab"><a className="white-text" href="#tab2">Tab 2</a></li>
                                <li className="tab"><a className="white-text" href="#tab3">Tab 3</a></li>
                            </ul>
                        </div>
                        <div className="card-content black white-text">
                            <div id="tab1">This is the content for tab 1</div>
                            <div id="tab2">This is the content for tab 2</div>
                            <div id="tab3">This is the content for tab 3</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s4">
                    <div class="card">
                        <div class="card-image">
                            <img src={sample5} />
                            <span class="card-title">Card Image</span>
                        </div>
                        <div class="card-content">
                            <p>Ea aliquip officia Lorem Lorem excepteur dolor laboris irure qui. Velit enim nulla cupidatat adipisicing eu. Aliquip esse ipsum incididunt amet quis aute. Ea aute anim sit aliqua fugiat sunt fugiat sint elit.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                </div>

                <div class="col s4">
                    <div class="card">
                        <div class="card-image">
                            <img src={sample6} />
                            <span class="card-title">Card Image</span>
                        </div>
                        <div class="card-content">
                            <p>Amet consequat tempor aliqua adipisicing id enim aute adipisicing Lorem cillum tempor pariatur minim nisi. Est ea enim minim velit incididunt. Labore occaecat exercitation sunt laborum aliqua ipsum eu sit. Sint aute id culpa officia elit tempor.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                </div>

                <div class="col s4">
                    <div class="card">
                        <div class="card-image">
                            <img src={sample7} />
                            <span class="card-title">Card Image</span>
                        </div>
                        <div class="card-content">
                            <p>Lorem Lorem fugiat laborum culpa quis laborum laboris deserunt anim officia esse ad ad. Anim et mollit culpa do. Incididunt nostrud sit cupidatat mollit quis nulla anim adipisicing exercitation excepteur labore laboris. Cupidatat cillum reprehenderit officia elit ea nulla anim dolor fugiat ex velit dolor. Lorem commodo do voluptate sint nisi ullamco consequat incididunt aliquip duis tempor velit cillum cupidatat. Esse exercitation ad ea ut culpa.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s3">
                    <div class="card-panel blue">
                        <span class="black-text">Consequat veniam eu mollit veniam elit est esse deserunt ut ad Lorem ullamco occaecat. Dolore esse fugiat aute ad. Deserunt ullamco est est Lorem minim magna non do consectetur incididunt qui incididunt. Et aute officia culpa ea sunt. Elit mollit laboris ex eiusmod est enim. Consequat non quis dolore occaecat quis officia eu sit ut ea consequat laborum sit.</span>
                    </div>
                </div>
                <div class="col s3">
                    <div class="card-panel purple">
                        <span class="white-text">Consequat veniam eu mollit veniam elit est esse deserunt ut ad Lorem ullamco occaecat. Dolore esse fugiat aute ad. Deserunt ullamco est est Lorem minim magna non do consectetur incididunt qui incididunt. Et aute officia culpa ea sunt. Elit mollit laboris ex eiusmod est enim. Consequat non quis dolore occaecat quis officia eu sit ut ea consequat laborum sit.</span>
                    </div>
                </div>
                <div class="col s3">
                    <div class="card-panel cyan">
                        <span class="black-text">Consequat veniam eu mollit veniam elit est esse deserunt ut ad Lorem ullamco occaecat. Dolore esse fugiat aute ad. Deserunt ullamco est est Lorem minim magna non do consectetur incididunt qui incididunt. Et aute officia culpa ea sunt. Elit mollit laboris ex eiusmod est enim. Consequat non quis dolore occaecat quis officia eu sit ut ea consequat laborum sit.</span>
                    </div>
                </div>
                <div class="col s3">
                    <div class="card-panel amber">
                        <span class="black-text">Consequat veniam eu mollit veniam elit est esse deserunt ut ad Lorem ullamco occaecat. Dolore esse fugiat aute ad. Deserunt ullamco est est Lorem minim magna non do consectetur incididunt qui incididunt. Et aute officia culpa ea sunt. Elit mollit laboris ex eiusmod est enim. Consequat non quis dolore occaecat quis officia eu sit ut ea consequat laborum sit.</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default card