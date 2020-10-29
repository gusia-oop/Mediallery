import { Frame, Link, Title, Text,Column, Row, Break } from "./styles/Footer"

export default function Footer({ children, ...restProps}) {
  return <Frame {...restProps}> {children} </Frame>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}> {children} </Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}> {children} </Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}> {children} </Column>
}

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />
}
