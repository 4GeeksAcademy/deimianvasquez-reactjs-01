import React from "react";

function Card({ news }) {

    const { image, title, description } = news

    return (
        <div className="col-md-6 col-xxl-3">
            <div className="card-group">
                <div className="card text-center">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title || "Empty"}</h5>
                        <p className="card-text">{description || "Empty"}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary">Find Out More!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card