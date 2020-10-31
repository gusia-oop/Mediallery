import styled from "styled-components"

export const Frame = styled.section`
  background-image: url('https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
  backgrpund-repeat: no-repeat;
  background-size: cover;
  margin: 10px 0 100px 0;
  position: relative;

  width: 100%;
  height: 400px;

  @media(min-width: 860px) {
    height: 400px;
    backgrpund-size: top left;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 300px;
  padding: 56px 56px 40px;

  @media(min-width: 860px) {
    max-width: 550px;
    min-height: 50vh;
  }
`

export const Title = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;

  @media(min-width: 860px) {
    font-size: 28px;
  }
`

export const QuoteMarks = styled.img`

`

export const Text = styled.p`
  color: #fff;
  font-size: 14px;

  @media(min-width: 860px) {
    font-size: 18px;
  }
`

export const Image = styled.img`
  
`