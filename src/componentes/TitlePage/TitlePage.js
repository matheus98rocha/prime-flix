import React from 'react'
import { TitleWrapper } from './titlepage.styles'

function TitlePage({title}) {
  return (
    <TitleWrapper>
    <h1>{title}</h1>
    </TitleWrapper>
  )
}

export default TitlePage