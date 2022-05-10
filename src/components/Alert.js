import React from 'react'

function Alert(props) {
    const capatilized =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // its meaning is that if props.alert is true then div part will return and if it is false then nothing will return
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
            <strong>{capatilized(props.alert.type)}</strong> : {props.alert.msg}
            {/* here initially it is null so you will find the error but this syntax is very sexy that community is also using  */}
        </div>
    )
}

export default Alert;

