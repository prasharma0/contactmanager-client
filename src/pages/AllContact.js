import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ToastContext from "../context/ToastContext";
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

const AllContact = () => {
  const { toast } = useContext(ToastContext);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState([]);
  const [modalData, setModalData] = useState({});
  const [contacts, setContacts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
 
  useEffect(() => {
    //This is a good approach.React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts.
    (async () => {
      setLoading(true); //thus we can update our state.
      try {
        const res = await fetch(`http://localhost:5000/api/mycontacts`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = await res.json();
        if (!result.error) {
          setContacts(result.contacts);
          setLoading(false);
        } else {
          console.log(result);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact ?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = await res.json();
        if (!result.error) {
          setContacts(result.mycontacts);
          toast.success("Contact Deleted");
          setShowModal(false);
        } else {
          toast.error(result.error);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleSearchSubmit= (event) =>{
    event.preventDefault();
    // console.log(event)
    const newSearchUser = contacts.filter((contact)=>contact.name.toLowerCase().includes(searchInput.toLowerCase()));
    console.log(newSearchUser);
    setContacts(newSearchUser);
  }

  return (
    <>
      <div>
        <h3>Your Contact list</h3>
        <a href = "/mycontacts" className="btn btn-primary my-3 btn-sm">Reload Contacts</a>
        <hr className="my-4" />
        {loading ? (
          <Spinner splash="Loading Contacts..." />
        ) : (
          <>
            
            {contacts.length == 0 ? (
              <h3>No Contacts to show !</h3>
            ) : (
              <>
              <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
              type="text"
              name="searchInput"
              id="searchInput"
              className="form-control my-2"
              placeholder="search contact"
              value={searchInput}
              onChange={(e)=> setSearchInput(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-info mx-2">Search</button>
              </form>
               


                <p className="mt-2">
                  <strong>
                    Your have {contacts.length} contacts available.
                  </strong>
                </p>
                <table className="table table-hover">
                  <thead>
                    <tr className="table-active">
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr
                        key={contact._id}
                        className="table-success"
                        onClick={() => {
                          setModalData({});
                          setModalData(contact);

                          setShowModal(true);
                        }}
                      >
                        <th scope="row">{contact.name}</th>
                        <td>{contact.address}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <strong>Address</strong>: {modalData.address}
          </p>
          <p>
            <strong>Email</strong>: {modalData.email}
          </p>
          <p>
            <strong>Phone Number</strong>: {modalData.phone}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Link className="btn btn-info" to={`/edit/${modalData._id}`}>
            edit
          </Link>
          <Button
            className="btn btn-danger"
            onClick={() => deleteContact(modalData._id)}
          >
            delete
          </Button>
          <Button
            className="btn btn-warning"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AllContact;
