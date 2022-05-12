import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from '../Home/Button';
import "./Friend.css";


const Friend = ({ contacts, deleteContact }) => {

  const navigate = useNavigate();
  return (
    
    <div className="friend-container">
      <div className="friend-row">
        <Button
          className='btns'
          buttonStyle='btn--addfriend'
          buttonSize='btn--large'
          onClick={() => navigate("/friends/add")}
        >
          Add Friend
        </Button>
        <div className="col-md-10 mx-auto my-4">
          <table className="table">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      {/* <Button
                        className='btns'
                        buttonStyle='btn--pink'
                        buttonSize='btn--middle'
                        onClick={() => navigate(`/friends/edit/${contact.id}`)}
                        
                      >
                        Edit
                      </Button> */}
                      <Button
                        className='btns'
                        buttonStyle='btn--pink'
                        buttonSize='btn--middle'
                        onClick={() => deleteContact(contact.id)}
                        
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No contacts found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Friend);