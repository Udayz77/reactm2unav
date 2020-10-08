import React from 'react';

class LiveChat extends React.Component {
     constructor(props) {
          super(props);
          //this.loadScript();
     }
     // loadScript() {
     //      const script = document.createElement("script");
     //      //script.src = "../scripts/liveChat.js";
     //      script.type = "text/babel";
     //      script.src = "../sampleLoad.js";
     //      //script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";
     //      script.async = false;
     //      document.body.appendChild(script);
     // }
     componentDidMount() {
          // const s = document.createElement('script');
          // s.type = 'text/javascript';
          // s.async = true;
          // s.innerHTML = "document.write('This is output by document.write()!')";

          var LHCChatOptions = {};
          LHCChatOptions.opt = { widget_height: 340, widget_width: 300, popup_height: 520, popup_width: 500 };
          (function () {
               var po = document.createElement('script'); po.type = 'text/jsx'; po.async = true;
               var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://') + 1)) : '';
               var location = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
               //po.src = '//m2ulivechat-sit.maybank.com.my/livechat/mlc_web/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r=' + referrer + '&l=' + location;
               po.src = '/sampleLoad.js';
               var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
               document.body.appendChild(s);
          })();
          //this.instance.appendChild(s);
     }
     render() {
          return (
               <React.Fragment>
                    <div>COMPONENT FILE</div>
                    {/* <iframe src="https://livechat.maybank2u.com.my/livechat/mlc_web/index.php/chat/getstatus/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/2/(theme)/1/(survey)/1?r=%2F%2Fwww.google.com%2F&l=%2F%2Fwww.maybank2u.com.my%2Fhome%2Fm2u%2Fcommon%2Flogin.do"></iframe> */}
               </React.Fragment>
          )
     }
}

export default LiveChat;