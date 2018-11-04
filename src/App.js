import React, { Component } from "react";
import { Helmet } from "react-helmet";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  Navbar,
  FAQSection,
  HeroText,
  TracksAndWorkshops,
  Footer,
  FooterBar
} from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://bostonhacks.io/" />
          <meta itemProp="name" content="BostonHacks - November 10th & 11th" />
          <meta
            itemProp="description"
            content="BostonHacks is Boston University's premier hackathon hosting 500 students from all over the US and Canada."
          />
          <meta
            itemProp="image"
            content="https://static.bostonhacks.io/img/logo-no-text.png"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-67825496-11"
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-67825496-11');
            `}
          </script>
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Event",
                "name": "BostonHacks",
                "startDate": "2018-11-10T9:00-04:00",
                "location": {
                  "@type": "Place",
                  "name": "Boston University - George Sherman Union",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "775 Commonwealth Avenue",
                    "addressLocality": "Boston",
                    "postalCode": "02215",
                    "addressRegion": "MA",
                    "addressCountry": "US"
                  }
                },
                "image": "https://static.bostonhacks.io/img/logo-no-text.png",
                "description": "BostonHacks is Boston University's premier hackathon hosting 500 student from all over the US and Canada.",
                "endDate": "2018-11-11T15:00-04:00",
                "offers": {
                  "@type": "Offer",
                  "url": "https://bostonhacks.io/",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": "Free",
                  "availability": "http://schema.org/InStock",
                  "validFrom": "2017-01-20T16:20-08:00"
                }
              }
            `}
          </script>
        </Helmet>

        <a name="top" />
        <div className="App">
          <Navbar />
          <div className="headerbar">
            <HeroText
              title="Boston"
              titleBold="Hacks"
              date="November 10th&ndash;November 11th"
              location="Boston University"
            />
          </div>

          <AttendAndSponsorBoxes />

          <EventSchedule />

          <TracksAndWorkshops />

          <FAQSection />

          <div className="footerFlair">
            <div className="footer">
              <Footer />
            </div>
            <FooterBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
