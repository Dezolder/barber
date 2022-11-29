import React from "react";
import { PropTypes } from "prop-types";

const MasterBody = ({ masters, handleDelete, handleClick }) => {
    return (
        <div className="container border border-2 border-info">
            {masters.map((item) => (
                <div className="card m-4" key={item._id}>
                    <div className="card-header">
                        <h2>{item.name}</h2>
                        <div className="text-end">
                            <button
                                className="btn-danger text-end m-1"
                                onClick={() => handleDelete(item._id)}
                            >
                                Delete
                            </button>
                            <button className="btn-secondary text-end m-1">
                                Edit
                            </button>
                            <button className="btn-info text-end m-1">
                                Info
                            </button>
                        </div>
                        <div className="class-text">Класс: {item.class}</div>
                        <div className="class-text">Рейтинг: {item.rate}</div>
                    </div>
                    <div className="card-body">
                        <div>
                            Доступное время на сегодня:
                            {item.availabilityForToday.map((i) => (
                                <button
                                    key={i}
                                    className="badge bg-primary m-1"
                                    onClick={() =>
                                        handleClick(i, item._id, "Today")
                                    }
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                        <div>
                            Доступное время на завтра:
                            {item.availabilityForToday.map((i) => (
                                <button
                                    key={i}
                                    className="badge bg-primary m-1"
                                    onClick={() =>
                                        handleClick(i, item._id, "Tomarrow")
                                    }
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                        <div>
                            Доступное время на послезавтра:
                            {item.availabilityForToday.map((i) => (
                                <button
                                    key={i}
                                    className="badge bg-primary m-1"
                                    onClick={() =>
                                        handleClick(
                                            i,
                                            item._id,
                                            "AfterTomarrow"
                                        )
                                    }
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

MasterBody.propTypes = {
    masters: PropTypes.array,
    handleDelete: PropTypes.func,
    handleClick: PropTypes.func
};

export default MasterBody;
