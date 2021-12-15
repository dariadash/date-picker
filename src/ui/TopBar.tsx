import React from 'react'
import styled from 'styled-components'

export const TopBar: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  color: #111;
  width: 100%;
  border-bottom: 1px solid #EEE;
  height: 46px;
`

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin:auto;
  height: 36px;
  padding: 4px;
  padding-right: 16px
`
