import React from "react";
import { Accordion, Icon, Container } from 'semantic-ui-react'

import Navbar from "./Navbar";

class Faq extends React.Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
      <Navbar />
      <Container fluid stackable>
      <Accordion stackable styled >
      <h1 className="faq"> FAQ's </h1>

        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >

        <h3 className="faqHeader"> Should I Get Rich or Die Trying?  <Icon small name='dropdown' /> </h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <h4>
          Yes.
          </h4>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >

          <h3 className="faqHeader">
          Is This A Real Product? <Icon name='dropdown' /> </h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <h4>
          No, but the data is.
          </h4>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
        <h3 className="faqHeader">

          How Are You So Brilliant To Think Of Such A Concept?  <Icon name='dropdown' />
          </h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <h4>
            I'm not sure.
          </h4>

        </Accordion.Content>
      </Accordion>
      </Container>

      </div>
    )
  }
}


export default Faq;
