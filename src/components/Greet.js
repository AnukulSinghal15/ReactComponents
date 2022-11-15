import React from 'react'

{/* export */} function Greet(prop) {  //use export when using named exports. They have to be imported with same name in curly braces
    return (
        <div className='container'>
            <p>Hello, {prop.user}</p>
        </div>
        
    )
}

export default Greet;  {/* default export can be imported with any name */}

