import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

let term='';

class Searchbox extends React.Component{

  onSubmit=(event)=>{
    event.preventDefault();
    this.props.search(term);
  };


  render(){
    return(
        <div>
          <Search placeholder="input search text" allowClear  enterButton="Search"  size="large" onChange={e=>term=e.target.value} onPressEnter={this.onSubmit} onSearch={this.onSubmit} />
        </div>

    );
  }
}
export default Searchbox;
