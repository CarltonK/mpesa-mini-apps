import React, { useEffect, useState } from "react";

function Home() {
    // Variables to store and set the items
    const [items, setItems] = useState([]);

    // Call an external API
    useEffect(() => {
        fetch('https://dev.api.laaragroup.com/search/stays/filtered', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': '3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.data)
                setItems(data.data);
            })
            .catch((error) => alert(`${error}`));
    }, []);

    return (
        <ul>
            {items.map((item, index) => {
                console.log('ITEM--------',item)
                // console.log('ITEM INDEX--------',index)
                return (<div key={index} className="result-card">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>)
            })}
        </ul>
    );
}

export default Home;