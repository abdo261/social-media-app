import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

const NextUiPro = ({children,className}) => {
  return (
    <NextUIProvider className={className}>{children}</NextUIProvider>
  )
}

export default NextUiPro