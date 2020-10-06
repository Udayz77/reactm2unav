import React from 'react';
import '../App.css';
import lcLogo from '../images/liveIcon.png';

class OtherPage extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               sessionStorage: JSON.parse(sessionStorage.getItem('sessStorageValues')),
               showIcon: this.props.showIcon
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
                    <div className="container">
                         <h2 className="mt-5">NEW HEADER IN OTHER PAGE</h2>
                         {this.state.showIcon ? (<img alt="lcLogo" src={lcLogo} style={{ float: 'right', marginRight: '3%' }} />) : null}
                    </div>
               </React.Fragment>
          );
     }
}

export default OtherPage;