import React,{useState} from 'react';
import {Table,Divider,Button} from 'antd';

const Tables=(props)=>{

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

  interface DataType {
    key: React.Key;
    name: string;
    address: string;
  }

  let data: DataType[] = [];

  const[reload,setReload]=useState(false);

  /*const result=(props)=>{
    let tmp={};
    let tmp2={};
      for(let i=0;i<props.results.length;i++){
        tmp=props.results[i];
        tmp2=Object.assign({key:tmp.place_id,name:tmp.name,address:tmp.vicinity});
        data.push(tmp2);
        //console.log(data);
    }
    setReload(true);
  }*/

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  }

  const deletedata =(props)=>{
    this.props.delete();
  }

  return (
    <div>
      <Button type="primary" onClick={deletedata}>
        Delete
      </Button>
      <Divider />
      <Table
        rowSelection={{type:rowSelection}}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Tables;
