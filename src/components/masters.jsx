import React, { useState } from "react";
import api from "../api";
// import mastersapi from "../api/fake.api/masters";

const Masters = () => {
    const [masters, setMaster] = useState(api.masters);

    // const [isSortName, setIsSortName] = useState("asc");
    // const [isSortRate, setIsSortRate] = useState("asc");
    // const [isSortClas, setIsSortClas] = useState("asc");
    const sort = [
        { id: 1, name: "Name", sort: "down", hide: "" },
        { id: 2, name: "Rate", sort: "up", hide: "hide" },
        { id: 3, name: "Class", sort: "up", hide: "hide" }
    ];
    const [isSort, setIsSort] = useState(sort);

    const handleSort = (name) => {
        // console.log("name:", name);
        setIsSort((prevstate) => {
            return prevstate.map((i) => {
                if (i.name === name) {
                    return { ...i, sort: i.sort === "down" ? "up" : "down", hide: "" };
                }
                return { ...i, sort: "up", hide: "hide" };
            }
            );
        }
            // isSort.map((i) => {
            //     return console.log("i:", i);
            // })
        );
    };
    const sortClass = (name, sort, hide) => {
        if (name === "Name") return "bi bi-sort-alpha-" + sort + hide;
        if (name === "Rate") return "bi bi-sort-" + sort + hide;
        if (name === "Class") return "bi bi-sort-numeric-" + sort + hide;
    };
    // const handleSortRate = () => { setIsSort((prevstate) => prevstate.rate.sort === "asc" ? "desc" : "asc"); };
    // const handleSortClas = () => { setIsSort((prevstate) => prevstate.clas.sort === "asc" ? "desc" : "asc"); };

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
            <div className="container-md text-center m-5">
                <div className="row">
                    <div className="col">
                        {
                            isSort.map((i) => (
                                <div
                                    key={i.id}
                                    onClick={() => handleSort(i.name)}
                                >
                                    Sort by {i.name}
                                    <i className={sortClass(i.name, i.sort, i.hide)}></i>
                                </div>
                            )
                            )
                        }
                        {/* <div onClick={handleSortName}>Sort by Name <i className={"bi bi-sort-alpha-" + (isSort.name.sort === "asc" ? "down" : "up")}></i></div>
                        <div onClick={handleSortRate}>Sort by Rate <i className={"bi bi-sort-" + (isSort.name.sort === "asc" ? "down" : "up")}></i></div>
                        <div onClick={handleSortClas}>Sort by Class <i className={"bi bi-sort-numeric-" + (isSort.name.sort === "asc" ? "down" : "up")}></i></div> */}
                    </div>
                    <div className="col">
                        <header>Masters</header>
                        <h3>{masters.length}</h3>
                    </div>
                    <div className="col text-end" onClick={iconf}>
                        <h1><i className="bi bi-person-plus-fill"></i></h1>
                    </div>
                </div>
            </div>
            <div className="container">
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
