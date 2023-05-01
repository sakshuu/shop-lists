import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import * as yup from "yup"
import { useFormik } from "formik";
import { ShopListData } from '../redux/actions/shopActions';
import { useDispatch } from 'react-redux';

export default function ShopListForm() {
  const actionDispatch = useDispatch()
  const formik = useFormik ({
    initialValues: {
      shopName:"",
      area:"",
      category:"",
      openingDate:"",
      closingDate:""
    },
    validationSchema: yup.object({
      shopName:yup.string().required("Please Enter Your Shop Name"),
      area:yup.string().required("Please Choose Your Area"),
      category:yup.string().required("Please Choose Your Category"),
      openingDate: yup
      .date('Shop Opening Date is Required')
      .typeError("Shop Opening date is required") 
      .required('Please Select Your Opening Date Of Shop'),
      closingDate: yup
      .date('')           
      .typeError("Shop Closing date is required") 
      .when("openingDate",
          (started, yup) => started && yup.min(started, "you can't select before Opening Date"))
      .required('Please Select Your Closing Date Of Shop'),     
    }),
    onSubmit: (values, { resetForm }) => {
      actionDispatch(ShopListData(values))
      resetForm();
    }
  })

  return <>
  <Container>
      <Row  className="justify-content-center" >
        <Col xs={10} md={9} lg={6} sm={11}>
        <Form onSubmit={formik.handleSubmit}>
          <Card className='mt-3 mb-4'>
            <Card.Header className="text-center"><h5>SHOP LIST</h5></Card.Header>
            <Card.Body>

      <Form.Group className="mb-3">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Shop Name"
        id="shopName"
        name="shopName"
        value={formik.values.shopName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={formik.errors.shopName && formik.touched.shopName && "is-invalid"}
        />
        <Form.Text className="invalid-feedback">
         {formik.errors.shopName}
        </Form.Text>
      </Form.Group>

<Form.Label htmlFor="exampleColorInput">Choose the Area & Category of shop </Form.Label>
<div className="d-lg-flex d-md-flex d-sm-block justify-content-evenly gap-2">
<div>

      <Form.Group className="mb-3">
            <Form.Select 
            id="area"
            name="area"
            value={formik.values.area}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.area && formik.touched.area && "is-invalid"}
            >
                 <option value="">Choose area of shop</option>
                 <option value="thane">Thane</option>
                 <option value="pune">Pune</option>
                 <option value="mumbai">Mumbai Suburban</option>
                 <option value="nashik">Nashik</option>
                 <option value="nagpur">Nagpur</option>
                 <option value="ahmednagar">Ahmednagar</option>
                 <option value="solapur">Solapur</option>
                 <option value="aurangabad">Aurangabad</option>
           </Form.Select>
           <Form.Text className="invalid-feedback">
{formik.errors.area}
                </Form.Text>
                </Form.Group>
</div>
<div>
    <Form.Group className="mb-3">
            <Form.Select 
        id="category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={formik.errors.category && formik.touched.category && "is-invalid"}
            >
                 <option value="">Choose category of shop</option>
                 <option value="grocery">Grocery</option>
                 <option value="butcher">Butcher</option>
                 <option value="baker">Baker</option>
                 <option value="chemist">Chemist</option>
                 <option value="stationery">Stationery shop</option>
           </Form.Select>
           <Form.Text className="invalid-feedback">
{formik.errors.category}
                </Form.Text>
                </Form.Group>
</div>

    </div>
<Form.Group className="mb-3">
    <Form.Label htmlFor="exampleColorInput">Opening Date of shop</Form.Label>
      <Form.Control
        type="date"
id="openingDate"
name="openingDate"
value={formik.values.openingDate}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
className={formik.errors.openingDate && formik.touched.openingDate && "is-invalid"}
        />
        <Form.Text className="invalid-feedback">
         {formik.errors.openingDate}
         </Form.Text>
        </Form.Group>

<Form.Group classname="mb-3">
    <Form.Label htmlFor="exampleColorInput">Closing Date of shop</Form.Label> 
      <Form.Control
        type="date"
id="closingDate"
name="closingDate"
value={formik.values.closingDate}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
className={formik.errors.closingDate && formik.touched.closingDate && "is-invalid"}
        />
    <Form.Text className="invalid-feedback">
         {formik.errors.closingDate}
         </Form.Text>
        </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
      </Card.Body>
          </Card>
    </Form>
    
        </Col>
      </Row>
    </Container>
 
  </>
}
