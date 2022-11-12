import React, { useState } from "react";
import api from "../api";
import MasterHead from "./masterHead";

const Masters = () => {
    const [masters, setMaster] = useState(api.masters);

    const sort = [
        { id: 1, name: "Name", sort: "down", hide: "" },
        { id: 2, name: "Rate", sort: "up", hide: "hide" },
        { id: 3, name: "Class", sort: "up", hide: "hide" }
    ];
    const [isSort, setIsSort] = useState(sort);

    const handleSort = (name) => {
        setIsSort((prevstate) => {
            return prevstate.map((i) => {
                if (i.name === name) {
                    return { ...i, sort: i.sort === "down" ? "up" : "down", hide: "" };
                }
                return { ...i, sort: "up", hide: "hide" };
            }
            );
        }
        );
    };
    const sortClass = (name, sort, hide) => {
        if (name === "Name") return "bi bi-sort-alpha-" + sort + hide;
        if (name === "Rate") return "bi bi-sort-" + sort + hide;
        if (name === "Class") return "bi bi-sort-numeric-" + sort + hide;
    };

    const handleDelete = (id) => {
        console.log("id:", id);
        setMaster(masters.filter((master) => master._id !== id));
    };
    const hanleClick = (time, id, day) => {
        console.log("id:", id, "time:", time, "day:", day);
    };
    const iconf = () => {
        console.log("df:");
    };

    return (
        <>
            <MasterHead isSort={isSort} masters={masters.length} iconf={iconf} handleSort={handleSort} sortClass={sortClass} />
            <div className="container border border-2 border-info">
                {masters.map((item) => (
                    <div
                        className="card m-4" key={item._id}>
                        <div className="card-header">
                            <h2>
                                {item.name}
                            </h2>
                            <div className="text-end">
                                <button className="btn-danger text-end m-1" onClick={() => handleDelete(item._id)}>Delete</button>
                                <button className="btn-secondary text-end m-1">Edit</button>
                                <button className="btn-info text-end m-1">Info</button>
                            </div>
                            <div className="class-text">
                                Класс: {item.class}
                            </div>
                            <div className="class-text">
                                Рейтинг: {item.rate}
                            </div>
                        </div>
                        <div className="card-body">

                            <div>
                                Доступное время на сегодня:
                                {item.availabilityForToday.map((i) => (
                                    <button
                                        key={i}
                                        className="badge bg-primary m-1"
                                        onClick={() => hanleClick(i, item._id, "Today")}>{i}</button>
                                ))}
                            </div>
                            <div>
                                Доступное время на завтра:
                                {item.availabilityForToday.map((i) => (
                                    <button
                                        key={i}
                                        className="badge bg-primary m-1"
                                        onClick={() => hanleClick(i, item._id, "Tomarrow")}>{i}</button>
                                ))}
                            </div>
                            <div>
                                Доступное время на послезавтра:
                                {item.availabilityForToday.map((i) => (
                                    <button
                                        key={i}
                                        className="badge bg-primary m-1"
                                        onClick={() => hanleClick(i, item._id, "AfterTomarrow")}>{i}</button>
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
