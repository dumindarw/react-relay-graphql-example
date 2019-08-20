import React from 'react';
import './App.css';
import { QueryRenderer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

import environment from './Environment'

type Props = {
  userName : string
}

class App extends React.Component<Props>{

  render(){

    const {userName} = this.props;

    return(
    <QueryRenderer environment={environment} query={graphql`
      query appQuery($userName: String!) {
        GET_USER(username: $userName) {
          tp
        } 
      }
    `}
    variables={{userName : "dum2"}}
    render={({error, props})=>{
      console.log(error);
      if(error)
          return(<div>Error</div>)
      if(!props)
        return(<div>Loading ...</div>)
      return(<div>User NIC: {props.GET_USER.tp}</div>)
    }}
    />)
  }

}

export default App;
