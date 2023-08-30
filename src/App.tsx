import React from 'react';
import './styles/App.scss';
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const $homepageUrl :string = '/prod_proj/';

function App() {
    return (
        <Routes>
            {/*<Route path={$homepageUrl} element={''} />*/}
            <Route path={'*'} element={<ErrorPage />} />
        </Routes>
    );
}

export default App;