import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h3>hello rjs</h3>
    )
}
// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click here to visit google'
// }

const AnotherElement =(
    <a href="https://google.com" target ="_blank">gooogleee</a>
)
const name = 'amaannnnnn'
const reactElement = React.createElement(
    'a',
    { href:'https://google.com',
        target:'_blank'},
        'click here to visit google',
        name
)



    ReactDOM.createRoot(document.getElementById('root')).render(
        reactElement
    )
