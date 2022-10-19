import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Store = () => {
  const [store, setStore] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [storename, setStorename] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      {!store && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>
            You have not created any stores yet.
            <a onClick={handleShow} className="link ">
              <u>Click here to create one.</u>
            </a>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header  closeButton > 
              <Modal.Title>Create Store</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Store name"
                    autoFocus
                    value={storename}
                    onChange={() => setStorename()}
                  />{" "}
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={() => setEmail()}
                  />{" "}
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={() => setPhone()}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Store"
                    value={address}
                    onChange={() => setAddress()}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Add Store
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default Store;
