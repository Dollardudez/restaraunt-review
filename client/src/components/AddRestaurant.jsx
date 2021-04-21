import React from 'react'

const AddRestaurant = () => {
    return (
        <div className="mb-4">
            <form action="">
                <div className="row justify-content-md-center ">
                    <div style={{height: "3rem"}} className="col-sm-3">
                        <input style={{height: "2.5rem", width: "15rem"}} type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div style={{height: "3rem"}} className="col-sm-3">
                        <input style={{height: "2.5rem", width: "15rem"}} type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col-sm-3">
                        <select style={{height: "2.5rem", width: "15rem"}} className="custom-select">
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button style={{height: "2.5rem",  width: "15rem"}} className="col-sm-3 btn btn-primary" >Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
