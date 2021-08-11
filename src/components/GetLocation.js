import React from 'react';
import { Button } from 'antd';

class GetLocation extends React.Component{
  onClick=()=>{
    this.props.onClick();
  }
  render(){
    return(
      <Button type="primary" onClick={this.onClick}>
        Get Location!
      </Button>
    );
  }
}
export default GetLocation;
