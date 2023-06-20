import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex' style={{ margin: "50px 0 10px 0", justifyContent: "center" }}>
        <div className='d-flex justify-content-between p-3'>
          <div className='me-5 d-none d-lg-block'>
            <span>Blog</span>
          </div>
          <div className='me-5 d-none d-lg-block'>
            <span>FAQs</span>
          </div>
          <div className='me-5 d-none d-lg-block'>
            <span>Contact us</span>
          </div>
        </div>

        <div className='d-flex align-items-center p-3'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>

        </div>
      </section>

      <div className=' d-flex text-center p-4' style={{ gap: "3px", margin: "20px 0 ", justifyContent: "center" }}>
        <p>© 2018 All Rights Reserved 2021. This template is made with by</p> <a href="#" style={{ color: "red", textDecoration : "none"}}>Quintus Labs</a>
      </div>
    </MDBFooter>
  );
}