import { Frame, Image, Card, Title, QuoteMarks, Text } from "./styles/Collage"

export default function Collage({ chidlren, ...restProps }) {
  return <Frame {...restProps}> {chidlren} </Frame>
}

Collage.Image = function CollageImage({...restProps}) {
  return <Image {...restProps} />
}

Collage.Card = function CollageCard({ children, ...restProps }) {
  return <Card {...restProps}> {children} </Card>
}

Collage.Title = function CollageTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>
}

Collage.QuoteMarks = function CollageQuoteMarks({ ...restProps }) {
  return <QuoteMarks {...restProps} />
}

Collage.Text = function CollageText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>
}
