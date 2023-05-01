import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import * as yup from "yup"
import { useFormik } from 'formik';
import { ShopListUpdate } from '../redux/actions/shopActions';
import { useDispatch, useSelector } from 'react-redux';

export default function MyModal({shoplistdata, handleClose}) {
  const actionDispatch = useDispatch()
  const formik = useFormik ({
    enableReinitialize:true,
    initialValues: {
      shopName:shoplistdata?.shopName,
      area:shoplistdata?.area,
      category:shoplistdata?.category,
      openingDate:shoplistdata?.openingDate,
      closingDate:shoplistdata?.closingDate
    },
    validationSchema: yup.object({
      shopName:yup.string().required("Please Enter Your Shop Name"),
      area:yup.string().required("Please Choose Your Area"),
      category:yup.string().required("Please Choose Your Category"),
      openingDate:yup.string().required("Please Select Your Opening Date Of Shop"),
      closingDate:yup.string().required("Please Select Your Closing Date Of Shop"),
    }),
    onSubmit: (values, { resetForm }) => {
      actionDispatch(ShopListUpdate(shoplistdata.id,values))
      resetForm();
    }
  })

  
  return <>
  
  <Form onSubmit={formik.handleSubmit}>
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
<div className="d-lg-flex d-md-flex d-sm-block justify-content-evenly">
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
<div className='d-flex gap-3 justify-content-end mt-3'>
        <Button type="submit" variant="info" onClick={handleClose}>
            Updated Shop List
          </Button>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
</div>
    </Form>
  </>
}
