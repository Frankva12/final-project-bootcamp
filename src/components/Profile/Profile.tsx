import React from 'react';
import { MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
import logout from '../../assets/logout.png'
import './Profile.css'
export default function Profile() {
  return (
    <div className="d-flex align-items-center mb-4 mt-5">
        <div className="flex-shrink-0">
            <MDBCardImage
                style={{ width: '60px' }}
                className="img-fluid rounded-circle border border-dark border-3"
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                alt='Generic placeholder image'
                fluid />
        </div>
            <div className="flex-grow-1 ms-3">
                <div className="d-flex flex-row align-items-center mb-2">
                    <p className="mb-0 me-2">John Doe</p>   
                </div>
                <div>
                    <label className='logout-text'> 
                    <img src={logout} alt="log out" />
                        {' '}Log out
                    </label>
                </div>
            </div>
            <div className="d-flex justify-content-end pt-3 pr-3">
                <MDBBtn color="primary" className="me-2">
                    New Application
                </MDBBtn>
            </div>
        </div>
  );
}
