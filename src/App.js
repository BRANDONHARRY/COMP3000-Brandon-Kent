import React from 'react';
import './App.css';
import './main.js';

function App() {
  var htmlCode = 
    <html>
        <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata"></link>

        </head>

        <body>
            <div class="w3-top">
                <div class="w3-row w3-padding w3-black">
                  <div class="w3-col s3">
                      <a href="#" class="w3-button w3-block w3-black">HOME</a>
                  </div>
                  <div class="w3-col s3">
                      <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
                  </div>
                  <div class="w3-col s3">
                      <a href="#menu" class="w3-button w3-block w3-black">MENU</a>
                  </div>
                  <div class="w3-col s3">
                      <a href="#where" class="w3-button w3-block w3-black">WHERE</a>
                  </div>
                </div>
            </div>

            <div>
              <br></br>
              <br></br>
              <br></br>

              <p class="testpara">test</p>
            </div>
        </body>

        
    </html>;

  return (htmlCode);
}


export default App;