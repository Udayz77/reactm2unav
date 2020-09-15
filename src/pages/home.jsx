import React from 'react';
import '../App.css';
import lcLogo from '../images/liveIcon.png';

class Home extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               sessionStorage: JSON.parse(sessionStorage.getItem('sessStorageValues')),
               showIcon: this.props.showIcon
          }
     }

     componentDidMount() {
          this.state.sessionStorage.map(e => {
               if (window.location.pathname === e['uri_type'] && e['flag'] === 'ON') {
                    return this.setState({ showIcon: true });
               } else {
                    return this.setState({ showIcon: false });
               }
          })
     }

     render() {
          return (
               <React.Fragment>
                    <div className="container-fluid">
                         <h2>HEADER IN HOME PAGE</h2>
                         {this.state.showIcon ? (<img alt="lcLogo" src={lcLogo} style={{ bottom: 0, float: 'right', marginRight: '3%' }} />) : null}
                    </div>
               </React.Fragment>
          );
     }
}

export default Home;