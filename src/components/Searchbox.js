import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

class Searchbox extends React.Component{

  state={term:''};
  onSubmit=event=>{
    //event.preventDefault();
    //this.props.onSubmit(this.state.term);
      console.log(this.state.term);

  };


  render(){
    return(
        <div>
          <Search placeholder="input search text" allowClear  enterButton="Search"  size="large" onChange={e=>this.setState({term:e.target.value})} onPressEnter={this.onSubmit} onSearch={this.onSubmit} />
        </div>

    );
  }
}
export default Searchbox;
