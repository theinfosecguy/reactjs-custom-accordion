import React from 'react'
import { Accordion } from 'reactjs-custom-accordion'
import sampleData from '../Data'

function Default() {
    return (
        <>
            <h4>🚀 Default</h4>
            <Accordion data={sampleData} />
        </>
    )
}

export default Default
