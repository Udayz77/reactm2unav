import React from 'react';
import '../App.css';
import lcLogo from '../images/liveIcon.png';

class SMEPage extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               sessionStorage: JSON.parse(sessionStorage.getItem('sessStorageValues')),
               showIcon: false
          }
     }

     componentDidMount() {
          this.state.sessionStorage.some(e => {
               if (window.location.pathname === e['uri_type'] && e['flag'] === 'ON') {
                    this.setState({ showIcon: true });
                    return true;
               } else {
                    this.setState({ showIcon: false });
                    return false;
               }
          })
     }

     loadLCIcon() {
          var LHCChatOptions = {};
          LHCChatOptions.opt = { widget_height: 340, widget_width: 300, popup_height: 520, popup_width: 500 };
          (function () {
               var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
               var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://') + 1)) : '';
               var location = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
               po.src = '//m2ulivechat-sit.maybank.com.my/livechat/mlc_web/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r=' + referrer + '&l=' + location;
               var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();
     }

     render() {
          return (
               <React.Fragment>
                    <div className="container-fluid">
                         <h2 className="mt-5">SME HEADER IN SME PAGE</h2>
                         {this.state.showIcon ? (<img alt="lcLogo" src={lcLogo} style={{ bottom: 0, float: 'right', marginRight: '3%' }} />) : null}
                    </div>
               </React.Fragment>
          );
     }
}

export default SMEPage;