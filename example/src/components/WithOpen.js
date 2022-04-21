import React from 'react'
import { Accordion } from 'reactjs-custom-accordion'
import sampleData from '../Data'

function WithOpen() {
    return (
        <>
            <h4>🚀 With Open Accordion (Index Based) & Rounded Border </h4>
            <Accordion
                data={sampleData}
                defaultOpen={true}
                defaultOpenIndex={0}
                roundedBorders={true}
            />
        </>
    )
}

export default WithOpen
