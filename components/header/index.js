import { Background, Group, Logo, Title, Text, Search, SearchInput } from "./styles/Header"

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}> {children} </Background>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children} </Group> 
}

Header.Logo = function HeaderLogo({ ...restProps }) {
  return ( 
    <Logo {...restProps}/>
  )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>
}

Header.Search = function HeaderSearch({ children, ...restProps }) {
  return <Search {...restProps}> {children} </Search>
}

Header.SearchInput = function HeaderSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} /> 
}