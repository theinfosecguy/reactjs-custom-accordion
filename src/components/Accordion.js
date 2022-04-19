import React, { useState } from 'react'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import '../css/Accordion.css'
import {
    getButtonStyles,
    widthStyles,
    backgroundStyles
} from '../helpers/getStyles'

export const Accordion = ({
    data,
    PlusIcon,
    MinusIcon,
    headerBackground,
    footerBackground,
    plusIconSize,
    minusIconSize,
    plusIconColor,
    minusIconColor,
    accordionWidth,
    roundedBorders = false,
    defaultOpen = false,
    defaultOpenIndex = 0,
    defaultAllOpen = false,
    rootClass = '',
    cardClass = '',
    headerClass = '',
    footerClass = ''
}) => {
    const [open, setOpen] = useState(defaultOpen)
    const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

    const plusIconStyles = getButtonStyles(plusIconColor, plusIconSize)
    const minusIconStyles = getButtonStyles(minusIconColor, minusIconSize)
    const cardStyles = widthStyles(accordionWidth)
    const headerStyles = backgroundStyles(headerBackground)
    const footerStyles = backgroundStyles(footerBackground)

    const handleOnClick = (index) => {
        setOpen(!open)
        setOpenIndex(index)
        openIndex !== index && setOpen(true)
    }

    return (
        <section className={`accordion-root ${rootClass}`}>
            {data.map((item, index) => {
                return (
                    <div
                        className={`accordion-card ${cardClass}`}
                        key={index}
                        style={cardStyles}
                    >
                        <div
                            style={headerStyles}
                            className={`accordion-head flex bg-gray-900 text-white ${
                                roundedBorders
                                    ? open && openIndex === index
                                        ? 'rounded-t'
                                        : 'rounded'
                                    : ''
                            } ${headerClass}`}
                            onClick={() => handleOnClick(index)}
                        >
                            <span>{item?.title}</span>
                            {(open && openIndex === index) || defaultAllOpen ? (
                                MinusIcon ? (
                                    <MinusIcon
                                        style={minusIconStyles}
                                        className='minus-icon'
                                    />
                                ) : (
                                    <AiOutlineMinusSquare
                                        className='minus-icon'
                                        style={minusIconStyles}
                                    />
                                )
                            ) : PlusIcon ? (
                                <PlusIcon
                                    style={plusIconStyles}
                                    className='plus-icon'
                                />
                            ) : (
                                <AiOutlinePlusSquare
                                    className='plus-icon'
                                    style={plusIconStyles}
                                />
                            )}
                        </div>
                        {(open && openIndex === index) || defaultAllOpen ? (
                            <div
                                className={`accordion-body ${
                                    roundedBorders ? 'rounded-b' : ''
                                } ${footerClass}`}
                                style={footerStyles}
                            >
                                <span>{item?.description}</span>
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </section>
    )
}
