import React, {Component} from 'react'
import Button from './button.jsx'
class Message extends Component {
    render () {
        let {message, bg, text} = this.props
        // console.log(<p>{message}<Button bg={bg} text={text}></Button></p>) // symbol对象
        return <p>{message}<Button bg={bg} text={text}></Button></p>
    }
}
export default Message