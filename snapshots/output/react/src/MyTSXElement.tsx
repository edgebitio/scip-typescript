// < definition react-example 1.0.0 src/`MyTSXElement.tsx`/

import React from 'react'
//     ^^^^^ reference react 18.0.0 `index.js`/
//                ^^^^^^^ reference react 18.0.0 `index.js`/

export interface MyProps {}
//               ^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#

export const MyTSXElement: (props: MyProps) => any = ({}) => (<p></p>)
//           ^^^^^^^^^^^^ definition react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                          ^^^^^ definition local 1
//                                 ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#

