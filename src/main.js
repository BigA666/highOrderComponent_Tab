import React from 'react'
import ReactDOM from 'react-dom'
import * as redux from 'redux'
// console.log(redux)
let {createStore} = redux
// createStore 参数: reducer,initstate,options
// reducer 就是一个“纯函数”  参数；state,action
function reducer (state=0, action) {
    typeof 
    console.log(action)
    if(action.type=='increment'){
        return state + action.step
    }else if (action.type == 'decrement'){
        return state - action.step
    }else {
        return state + action.step
    }
    
}
// 创建数据容器 提供的核心api是 getState subscribe dispatch
let store = createStore(reducer)
// 改变store的数据 action必须是惟一的
// let action = { // 规范传法
    
// }
// store.dispatch(action)
// console.log(store.getState())
function actionCreate (type) {
    return {
        type: type,
        step: 2
    }
}

let increment_btn = document.querySelector('.increment')
let decrement_btn = document.querySelector('.decrement')
let count = document.querySelector('.count')

increment_btn.onclick=function(){
    store.dispatch(actionCreate('increment'))
} 

decrement_btn.onclick=function(){
    store.dispatch(actionCreate('decrement'))
}
// 每次store的数据发生变化都会触发subscribe
store.subscribe(function(){
    count.innerHTML = store.getState()
    console.log(store.getState())
})

// ReactDOM.render(
//     <div>111</div>,
//     document.querySelector('#root')
// )




// map 与 forEach 的区别
// let arr = [1, 2, 3]
// let brr = arr.forEach((val, index) => {
//     return val + 1
// })
// let brr = arr.map((val, index) => {
//     return val + 1
// })
// map 不改变原数组
// 返回一个新数组 （要记得 return, 否则会返回undefined）

// forEach
// 不改变原数组
// console.log(brr) // undefinde  即无返回值 要想得到操作后的新数组需要 push
// console.log(brr)