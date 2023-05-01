import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ShopListDelete, ShopListShow } from '../redux/actions/shopActions'
import MyModal from './MyModal'

export default function Home() {
  const actionDispatch =  useDispatch()
  const {ShopList,ShopListEdit, ShopListremove} = useSelector(state => state.allShopList)
  const [shoplistdata, setshoplistdata] = useState({})
  const [allDataShopList, setallDataShopList] = useState([])

  useEffect(() => {
    actionDispatch(ShopListShow())
  }, [ShopListEdit,ShopListremove ])

useEffect(() => {
  ShopList && setallDataShopList(ShopList)}, [ShopList])
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true)
    setshoplistdata(item)
  };
  
  const [showModal, setShowModal] = useState(false);

const handleCloseDelete = () => {
    actionDispatch(ShopListDelete(shoplistdata.id))
    setShowModal(false)
} 

  const handleShowDelete = (item) => {
    setshoplistdata(item)
    setShowModal(true)
}

  const handleSearcharea = searchTearm => {
    const result = ShopList.filter(item => item.area.includes(searchTearm))
    setallDataShopList(result)
}

  const handleSearchcategory = searchTearm => {
    const result = ShopList.filter(item => item.category.includes(searchTearm))
    setallDataShopList(result)
}

  return <>
  <Container> 
   <Form>
<div className="d-flex gap-3">
              <InputGroup>
              <InputGroup.Text id="btnGroupAddon"><i class="bi bi-search"></i></InputGroup.Text>
              <Form.Control
            type="text"
            placeholder="Area of shop search..."
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            onChange={e => handleSearcharea(e.target.value)}      />
            </InputGroup>

              <InputGroup>
              <InputGroup.Text id="btnGroupAddon"><i class="bi bi-search"></i></InputGroup.Text>
              <Form.Control
            type="text"
            placeholder="Category of shop search..."
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            onChange={e => handleSearchcategory(e.target.value)}      />
            </InputGroup>
            </div>
              </Form>
  </Container>

<Container fluid>
  <Row className="mt-4">
{
  allDataShopList &&  allDataShopList.map(item => <Col key={item.id} sm={6} lg={4} md={6}>
<Card className="mb-3">
   <Card.Header className="d-flex gap-2 justify-content-center">Shop Name : <h5>{item.shopName}</h5> </Card.Header>
  <Card.Body className="p-4">
    <ul>
      <li>
      <div className="d-flex gap-1">Area Of Shop :<h6>{item.area}</h6> </div>
      </li>
      <br/>
      <li>
      <div className="d-flex gap-1">Category Of Shop :<h6>{item.category}</h6> </div>
      </li>
      <br/>
      <li>Opening Date : {item.openingDate}</li>
      <br/>
      <li>Closing Date : {item.closingDate}</li>
    </ul>
  </Card.Body>
 <Card.Footer>
    <div className="d-flex justify-content-center gap-3">
      
<Button variant="outline-info" onClick={e => handleShow(item)}><i class="bi bi-pencil-fill"></i>edit</Button>
    <Button  variant="outline-info" onClick={e => handleShowDelete(item)}><i class="bi bi-trash"></i> delete</Button>
    </div>
  </Card.Footer>
</Card>
        </Col>
)}
</Row>
</Container>

<Modal show={showModal} onHide={handleCloseDelete} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>You want delete this Shop List ?</Modal.Title>
        </Modal.Header>
        <Modal.Body> You can delete this todo at any time. If you change your mind, you
        might not be able to recover it</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


<Modal  show={show} onHide={handleClose}>
<Modal.Header closeButton>
          <Modal.Title>Edit shop list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyModal shoplistdata={shoplistdata} handleClose={handleClose}/>
          </Modal.Body>
      </Modal>


  </>
}
