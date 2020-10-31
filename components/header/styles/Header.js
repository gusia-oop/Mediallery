import styled from "styled-components"

export const Background = styled.section`
  background-image: url('https://miro.medium.com/max/2625/1*3yWASuhfcFW_VQX7iKG6jw.jpeg');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  text-align: center; 
  height: 80vh; 
  
  
  @media(min-width: 740px) {
    height: 80vh;
  }
`

export const Group = styled.div`
  padding-top: 80px;
  @media(min-width: 980px) {
    padding-top: 50px;
  }
`

export const Title = styled.p`
  color: #fff;
  font: 24px bold;

  @media(min-width:1200px) {
    font-size: 32px;
  }
`

export const Text = styled.p`
  padding-top: 50px;
  color: #fff;

  @media(min-width:1200px) {
    padding-top: 100px;
  }
`

export const Logo = styled.img`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  
  @media(min-width: 980px) {
    width: 150px;
    height: 55px;
    margin-top: 20px;
  }
`

export const Search = styled.form`
  
`

export const SearchInput = styled.input`
  background-color: rgba(247, 167, 141, 0.8);
  color: #000;
  font-size: 16px;
  height: 7vh;
  width: 350px;
  padding-left: 10px;
  border: none;
  border-radius: 20px;

  :focus{
    border: 2px solid #FAC4B3;
    outline: none;
    font-size: 16px;
  }

  ::placeholder{
    color: #000;
    font-size: 16px;
  }

  @media(min-width: 980px) {
    width: 600px;
    height: 8vh;
  }
`
