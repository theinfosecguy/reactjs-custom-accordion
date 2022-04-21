import React from 'react'
import { Accordion } from 'reactjs-custom-accordion'
import sampleData from '../Data'
import { ArrowRight } from 'react-bootstrap-icons'
import { FaBed } from 'react-icons/fa'

function WithIcons() {
    return (
        <>
            <h4>🚀 With Custom Icons </h4>
            <Accordion
                data={sampleData}
                PlusIcon={FaBed}
                MinusIcon={ArrowRight}
                headerBackground='#0d1537'
            />
        </>
    )
}

export default WithIcons
