import React, { useState } from "react";

function Todolist() {

    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity() {
        setlistData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }

    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setlistData(updatedListData)
    }

    function removeAll() {
        setlistData([])
    }

    return (
        <div className="container">
            <div className="header">Todo List </div>
            <input type="text" placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button onClick={addActivity}>Add</button>
            <p className="List-heading">Hear is your  List :{")"}</p>
            {listData != [] && listData.map((data, i) => {
                return (
                    <div>
                        <p key={i}>
                            <div className="listdata">{data}</div>
                            <div className="btn-position">
                                <button onClick={() => removeActivity(i)}>Remove(-)</button>
                            </div>
                        </p>
                    </div>
                )
            })}
            {listData.length >= 1 &&
                <button onClick={removeAll}>Remove All</button>}
        </div>
    )
}
export default Todolist