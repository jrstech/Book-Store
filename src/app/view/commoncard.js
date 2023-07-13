import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Button } from "reactstrap";
import { CardBody, CardFooter, CardHeader } from "reactstrap";
import imageArrayList from "../book/bookimage/imagearraylist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Itemfilter from "./category/Itemfilter";
import item from './category/Itemfilter'
const Commoncard = (props) => {
  const [cartItems, setCartItems] = useState(0);
  
    const addToCart = () => {
    setCartItems(cartItems + 1);
    toast.success("Item Added To Cart");
  };
  const removeToCart = () => {
    if (cartItems >= 1) {
      setCartItems(cartItems - 1);
      toast.warn("Remove One Item", { position: "top-center" });
    } else {
      toast.warn("Cart Is Empty", { position: "top-center" });
    }
  };

  return (
    <Fragment className="">
      <div className="d-flex p-1 justify-content-between">
        <div className="p-3">
                   <h4 className="brandName p-2" style={{ color: 'blue'}}>Online Book Stall</h4>{" "}
        </div>
        <div className="p-1" style={{ alignItems: "center" }}>  
             <h3>Item Cart</h3>      
          <h4 className="cartBox">   {cartItems}     </h4>
          <Button color="warning" className="" onClick={() => removeToCart()}>    Remove Item     </Button>
        </div>
      </div>

      <div>
        <Itemfilter 
        
        />
        
      </div>
      <Row>
     {imageArrayList.map((image) => {
          const { imageId, writerName, publisherName, bookTitle, category, imgUrl}  = image;
            return ( 
          <Col lg="3" sm="6" md="4" xs="12">
            <Card className="m-2">
              <CardHeader>
                {" "}
                <h6>{bookTitle}</h6>
              </CardHeader>
              <CardBody key={imageId}>
                <img
                  width="200px"
                  height="240px"
                  src={imgUrl}
                  alt="loading-image"
                />
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <h6>Writer Name</h6>
                    <p>{writerName} </p>
                  </div>
                  <div>
                    <h6>Publishers</h6>
                    <p>{publisherName}</p>
                  </div>
                </div>
              </CardBody>

              <CardFooter>
                <div className="d-flex justify-content-between p-2">
                  <Button className="p-2" color="primary">
                    By Now
                  </Button>
                  <Button
                    className="p-2"
                    color="warning"
                    onClick={() => addToCart(image)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
          )
        }
        )}
      </Row>
      <ToastContainer />
    </Fragment>
  );
};

export default Commoncard;
