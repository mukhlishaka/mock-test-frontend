import "./style/dashboard.css"
import image1 from "../assets/product-2.jpg"
import edit from "../assets/file-pen-solid.svg"
import trash from "../assets/trash-solid.svg"
import "./style/modal.css"
import React, { useState } from "react";

const Dashboard = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault()
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className="nav">
                <div className="add">
                    <h2 class="title">Product List</h2>
                    <button><a href="">Create new</a></button>
                </div>
                <a href="/logout" className="logout">Logout</a>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col" onclick="buy('baju lebaran', 100000)">
                        <div className="btn-icon">
                            <a onClick={toggleModal} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a href="delete">
                                <img src={trash} />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Lebaran</h4>
                        <p>Rp. 100.000</p>
                    </div>
                    <div class="col" onclick="buy('sepatu jumatan', 110000)">
                        <div className="btn-icon">
                            <a onClick={toggleModal} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a href="delete">
                                <img src={trash} />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Sepatu Jumatan</h4>
                        <p>Rp. 110.000</p>
                    </div>
                    <div class="col" onclick="buy('celana tahun baru', 120000)">
                        <div className="btn-icon">
                            <a onClick={toggleModal} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a href="delete">
                                <img src={trash} />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Celana Tahun Baru</h4>
                        <p>Rp. 120.000</p>
                    </div>
                    <div class="col" onclick="buy('baju anak', 130000)">
                        <div className="btn-icon">
                            <a onClick={toggleModal} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a href="delete">
                                <img src={trash} />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Anak</h4>
                        <p>Rp. 130.000</p>
                    </div>
                    <div class="col" onclick="buy('baju bapak', 140000)">
                        <div className="btn-icon">
                            <a onClick={toggleModal} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a href="delete">
                                <img src={trash} />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Bapak</h4>
                        <p>Rp. 140.000</p>
                    </div>
                    <div class="col" onclick="buy('baju ibu', 150000)">
                        <div className="btn-icon">
                            <a onClick={toggleModal} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a href="delete">
                                <img src={trash} />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Ibu</h4>
                        <p>Rp. 150.000</p>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h3>Edit Product</h3>
                        <input type="product" placeholder="" value="Bicycle TDR 2000" />
                        <input type="Price" placeholder="" value=" 150" />
                        <input type="url" placeholder="" value="http://mukhlishaka.com/image1" />
                        <button className="btn-edit">Update</button>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Dashboard