import React, {useEffect, useState} from 'react';
import '../client/client.css';
import axios from 'axios'


const Client = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getAll();
    }, [])

    const getAll = () => {
        axios.get("http://localhost:8000/api/client/all/").then((response) => {
            setClients(response.data.data);
        })
    };

    const displayAllClients = () => {
        return clients.map((client) => {
            return (<tr itemScope="row" id={client._id} key={client._id}>
                <td>
                    {client.client_ID}
                </td>
                <td>{client.client_FirstName}</td>
                <td>
                    {client.client_LastName}
                </td>
                <td>
                    <img src={client.client_profilePicture} alt="profile picture" width={25} height={25}/>
                </td>
                <td> {client.client_UserName}</td>
                <td> {client.client_Address}</td>
                <td> {client.client_Mobile}</td>
                <td> {client.client_Email}</td>
                <td> {client.client_Gender}</td>
                <td> {client.client_NIC}</td>
                {/*<td> {client.client_Password}</td>*/}

                <td> {client.client_DOB}</td>
                <td> {client.client_Status}</td>

                <td>
                    <i className="fa-solid fa-pen me-3 text-primary d-inline"/>
                    <i className="fa-solid fa-trash-can d-inline me-2 text-danger d-inline"/>
                </td>
            </tr>)
        });
    };


    return (
        <div>
            <div className="main_container">
                <div className="item fw-bold">
                    Client Management
                </div>
                <div className="item">
                    <div className="row mt-5 ps-3">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <button id="btn-generate-report" className="btn me-3">Generate Report</button>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="d-flex justify-content-end align-items-center">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input id="searchID" type="text" className="form-control col-8 me-5"
                                                   placeholder="ID"/>
                                        </div>
                                        <div>
                                            <input type="button" className="form-control btnSearch text-white"
                                                   defaultValue="Search"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 px-3">
                        <form>
                            <div className="row">
                                <div className="col d-flex justify-content-end align-items-center">
                                    <div className="col d-flex justify-content-end">
                                        <div>
                                            <button className="btn btnAddImg" type="button">
                                                <i className="fa fa-plus text-white" aria-hidden="true"/>
                                            </button>
                                            <button className="btn btnEditImg" type="button">
                                                <i className="fa-solid fa-pen text-white"/>
                                            </button>
                                            <button className="btn btnImgDelete" type="button">
                                                <i className="fa-solid fa-trash-can d-inline text-white"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="imgDiv">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="User Name"/>
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <input type="tel" className="form-control" placeholder="Mobile Number"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="NIC"/>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <select name="gender" className="form-select" aria-label="role">
                                        {/*<option selected={true} disabled defaultValue="0">Gender</option>*/}
                                        {/*<option defaultValue="1">Male</option>*/}
                                        {/*<option defaultValue="2">Female</option>*/}
                                    </select>
                                </div>
                                <div className="col">
                                    <input name="dateOfBirth"
                                           className="form-control"
                                           placeholder="Date of Birth"
                                           type="text"
                                           onFocus={(e) => e.target.type = 'date'} id="dateOfBirth"/>
                                </div>
                                <div className="col">
                                    {/*<select name="status" className="form-select" aria-label="role">*/}
                                    {/*    <option selected disabled value="0">Status</option>*/}
                                    {/*    <option value="1">Online</option>*/}
                                    {/*    <option value="2">Offline</option>*/}
                                    {/*</select>*/}
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="d-flex justify-content-around align-items-center">
                                    <button type="submit" className="btn btnRegister ">Register</button>
                                    <button type="button" className="btn btnUpdate">Update</button>
                                    <button type="button" className="btn btnDelete">Delete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row mt-5 px-3">
                        <h6 className="mb-0 fw-bold mt-2 mb-2">Client</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="table-responsive">
                            <table className="table table-striped custom-table" id="assignLabsTable">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Profile Picture</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">NIC</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"/>
                                </tr>
                                </thead>
                                <tbody>
                                {displayAllClients()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;