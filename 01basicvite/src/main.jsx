import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {

        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

function MyApp(){
    return (
        <div>
            <h1>Custom react App</h1>
        </div>
    )
}

const aReactElement = React.createElement(
    'a',
    {href:'https://google.com', target: "_blank"},
    'click to visit google'
)

createRoot(document.getElementById('root')).render(
    aReactElement
)
