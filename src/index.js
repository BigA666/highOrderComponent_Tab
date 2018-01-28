import React from 'react'
import ReactDOM from 'react-dom'
import * as redux from 'redux'
/**
 * createStore(reducer) 参数名必须是reducer 是17个11纯函数
 * 该纯函数有两个参数 第一个参数 state 是纯函数执行后的一个返回值
 *                  第二个参数 action 是store.dispatch({}) 进来的对象
 */
let {createStore} = redux

function count (state=0, action) { 
    if(action.type=='increment'){
        return state + action.step
    }else if (action.type == 'decrement'){
        return state - action.step
    }else {
        return state
    }

    
}
function getlist(state=[], action){
    
    let arr=[...state]
    
    if (action.type == 'add_new'){
        arr.push(action.data)
    }
    return arr
}
function reducer (state, action) {
    // console.log(action)
    return {
        count: count(state.count, action), // 会执行
        arr: getlist(state.arr, action)
    }
}
// 创建数据容器 提供的核心api是 getState subscribe dispatch
let store = createStore(reducer, {count: 1, arr: ['是谁多事种芭蕉']}) // 参数二： state的值

// 改变store的数据 action必须是惟一的
function actionCreate (type) {
    return {
        type: type,
        step: 2
    }
}

let increment_btn = document.querySelector('.increment')
let decrement_btn = document.querySelector('.decrement')
let countDom = document.querySelector('.count')
let poem = document.querySelector('.poem')
let add = document.querySelector('.add')

increment_btn.onclick=function(){
    store.dispatch(actionCreate('increment'))
    
} 

decrement_btn.onclick=function(){
    store.dispatch(actionCreate('decrement'))
}
add.onclick = function(){
    let val = poem.value 
    store.dispatch({
        type: 'add_new',
        data:  val
    })
}
// 每次store的数据发生变化都会触发subscribe
store.subscribe(function(){
    countDom.innerHTML = store.getState().count
    console.log(store.getState())
})
