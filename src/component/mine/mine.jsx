import React, {Component} from 'react'
import {render} from 'react-dom'
import TableNav from '../../component/table_nav/tableNav'
import Table from '../table/table'
import '../../common/css/antd.css'

let TableWithNav = TableNav(Table)
class Mine extends Component {
    constructor (){
        super()
    }
    render(){
        return <TableWithNav/>
    }
}
export default Mine