import React from "react";

export default function Portfolio(){
    return(
        <div className="body">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"/>

        <div className="sidebar">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                        {/* <a href="#" class="navbar-brand">Navigation</a> */}
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="nav navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#header">Home<i class="fa fa-home"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About<i class="fa fa-address-card"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#experience">Experience<i class="fa fa-star"></i></a>
                                </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="#service">Service<i class="fa fa-tasks"></i></a>
                                </li> 
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio">Portfolio<i class="fa fa-file-archive"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact<i class="fa fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
        </div>
        <div class="content">
                {/* <!-- Header Start --> */}
                <div class="header" id="header">
                    <div class="content-inner">
                        <p>I'm</p>
                        <h1>Mukila Mahalingam</h1>
                        <h2></h2>
                        <div class="typed-text"> Web Developer, Front End Developer</div>
                    </div>
                </div>
                {/* <!-- Header End --> */}
                </div>
        </div>
    )
}