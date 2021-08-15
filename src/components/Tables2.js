import React,{useState,useEffect} from 'react';
import {Table,Divider,Button} from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data=[
  {
    key:'0',
    name: "JohnBrown",
    address: 'New York No. 1 Lake Park',
  },
];

const Tables=(props)=>{

  useEffect(() => {
    let tmp={name:null,address:null};
    if(props.results[0]!==undefined){
      tmp.key='1';
      tmp.name=props.results[0].name;
      tmp.address=props.results[0].formatted_address;
      data.push(tmp);
    }
  },[data,props.results]);

  // rowSelection object indicates the need for row selection

  const deletedata =(props)=>{
    props.delete();
  }

  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
    <br />
      <Button type="primary" onClick={deletedata}>
        Delete
      </Button>
      <Divider />
      {console.log(data)}
      <Table
        rowSelection={{type:rowSelection}}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Tables;
