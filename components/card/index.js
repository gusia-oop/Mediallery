import { Container, List, Image } from "./styles/Card"

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}

Card.List = function CardList({ children, ...restProps }) {
  return <List {...restProps}> {children} </List>
}

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} /> 
}
