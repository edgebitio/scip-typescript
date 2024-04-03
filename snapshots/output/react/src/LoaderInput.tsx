// < definition react-example 1.0.0 src/`LoaderInput.tsx`/

import React from 'react'
//     ^^^^^ reference react 18.0.0 `index.js`/
//                ^^^^^^^ reference react 18.0.0 `index.js`/

/** Takes loading prop, input component as child */
interface Props {
//        ^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading: boolean
//^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
  children: React.ReactNode
//^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//          ^^^^^ reference react 18.0.0 `index.js`/
}

export const LoaderInput: (props: Props) => any = ({
//           ^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                         ^^^^^ definition local 1
//                                ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
  loading,
//^^^^^^^ definition local 5
//^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
  children,
//^^^^^^^^ definition local 6
//^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
}) => (
  <div className="hello">
//     ^^^^^^^^^ reference local 11
    {children}
//   ^^^^^^^^ reference local 6
    {loading && <p>spinner</p>}
//   ^^^^^^^ reference local 5
  </div>
)

export const LoaderInput2: (props: Props) => any = props => {
//           ^^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput2.
//                          ^^^^^ definition local 13
//                                 ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
//                                                 ^^^^^ definition local 15
  return <LoaderInput loading={true} key="key" children={props.children} />
//        ^^^^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                    ^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
//                                   ^^^ reference local 19
//                                             ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//                                                       ^^^^^ reference local 15
//                                                             ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
}

