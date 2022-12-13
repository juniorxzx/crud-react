import './Main.css'
import React, { Fragment } from 'react'
import Header from '../template/Header/Header'

export default props =>
    <Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </Fragment>