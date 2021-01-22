import React from "react";
import { Accordion, Icon } from 'semantic-ui-react'

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
      <h1 className="faq"> FAQ's </h1>
      <Accordion styled >

        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >

        <h3 className="faqHeader"> What is a dog?  <Icon small name='dropdown' /> </h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >

          <h3 className="faqHeader">
          What kinds of dogs are there? <Icon name='dropdown' /> </h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
        <h3 className="faqHeader">

          How do you acquire a dog?  <Icon name='dropdown' />
          </h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
      </div>
    )
  }
}

//
// const Faq = () => {
//   return (
//     <div>
//       <div class="ui inverted segment">
//         <div class="ui inverted accordion">
//           <div class="title active">
//             <i class="dropdown icon"></i>
//             What is a dog?
//           </div>
//           <div class="content active">
//             <p class="transition visible" style={{display:" block !important"}}>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
//           </div>
//           <div class="title">
//             <i class="dropdown icon"></i>
//             What kinds of dogs are there?
//           </div>
//           <div class="content">
//             <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
//           </div>
//           <div class="title">
//             <i class="dropdown icon"></i>
//             How do you acquire a dog?
//           </div>
//           <div class="content">
//             <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
//             <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Faq;
