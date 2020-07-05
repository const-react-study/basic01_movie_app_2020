import React from 'react';

function Food({name, picture}) {
    return (
        <div>
            <h2>나는 {name}를 좋아해요</h2>
            <img src={picture} alt={name+" 사진"}/>
        </div>
    )
}

function App() {
    const foodList = [
        {
            "name": "김치",
            "image_url": "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
        },
        {
            "name": "불고기",
            "image_url": "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg"
        }
    ];

    return (
        <div>
            <h1>hello</h1>
            {foodList.map(dish => (<Food name={dish.name} picture={dish.image_url}/>))}
        </div>
    );
}


export default App;
