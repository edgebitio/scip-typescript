// < definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/

import React from "react";
//     ^^^^^ reference react 18.0.0 `index.js`/
//                ^^^^^^^ reference react 18.0.0 `index.js`/

import { MyProps, MyTSXElement } from "./MyTSXElement";
//       ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
//                ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                                    ^^^^^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/

export const _: (props: MyProps) => any =
//           ^ definition react-example 1.0.0 src/`UseMyTSXElement.tsx`/_.
//               ^^^^^ definition local 1
//                      ^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyProps#
    ({}) => (<MyTSXElement></MyTSXElement>)
//            ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.
//                           ^^^^^^^^^^^^ reference react-example 1.0.0 src/`MyTSXElement.tsx`/MyTSXElement.

