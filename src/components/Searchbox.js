import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

class Searchbox extends React.Component{

  state={term:''};
  onSubmit=event=>{
    //event.preventDefault();
    this.props.search(this.state.term);
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
