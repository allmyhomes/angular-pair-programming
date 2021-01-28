
import React, { useEffect, useState } from "react";
import axios from 'axios';
export default () => {
    let [data, setData] = useState([1,2, 3]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
            );
            
            let newses = result.data.map(async(id) => {
                let details = await axios(
                    'https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty'
                    );
                console.log(details.data.title);
                return details.data;
            });
            setData(newses);

        };
        fetchData();
        console.log(data);
    }, []);

    return (
        <div>
            <h1>NewsList</h1>
            <ul>
                {data.map((news) => {
                    return <li id={news.id}>{news.title}</li>
                })}
            </ul>
        </div>
    )
}