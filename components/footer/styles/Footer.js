import styled from "styled-components"

export const Frame = styled.section`
  background-color: rgba(8, 8, 8, 0.3);
  padding: 20px;
`

export const Link = styled.a`
  margin-bottom: 5px;
`

export const Title = styled.h1`
  padding-left: 50px;

  @media(min-width:980px) {
    padding-left: 200px;
  }
`

export const Text = styled.p`

`

export const Break = styled.div`

`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media(min-width: 980px) {
    margin: 0 120px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`