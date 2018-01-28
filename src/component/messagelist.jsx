import React, {Component} from 'react'
import Message from './message.jsx'
import PropTypes from 'prop-types'

class MessageList extends Component {
    getChildContext(){
        return {
            bg: 'red',
            text: '确定'
        }
    }
    render () {
        let {listData} = this.props 
        let list = listData.map((item, index) => <Message key={index} message={item.message} bg={item.bg} text={item.text}/>)
        // console.log(list) // symbol对象组成的数组
        return list
    }
}
MessageList.childContextTypes = {
    bg: PropTypes.string,
    text: PropTypes.string
}
export default MessageList