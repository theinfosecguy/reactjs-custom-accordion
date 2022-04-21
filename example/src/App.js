import React from 'react'
import Default from './components/Default'
import WithIcons from './components/WithIcons'
import WithOpen from './components/WithOpen'

const App = () => {
    return (
        <>
            <header>
                <h1 class='slate-h1'>
                    <span>Custom Accordion for </span>
                    <span className='grad-color'>
                        <span className='grad-span'>ReactJS & NextJS</span>
                    </span>
                    <br />
                    <a
                        href='https://theinfosecguy.xyz'
                        className='hover-underline-animation'
                    >
                        <small>By @theinfosecguy</small>
                    </a>
                </h1>
            </header>
            <Default />
            <WithIcons />
            <WithOpen />
            <footer>
                <a
                    href='https://github.com/theinfosecguy/reactjs-custom-accordion'
                    className='hover-underline-animation'
                >
                    <small>GitHub</small>
                </a>{' '}
                |{' '}
                <a
                    href='https://www.npmjs.com/package/reactjs-custom-accordion'
                    className='hover-underline-animation'
                >
                    <small>NPM</small>
                </a>{' '}
                |{' '}
                <a
                    href='https://theinfosecguy.xyz'
                    className='hover-underline-animation'
                >
                    <small>@theinfosecguy</small>
                </a>
            </footer>
        </>
    )
}

export default App
