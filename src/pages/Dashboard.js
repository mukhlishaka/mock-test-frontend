import image1 from "../assets/product-2.jpg"
import edit from "../assets/file-pen-solid.svg"
import trash from "../assets/trash-solid.svg"
import "./style/modal.css"
import "./style/product.css"
import React, { useState } from "react";

const Dashboard = () => {
    const [create, setCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const toggleCreate = (c) => {
        c.preventDefault();
        setCreate(!create);
    }
    if (create) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    const toggleUpdate = (e) => {
        e.preventDefault()
        setUpdate(!update);
    };
    if (update) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const toggleDelete = (d) => {
        d.preventDefault()
        setDeleted(!deleted);
    };
    if (deleted) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    

    return (
        <>
            <div className="nav">
                <div className="add">
                    <h2 class="title">Product List</h2>
                    <button><a onClick={toggleCreate} href="#">Create new</a></button>
                </div>
                <a href="/login" className="logout">Logout</a>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col" onclick="buy('baju lebaran', 100000)">
                        <div className="btn-icon">
                            <a onClick={toggleUpdate} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a onClick={toggleDelete} href="">
                                <img src={trash} alt="trash" />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4 id="price">Baju Lebaran</h4>
                        <p>Rp. 100.000</p>
                    </div>
                    <div class="col" onclick="buy('sepatu jumatan', 110000)">
                        <div className="btn-icon">
                            <a onClick={toggleUpdate} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a onClick={toggleDelete} href="">
                                <img src={trash} alt="trash" />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Sepatu Jumatan</h4>
                        <p>Rp. 110.000</p>
                    </div>
                    <div class="col" onclick="buy('celana tahun baru', 120000)">
                        <div className="btn-icon">
                            <a onClick={toggleUpdate} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a onClick={toggleDelete} href="">
                                <img src={trash} alt="trash" />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Celana Tahun Baru</h4>
                        <p>Rp. 120.000</p>
                    </div>
                    <div class="col" onclick="buy('baju anak', 130000)">
                        <div className="btn-icon">
                            <a onClick={toggleUpdate} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a onClick={toggleDelete} href="">
                                <img src={trash} alt="trash" />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Anak</h4>
                        <p>Rp. 130.000</p>
                    </div>
                    <div class="col" onclick="buy('baju bapak', 140000)">
                        <div className="btn-icon">
                            <a onClick={toggleUpdate} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a onClick={toggleDelete} href="">
                                <img src={trash} alt="trash" />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Bapak</h4>
                        <p>Rp. 140.000</p>
                    </div>
                    <div class="col" onclick="buy('baju ibu', 150000)">
                        <div className="btn-icon">
                            <a onClick={toggleUpdate} href="">
                                <img className="edit-icon" src={edit} alt="edit" />
                            </a>
                            <br />
                            <a onClick={toggleDelete} href="">
                                <img src={trash} alt="trash" />
                            </a>
                        </div>
                        <img src={image1} className="image-1" alt="image1" />
                        <h4>Baju Ibu</h4>
                        <p>Rp. 150.000</p>
                    </div>
                </div>
            </div>
            {create && (
                <div className="modal">
                    <div onClick={toggleCreate} className="overlay"></div>
                    <div className="modal-content">
                        <h3>Create New</h3>
                        <div className="border">
                            <input type="product" placeholder="Product Name" />
                            <input type="Price" placeholder="Price (Dollar USD)" />
                            <input type="url" placeholder="Image Url" />
                        </div>
                        <button className="btn-edit">Create</button>
                        <button className="close-modal" onClick={toggleCreate}>
                            Back
                        </button>
                    </div>
                </div>
            )}
            {update && (
                <div className="modal">
                    <div onClick={toggleUpdate} className="overlay"></div>
                    <div className="modal-content">
                        <h3>Edit Product</h3>
                        <div className="border">
                            <input type="product" placeholder="" value="Bicycle TDR 2000" />
                            <input type="Price" placeholder="" value=" 150" />
                            <input type="url" placeholder="" value="http://mukhlishaka.com/image1" />
                        </div>
                        <button className="btn-edit">Update</button>
                        <button className="close-modal" onClick={toggleUpdate}>
                            Back
                        </button>
                    </div>
                </div>
            )}
            {deleted && (
                <div className="modal">
                    <div onClick={toggleDelete} className="overlay"></div>
                    <div className="modal-content">
                        <div className="border">
                            <h3>Are you sure want to delete Bicycle TDR 2000?</h3>
                        </div>
                        <button className="btn-edit">Yes, delete it</button>
                        <button className="close-modal" onClick={toggleDelete}>
                            No
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Dashboard;