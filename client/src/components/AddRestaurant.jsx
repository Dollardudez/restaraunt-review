import React, {useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantsContext);
    const [name, setName] =  useState("")
    const [location, setLocation] =  useState("")
    const [priceRange, setPriceRange] =  useState("Price Range")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await RestaurantFinder.post("/", {
                name: name,
                location: location,
                price_range: priceRange
            });
            addRestaurants(response.data.data.restaurant)
        }catch(err){

        }
    }
    return (
        <div className="mb-4">
            <form action="">
                <div className="row justify-content-md-center ">
                    <div style={{height: "3rem"}} className="col-sm-3">
                        <input value={name} onChange={e => setName(e.target.value)} style={{height: "2.5rem", width: "15rem"}} type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div style={{height: "3rem"}} className="col-sm-3">
                        <input value={location} onChange={e => setLocation(e.target.value)} style={{height: "2.5rem", width: "15rem"}} type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col-sm-3">
                        <select value={priceRange} onChange={e => setPriceRange(e.target.value)} style={{height: "2.5rem", width: "15rem"}} className="custom-select">
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit} style={{height: "2.5rem",  width: "15rem"}} className="col-sm-3 btn btn-primary" >Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
