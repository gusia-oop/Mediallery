import { Footer } from "../components"
import Link from "next/link"

export default function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link><Link href="#"><a>About Us</a></Link></Footer.Link>
            <Footer.Link><Link href="#"><a>Partner Program</a></Link></Footer.Link>
            <Footer.Link><Link href="#"><a>Newest Images</a></Link></Footer.Link>
            <Footer.Link><Link href="#"><a>Free Pictures</a></Link></Footer.Link>
          </Footer.Column>  

          <Footer.Column>
            <Footer.Link><Link href="#"><a>Become a Contributor</a></Link></Footer.Link>
            <Footer.Link><Link href="#"><a>API Program</a></Link></Footer.Link>
            <Footer.Link><Link href="#"><a>Careers</a></Link></Footer.Link>
            <Footer.Link><Link href="#"><a>Referral Program</a></Link></Footer.Link>
          </Footer.Column>
        </Footer.Row>    
      </Footer>
    </>
  )
}