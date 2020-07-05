import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return (
        <div>
            <h2>나는 {name}를 좋아해요</h2>
            <h4>{rating}</h4>
            <img src={picture} alt={name}/>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    rating: PropTypes.number,
}

// 정의된 함수의 수를 줄여야 관리 편함, 간단한 화살표 함수를 사용.
function App04() {
    const foodList = [
        {
            "id": 1,
            "name": "김치",
            "image_url": "https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
            "rating": 4.2,
        },
        {
            "id": 2,
            "name": "불고기",
            "image_url": "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg",
            'rating': 1,
        }
    ];

    return (
        <div>
            <h1>hello</h1>
            {foodList.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image_url} rating={dish.rating}/>)
            )}
        </div>
    );
}


export default App04;
