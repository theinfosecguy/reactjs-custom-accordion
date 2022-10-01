# <center> Custom React Accordion for ReactJS & NextJS </center>

🚀 A Complete Custom Accordion for ReactJS &amp; NextJS 🚀


[![NPM](https://img.shields.io/npm/v/reactjs-custom-accordion.svg)](https://www.npmjs.com/package/reactjs-custom-accordion) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM Downloads](https://img.shields.io/npm/dm/reactjs-custom-accordion)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/reactjs-custom-accordion)

## Live Demo

_[Demo Link](https://theinfosecguy.github.io/reactjs-custom-accordion/)_

## Install

Using NPM:

```
npm install reactjs-custom-accordion
```

Using Yarn:

```
yarn add reactjs-custom-accordion
```


## Usage

```jsx
import React from 'react'
import { Accordion } from 'reactjs-custom-accordion'

function Demo() {
  
  const sampleData = [
    {
      title: 'title 1',
      description: 'description 1'
    },
    {
      title: 'title 2',
      description: 'description 2'
    }
  ]

    return (
        <>
            <h4>🚀 Default Accordion with sample data</h4>
            <Accordion data={sampleData} />
        </>
    )
}

export default Demo
```

## Props


| Name              | Type                 | Default                | Optional |
| ---------------   | -------------------- | ---------------------- | -------- |
| `data`              | Array of Objects     | `undefined`              | ❌    |
| `PlusIcon`          | Component     | `AiOutlinePlusSquare`              | ✅    |
| `MinusIcon`              | Component     | `AiOutlineMinusSquare`              | ✅    |
| `headerBackground`              | String     | `#1a1a1a`              | ✅    |
| `footerBackground`              | String     | `#fff`              | ✅    |
| `plusIconSize`              | String     | `25px`              | ✅    |
| `minusIconSize`              | String     | `25px`              | ✅    |
| `plusIconColor`              | String     | `#fff`              | ✅    |
| `minusIconColor`              | String     | `#fff`              | ✅    |
| `accordionWidth`              | String     | `80%`              | ✅    |
| `roundedBorders`              | Boolean     | `false`              | ✅    |
| `defaultOpen`              | Boolean     | `false`              | ✅    |
| `defaultOpenIndex`              | Integer     | `undefined`              | ✅    |
| `defaultAllOpen`              | Boolean     | `false`              | ✅    |
| `rootClass`              | String     | `undefined`              | ✅    |
| `cardClass`              | String     | `undefined`              | ✅    |
| `headerClass`              | String     | `undefined`              | ✅    |
| `footerClass`              | String     | `undefined`              | ✅    |


## Usage with Props


```jsx
import React from 'react'
import { Accordion } from 'reactjs-custom-accordion'
import {FaBed} from "react-icons/fa"
import sampleData from '../../Data' 

function Demo() {
    return (
        <>
            <Accordion
                data={sampleData} 
                defaultOpen={true} // Set to true if need to open any Accordion by default
                defaultOpenIndex={0} // Index of Accordion to open by default
                roundedBorders={true} // Set to true if need rounded borders
                PlusIcon={FaBed} // Icons from React Icons
                headerBackground="#444" // Color code, RGB Code or Color Name
                plusIconSize="30px" // Size of Icon
                accordionWidth="90%" // Width of Accordion with regard to Root Container
                rootClass="custom-root-class" // Custom class of Root Container
                cardClass="custom-card-class" // Custom class of Accordion Card
                headerClass="custom-header-class" // Custom class of Header
                footerClass="custom-footer-class" // Custom class of Footer
            />
        </>
    )
}

export default Demo
```

_Checkout Example App in [`/example`](https://github.com/theinfosecguy/reactjs-custom-accordion/tree/main/example) Directory_

## License

MIT © [theinfosecguy](https://github.com/theinfosecguy)
