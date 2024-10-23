import React from "react";
import '../../styles/index.css'

function Jumbotron() {
    return (
        <div className="row d-flex justify-content-center my-4">
            <div className="col-12">
                <div className="greyBackground px-4 pb-5 rounded">
                    <h1>A Warm Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima iusto ipsam! Facilis eligendi et nostrum ab, molestias, earum, quae necessitatibus aliquam voluptatibus harum quam! Nostrum possimus quod cumque illo..</p>
                    <button className="btn btn-primary">Call to action!</button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron