
import React from "react";

// reactstrap components
import {
    Container,
    ListGroup,
    ListGroupItem,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
          <h2 className="title">Why Noi App Community?</h2>
	  
          <Container>
	  <div className="motto text-center">
	  <Row>
	  <h4>
	  An Italian app is supposed to be being developed, although the status is unknown. The facts are:</h4>
	  </Row>
	  <Row>
	    <ListGroup>
      <ListGroupItem>
        <h4>A private company in Italy was selected to develop the application.</h4>
        </ListGroupItem>
	  <ListGroupItem><h4>We explicitly asked about the release of the source code, but no answer has been (yet) given. </h4></ListGroupItem>
	  <ListGroupItem><h4>
    We were told informally that the source code would be released, but nothing official
    even if the code will be released, it is to be seen if what is released is complete enough and documented enough that can be reviewed by the community
    this company is a member of the PEPP-PT organization, and it has been disclosed the app will use the PPPT-DT standard.</h4></ListGroupItem>
    <ListGroupItem><h4>The PEPP-PT organization is basically an invite-only organization. Nothing is known about how it works internally. At the moment, no public source code has yet been released, although they declare the code to be Mozilla licensed</h4></ListGroupItem>
      <ListGroupItem><h4>The standard PPPT-DP is also designed to include centralized control of contact information.
    In the last few days, the relationship among PEPP-DP and DP-3T has gone awry, as any reference to DP-3T was removed from PEPP-DP</h4></ListGroupItem>
     
	  </ListGroup>
	  </Row>
	  </div>
	  </Container>
                <br />
              </Col>
            </Row>
           
           
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            
            <h2 className="title">We strongly believe citizen's privacy is very important.</h2>
            <h2 className="title">So what have we done?</h2>
            <Row><h4>Analyzed the PPPT-DP protocol and seen that it is not trustful from the privacy point of view.</h4></Row>
            <Row>
            <h4>Developed as an opensource project from the ground up,community-oriented, without any relationship with private organizations
    using the "alternative" standard D3PT (decentralized) as opposed to the PEPP-DP (centralized) standard
    able to be integrated with the upcoming APIs from Apple and Google.
 </h4>
    
              </Row>
              <Row>
            <h4>We are currently working on making the DP3T app localized and available for Italy, and provide the server infrastructure</h4>
  
              </Row>
          </Container>
        </div>
        <div className="section landing-section text-center">
          <Container>
                <h2 className="title">Do you want to help us?</h2>
               <Row>
      <h4>If you want to collaborate, join us on Slack with this <a href="https://join.slack.com/t/noiapp/shared_invite/zt-dzdakd34-KvCn3HMlebqTH4ewlGamhg">Invite Link</a>
    </h4>
    </Row>
    <Row>
      <h4><a href="https://groups.google.com/forum/#!forum/noiapp/join">Subscribe</a> to the this Google Group for normative decisions.</h4>
    </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}
export default LandingPage;
