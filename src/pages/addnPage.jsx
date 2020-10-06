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

     render() {
          return (
               <React.Fragment>
                    <div className="container-fluid">
                         <h2 className="mt-5">ADDN HEADER IN ADDITIONAL PAGE</h2>
                         {this.state.showIcon ? (
                              <React.Fragment>
                                   <div>
                                        <img alt="lcLogo" src={lcLogo} style={{ float: 'right', marginRight: '3%' }} />
                                   </div>
                                   <LiveChat />
                                   {/* <div style={{ marginTop: '5%' }}>
                                        < img src="https://livechat.maybank2u.com.my/livechat/mlc_web/extension/rebrand/design/rebrandtheme/images/getstatus/online.svg" alt="LiveSVG" style={{ float: 'right', marginRight: '3%' }} />
                                   </div> */}
                              </React.Fragment>
                         ) : null}
                    </div>
               </React.Fragment >
          );
     }
}

export default AddnPage;