import React, { useState, useEffect } from "react";
import api from "../api";
import MasterHead from "../components/masterHead";
import MasterBody from "../components/masterBody";
import { paginate } from "../utils/paginate";
import _ from "lodash";

const Masters = () => {
    const [masters, setMaster] = useState([]);
    useEffect(() => {
        api.masters.fetchAll().then((date) => setMaster(date));
    }, [masters]);

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        api.masters.fetchClasses().then((date) => setClasses(date));
    }, []);

    const [selectedClass, setSelectedClass] = useState();
    const onClassSelect = (item) => {
        setSelectedClass(item);
        setCurrentPage(1);
    };
    const handleResetFilter = () => {
        setSelectedClass();
        setCurrentPage(1);
    };

    const sort = [
        { id: 1, name: "Name", sort: "down", hide: "" },
        { id: 2, name: "Rate", sort: "up", hide: "hide" },
        { id: 3, name: "Class", sort: "up", hide: "hide" }
    ];
    const sorting = { name1: "name", name2: "class", name3: "rate", sort1: "asc", sort2: "asc", sort3: "asc" };
    const [isSort, setIsSort] = useState(sort);
    const [asSort, setAsSort] = useState(sorting);

    const handleSort = (name) => {
        if (name === "Name") setAsSort({ name1: "name", name2: "class", name3: "rate", sort1: asSort.sort1 === "asc" ? "desc" : "asc", sort2: asSort.sort2 === "asc" ? "desc" : "asc", sort3: asSort.sort3 === "asc" ? "desc" : "asc" });
        if (name === "Rate") setAsSort({ name1: "rate", name2: "class", name3: "rate", sort1: asSort.sort1 === "asc" ? "desc" : "asc", sort2: asSort.sort2 === "asc" ? "desc" : "asc", sort3: asSort.sort3 === "asc" ? "desc" : "asc" });
        if (name === "Class") setAsSort({ name1: "class", name2: "rate", name3: "name", sort1: asSort.sort1 === "asc" ? "desc" : "asc", sort2: asSort.sort2 === "asc" ? "desc" : "asc", sort3: asSort.sort3 === "asc" ? "desc" : "asc" });
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
        // console.log("id:", id);
        setMaster(masters.filter((master) => master._id !== id));
    };
    const handleClick = (time, id, day) => {
        console.log("id:", id, "time:", time, "day:", day);
    };
    const iconf = () => {
        console.log("df:");
    };
    const pageSize = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (id) => {
        setCurrentPage(id);
    };
    const filteredMasters = selectedClass ? masters.filter((master) => master.class === selectedClass) : masters;
    const sortedMasters = _.orderBy(filteredMasters, [asSort.name1, asSort.name2, asSort.name3], [asSort.sort1, asSort.sort1, asSort.sort2, asSort.sort3]);
    const cropMasters = paginate(sortedMasters, currentPage, pageSize);
    return (
        <>
            <MasterHead
                isSort={isSort}
                mastersCount={masters.length}
                iconf={iconf}
                handleSort={handleSort}
                sortClass={sortClass}
                itemsCount={filteredMasters.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                classes={classes}
                onClassSelect={onClassSelect}
                selectedClass={selectedClass}
                handleResetFilter={handleResetFilter}
            />
            {masters.length !== 0 ? (
                <MasterBody
                    masters={cropMasters}
                    handleDelete={handleDelete}
                    handleClick={handleClick}
                />
            ) : (
                <div className="text-center" onClick={iconf}>
                    <h1>
                        <i className="bi bi-person-plus-fill"></i>
                    </h1>
                </div>
            )}
        </>
    );
};

export default Masters;
