import { Container, Card, CardList, CardImage } from "./styles/Gallery"

export default function Gallery({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}

Gallery.Card = function GalleryCard({ children, ...restProps }) {
  return <Card {...restProps}> {children} </Card>
}

Gallery.CardList = function GalleryCardList({ children, ...restProps }) {
  return <CardList {...restProps}> {children} </CardList>
}

Gallery.CardImage = function GalleryCardImage({ children, ...restProps }) {
  return <CardImage {...restProps}> {children} </CardImage>
}