import React, { Component } from 'react';

class LiveChat extends Component {
     componentDidMount() {
          const script = document.createElement("script");
          //script.src = "../scripts/liveChat.js";
          script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";
          script.async = true;
          document.body.appendChild(script);
     }
     render() {
          return (
               <React.Fragment>
                    <div>COMPONENT FILE</div>
               </React.Fragment>
          )
     }
}

export default LiveChat;