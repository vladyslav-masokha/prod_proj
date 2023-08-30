import React from 'react';
import {$homepageUrl} from "../../App";
import {Link} from "react-router-dom";
import './ErrorPage.scss';

function ErrorPage() {
    return (
        <div className='errorPage'>
            <div className="wrapper">
                <div className="errorPageBody">
                    <h1 className='typeErr'>404</h1>
                    <h3 className='textErr'>Сторінку не знайдено!</h3>
                    <Link to={$homepageUrl} className={'homeLink'}>{`>> На головну <<`}</Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;