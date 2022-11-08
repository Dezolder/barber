import React, { useState } from "react";
import api from "../api";
// import mastersapi from "../api/fake.api/masters";

const Masters = () => {
    // console.log("api:", api.masters);
    // let masters = api.masters;
    const [masters, setMaster] = useState(api.masters);
    const handleDelete = (id) => {
        console.log("id:", id);
        setMaster(masters.filter((master) => master._id !== id));
    };
    const hanleClick = (id) => {
        console.log("id:", id);
    };
    return (
        <>
            <div className="container text-center m-5">
                <header>Masters</header>
            </div>
            <div className="container">
                {masters.map((item) => (
                    <div
                        className="card m-4" key={item._id}>
                        <div className="card-header">
                            {item.name}
                            <div className="text-end">
                                <button className="btn-danger text-end m-1" onClick={() => handleDelete(item._id)}>Delete</button>
                                <button className="btn-secondary text-end m-1">Edit</button>
                                <button className="btn-info text-end m-1">Info</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="class-text">
                                Класс: {item.class}
                            </div>
                            <div className="class-text">
                                Рейтинг: {item.rate}
                            </div>
                            <div>
                                Доступное время:
                                {item.availability.map((i) => (
                                    <button key={i} className="badge bg-primary m-1" onClick={() => hanleClick(i)}>{i}</button>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Masters;
