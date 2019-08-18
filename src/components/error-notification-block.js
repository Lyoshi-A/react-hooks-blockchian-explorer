import React from 'react'

function ErrorNotificationBlock({children}) {
    return <div>
        <div style={{height: '30vh'}}/>
        <h2 className="double-space text-center">{children}</h2>
        <div className="text-center">
            <a href="/">Back to home page</a>
        </div>
    </div>
}


export default ErrorNotificationBlock