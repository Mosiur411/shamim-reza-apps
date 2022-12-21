import React, { useEffect } from 'react'

export default function LoadNumber() {
    useEffect(() => {
        document.getElementById("ipf").focus()




    }, [])
    return (
        <div>
            <input type='number' id="ipf" />
        </div>
    )
}
