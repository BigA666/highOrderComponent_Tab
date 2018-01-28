import React, {Component} from 'react'
import {Pagination} from 'antd'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address'
    }
]
const data=[
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        key: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
    },
]
export default (Table) => {
    class Enhancer extends Component {
        constructor(){
            super()
            this.state = {
            
            }
        }
        change(page, pageSize){
            console.log(page, pageSize)
        }
        render(){
           return <div>
                <Table columns={columns} dataSource={data}/>
                <Pagination defaultCurrent={1} total={50} onChange={this.change}/>
            </div> 
        }
        
    }
    return Enhancer
}