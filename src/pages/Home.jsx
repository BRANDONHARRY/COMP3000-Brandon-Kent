import React from 'react';
import "../css/Home.css"

function Home() {
    return(
        <>
        <head>
            <title>Homepage</title>
        
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <header class="bgimage">
            <img src={require("./images/coffeehouse.jpg")} alt='coffeehouse' class="img"/>
        </header>


        </>
    );
}

export default Home;