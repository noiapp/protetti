
import React from "react";
// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/italy.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Noi App Community COVID-19 Tracking</h1>
            <h3>Noi App project aims to create a contact tracing mobile based on the <a href="https://github.com/DP-3T">DP-3T standard </a>, specifically aimed at the Italian population. This standard is designed to be privacy respectful and does not share information, except anonymized data for voluntary disclosure by people who find themself infected. Those data can then be checked by the app to verify if you were in contact with someone infected.

Furthermore, this standard appears to be compatible with the upcoming API of Apple/Google for contact tracing.

The application in the current shape has been developed native both for Android SDK and IPhone SDK, including as modules the DP-3T SDK, with a Java Backend written using Spring.Boot. The technology stack may change over time.</h3>
          <br />
	  <p>Here we provide you the packages of the application, ready to be installed in your phone.
	  </p>
          <Button
              href="https://github.com/noiapp/noi-app-android/releases"
              className="btn-round" color="neutral" type="button" outline
              color="neutral"
              target="_blank"
              outline>
	  NOIAPP ANDROID
  </Button>
            
          <Button href="./pkg/noiapp.api"
      className="btn-round" color="neutral" type="button" outline
      color="neutral" disabled>
	 NOIAPP IPHONE / WORK IN PROGRESS 
          </Button>
	  
          </div>
        </Container>
      </div>
    </>
  );
}
export default LandingPageHeader;
