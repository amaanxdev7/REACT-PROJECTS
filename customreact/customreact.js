// function customRender(reactelement,container){
//     const domElement = document.createElement(reactelement.type)
//     domElement.innerHTML = reactelement.children
//     domElement.setAttribute('href',reactelement.props.href)
//     domElement.setAttribute('target',reactelement.props.target)
//     container.appendChild(domElement)
// }

function customRender(reactelement,container){
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children

    for (let prop in reactelement.props) {

        domElement.setAttribute(prop,reactelement.props[prop])
        
    }

    container.appendChild(domElement)
}


const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click here to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)