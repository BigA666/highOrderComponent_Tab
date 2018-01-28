import React, {Component} from 'react'

class Table extends Component{
    render(){
        let {columns, dataSource} = this.props

        return <table style={{width:'100%'}}>
            <thead>
                <tr>
                    {columns.map((item, index)=>{
                        return <td key={item.dataIndex}>{item.title}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item, index) => {
                    return <tr key={item.key}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                    </tr>
                })}
                    
            </tbody>
        </table>
    }
}
export default Table