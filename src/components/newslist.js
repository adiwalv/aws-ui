import React from 'react'

const NewsList = ({newsList}) => {
    debugger;
    return (
        <div>
            <center><h1>News List</h1></center>
            {newsList.map((news) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{news.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{news.date}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default NewsList