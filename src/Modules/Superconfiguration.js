import React from 'react';

import ArrowUp from "../assets/Images/Group 10162.svg";
import UploadIcon from "../assets/Images/upload_black_24dp.svg";
import SaveIcon from "../assets/Images/save_black_24dp.svg";
import ImageElement from "../assets/Images/Group 10166.svg";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import Form from "./../Components/Forms/OrgSetupForm";

const Super = () => {
  return (
    <>
      <div className='left-bar'>
        <ul>
          <li><a href='https://example.com'>Services Offered</a></li>
          <li><a className='active' href='https://example.com'>Org Setup</a></li>
        </ul>
      </div>
      <div className='section-content'>
        <div className='title'>
          <h1>Org Setup</h1>
        </div>
        <div className='section-inner'>
          <div className='accordion-main'>
          <Accordion>
            <AccordionItem>
                      <div className='main-header'>
                          <div className='panel-top-left'>
                            <h2>Details</h2>
                            <span>Page to configure all the company details</span>
                          </div>
                          <div className='panel-top-right'>
                            <form>
                              <div className='fileupload'>
                                <input type='file' name='upload' values="Bulk Upload" />
                                <span><i><img src={UploadIcon} alt="" /></i>Bulk Upload</span>
                              </div>
                              <div className='save'>
                                <input type='button' name='save' value="save"/>
                                <span><i><img src={SaveIcon} alt="" /></i>Save</span>
                              </div>
                            </form>
                          </div>
                      </div>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <img src={ArrowUp} alt='' />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Form />
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                      <div className='main-header'>
                          <div className='panel-top-left'>
                            <h2>Lock Setup</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                          </div>
                          
                      </div>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <img src={ArrowUp} alt='' />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                      <div className='main-header'>
                          <div className='panel-top-left'>
                            <h2>Integration Info</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                          </div>
                          
                      </div>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <img src={ArrowUp} alt='' />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                      <div className='main-header'>
                          <div className='panel-top-left'>
                            <h2>AI Info</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                          </div>
                          
                      </div>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <img src={ArrowUp} alt='' />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
          </div>
        </div>
        <div className='image-element'>
          <img src={ImageElement} alt='' />
        </div>
      </div>
      
    </>
  );
};

export default Super;