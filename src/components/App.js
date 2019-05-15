import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            난 첫번째 페이지. 
            <br/>
            <Link to="/pagetwo">페이지 2</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            하이 나는 2 페이지야... 
            <br/>
            <Link to="/">페이지 1</Link>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pagetwo" component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;