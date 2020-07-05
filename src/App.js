import React from 'react';

function Food(props){
    return <h3>나는 {props.favorite}를 좋아해요!</h3>;
}

function App() {
    return (
        <div>
            <h1>hello</h1>
            <Food favorite="김치"/>
            <Food favorite="참치"/>
            <Food favorite="피자"/>
        </div>
    );
}


export default App;
