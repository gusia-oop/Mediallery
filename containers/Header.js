import { useState } from "react"
import Unsplash, { toJson } from "unsplash-js"
import { Header, Card } from "../components"

const unsplash = new Unsplash({
  accessKey: '10XXaxDkvtr82_9hubKwHTJSR8pVWkDxAWUIjegbMlg'
})

export default function HeaderContainer() {
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ pics, setPics ] = useState([])

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const searchPhotos = async (e) => {
    e.preventDefault()
    await unsplash.search
      .photos(searchTerm)
      .then(toJson)
      .then((json) => {
        setPics(json.results)
      })
  }

  return (
    <>
      <Header>
        <Header.Logo src="https://placeit.net/assets/backgrounds/logo.png" alt="logo" />
        <Header.Group>
          <Header.Title>The internet's source of freely-usable images<br/>Powered by creators everywhere</Header.Title>
          <Header.Search onSubmit={searchPhotos}>
            <Header.SearchInput 
              type='text'
              value={searchTerm}
              placeholder='Search'
              onChange={handleSearch}
            />
          </Header.Search>
          <Header.Text><i>Perfect for your website</i></Header.Text>
        </Header.Group>  
      </Header>

      <Card.List>
        { pics.map((pic) => 
          <Card key={pic.id}>
            <Card.Image 
              alt={pic.alt_desctiption}
              src={pic.urls.full}
              width="50%"
              height="50%"
            />
          </Card>
        )}
      </Card.List>  
    </>
  )
}