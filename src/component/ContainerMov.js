import React from 'react'
import './ContainerMov.css'

function ContainerMov(props) {
    return (
        <React.Fragment>
            <div className="container__card">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__opening">{props.opening}</p>
            </div>
        </React.Fragment>
    )
}

export default ContainerMov
