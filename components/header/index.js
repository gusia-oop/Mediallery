import react, { useState } from "react"
import { Background, Group, Logo, Title, Text, Search, SearchIcon, SearchInput } from "./styles/Header"

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

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [ searchActive, setSearchActive ] = useState(false)

  return(
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="Search" />
      </SearchIcon>

      <SearchInput 
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search"
        active={searchActive}
      />
  </Search>
  )
}