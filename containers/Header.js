import { useState } from "react"
import { Header } from "../components"

export default function HeaderContainer() {
  const [ searchTerm, setSearchTerm ] = useState('')

  return (
    <>
      <Header>
        <Header.Logo src="https://placeit.net/assets/backgrounds/logo.png" alt="logo" />
        <Header.Group>
          <Header.Title>The internet's source of freely-usable images<br/>Powered by creators everywhere</Header.Title>
          <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Header.Text><i>Perfect for your website</i></Header.Text>
        </Header.Group>  
      </Header>
    </>
  )
}