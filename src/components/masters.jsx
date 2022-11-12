import React, { useState } from "react";
import api from "../api";
import MasterHead from "./masterHead";
import MasterBody from "./masterBody";

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
                    return {
                        ...i,
                        sort: i.sort === "down" ? "up" : "down",
                        hide: ""
                    };
                }
                return { ...i, sort: "up", hide: "hide" };
            });
        });
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
    const handleClick = (time, id, day) => {
        console.log("id:", id, "time:", time, "day:", day);
    };
    const iconf = () => {
        console.log("df:");
    };

    return (
        <>
            <MasterHead
                isSort={isSort}
                masters={masters.length}
                iconf={iconf}
                handleSort={handleSort}
                sortClass={sortClass}
            />
            <MasterBody
                masters={masters}
                handleDelete={handleDelete}
                handleClick={handleClick}
            />
        </>
    );
};

export default Masters;
