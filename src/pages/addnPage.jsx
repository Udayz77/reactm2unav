import React from 'react';
import '../App.css';
import lcLogo from '../images/liveIcon.png';
import LiveChat from '../components/liveChat';

class AddnPage extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               sessionStorage: JSON.parse(sessionStorage.getItem('sessStorageValues')),
               showIcon: this.props.showIcon,
               check: '',
               po: ''
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

     // loadLCIcon() {
     //      let LHCChatOptions = {};
     //      LHCChatOptions.opt = { widget_height: 340, widget_width: 300, popup_height: 520, popup_width: 500 };
     //      (function () {
     //           let po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
     //           let referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://') + 1)) : '';
     //           let location = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
     //           po.src = '//m2ulivechat-sit.maybank.com.my/livechat/mlc_web/index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r=' + referrer + '&l=' + location;
     //           let s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     //      })();
     // }

     render() {
          return (
               <React.Fragment>
                    <div className="container-fluid">
                         <h2 className="mt-5">ADDN HEADER IN ADDITIONAL PAGE</h2>
                         {this.state.showIcon ? (<img alt="lcLogo" src={lcLogo} style={{ bottom: 0, float: 'right', marginRight: '3%' }} /> && <LiveChat />) : null}
                    </div>
               </React.Fragment>
          );
     }
}

export default AddnPage;