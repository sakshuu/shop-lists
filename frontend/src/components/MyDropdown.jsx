import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MyDropdown() {
  return <>
  <div className="m-3">
    
      <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
      <i class="bi bi-list"></i> 
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item >


        <Link className='nav-link text-center' to="/">Home</Link>
      </Dropdown.Item>
        <Dropdown.Item>
        <Link className='nav-link text-center' to="/shoplist"><i class="bi bi-shop"></i>  Add Shop List </Link>
            </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
  </>
}
