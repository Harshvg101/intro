import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>  Want to get in touch, drop me a Hi! here: </p>
        
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:harshvardhan.gupta.20033@iitgoa.ac.in"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:harshvardhan.gupta.20033@iitgoa.ac.in">MailID</a>
        </div>
        <div>
        <a href="tel:+919529975808"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919529975808">(+91) 9529975808</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}