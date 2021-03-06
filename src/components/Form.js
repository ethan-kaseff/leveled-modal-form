import React, { useState, useEffect } from "react";

// https://react-bootstrap.github.io/components/accordion/
import Accordion from 'react-bootstrap/Accordion'

// Misc Resource
// https://www.freakyjolly.com/react-bootstrap-accordion-with-customized-style-and-active-panel-style-example/

// Check Marks
// https://icons.getbootstrap.com/icons/check-circle-fill/
// https://icons.getbootstrap.com/icons/check-circle/

import './Form.css'

function Form() {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [active, setActive] = useState('0')

  useEffect(() => {

  }, [])

  return (
    <>
      <Accordion defaultActiveKey={active}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {!one && (
              <div className='number-check-container'>
                <div className='number'>
                  1
                </div>
              </div>
            )}
            {one && (
              <div className='number-check-container'>
                <div className='checks green'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>
              </div>
            )}
            Initialize Your Wallet
          </Accordion.Header>
          <Accordion.Body>
            <div className='description'>
              To get setup to purchase virtual land with Parcels, you must initialize
              your wallet, which requires a one time gas fee.
            </div>
            <div className='button-div'>
              <button 
              onClick={() => {
                setOne(true);
                setActive('1')
              }}
              className='btn btn-primary'
              >
                Initialize
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {!two && (
              <div className='number-check-container'>
                <div className='number'>
                  2
                </div>
              </div>
            )}
            {two && (
              <div className='number-check-container'>
                <div className='checks green'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>
              </div>
            )}
            Approve Token
          </Accordion.Header>
          <Accordion.Body>
            <div className='description'>
              Please approve the current token.
            </div>
            <div className='button-div'>
              <button
                onClick={() => {
                  setTwo(true);
                }}
                className='btn btn-primary'
              >
                Approve
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {!three && (
              <div className='number-check-container'>
                <div className='number'>
                  3
                </div>
              </div>
            )}
            {three && (
              <div className='number-check-container'>
                <div className='checks green'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>
              </div>
            )}
            Confirm Listing
          </Accordion.Header>
          <Accordion.Body>
            <div className='description'>
              Accept the signature request in your wallet and wait for your listing
              to process.
            </div>
            <div className='button-div'>
              <button
                onClick={() => {
                  setThree(true);
                }}
                className='btn btn-primary'
              >
                Confirm
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Form;