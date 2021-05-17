import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Footer() {

  return (
      <div className="footer" >
        <Container className="footer-container" >
          
            <Row className="footer-row">
            <Col className="icons">

            <a href="https://www.youtube.com/channel/UCYeJD4pTFJKJ4LGUUr4Xkvw">
            <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'youtube']}  size="2x"/>
            </a>
            </Col>  
                

                <Col className="icons" >
                    <a  href="https://twitter.com/ByteSizeEvents">
                        <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'twitter']}  size="2x"/>
                    </a>
                    
                
                </Col>
                <Col className="icons"> 
                <a  href="https://discord.com/invite/FycPvf6W3e">
                        <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'discord']}  size="2x"/>
                    </a>
                 </Col>
                <Col  className="icons" >
                    
                    <a  href="https://www.linkedin.com/company/bytesizeevents">
                        <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'linkedin']}  size="2x"/>
                    </a>
                    
                
                </Col>
                <Col className="icons">

                    <a href="https://www.instagram.com/bytesizeevents/">
                    <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'instagram']}  size="2x"/>
                </a>
                </Col>
                <Col  className="icons">

                    <a href="https://www.twitch.tv/bytesizeevents">
                    <FontAwesomeIcon style={{ color: 'black' }} icon={['fab', 'twitch']}  size="2x"/>
                </a>
                </Col>
            

            
        </Row> 
      </Container>

      </div>
      
  )
}