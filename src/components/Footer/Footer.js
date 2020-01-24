import React, { useState } from "react";
import "./Footer.css";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const Footer = props => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
 
  return (
    <footer>
      <p>Date: {props.data.date}</p>
      <div>
        <Button id="Popover1" type="button">
          Copyright
        </Button>
        <Popover
          placement="top"
          isOpen={popoverOpen}
          target="Popover1"
          toggle={toggle}
        >
          <PopoverHeader>{props.data.copyright}</PopoverHeader>
          <PopoverBody></PopoverBody>
        </Popover>
      </div>
     
        <p>{props.data.explanation}</p>
       
    </footer>
    
  );
};

export default Footer;
