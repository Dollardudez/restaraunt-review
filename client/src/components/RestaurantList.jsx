import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
    let history = useHistory();
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);
    useEffect( () => {
        const fetchData = async () => {
            try{
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
                console.log(response);
            }
            catch(e){
            }
        }
        fetchData();
        
    }, []);

    
    
    const handleDelete = async (id) =>{
        try{
            const response = await RestaurantFinder.delete(`/${id}`)
            console.log(response)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
        }
        catch(err){
            console.log(err)
        }
    }

    const handleUpdate = (id) =>{
        history.push(`/restaurants/${id}/update`)
    };


    return (
        <div className="list-group mx-1">
            <table className="table table-hover table-striped">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        return (
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td><button onClick={ () =>  handleUpdate(restaurant.id)}  className="btn btn-warning">Update</button></td>
                                <td><button onClick={ () =>  handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                        
                    })}

                    {/* <tr>
                        <td>Mcdunks</td>
                        <td>Dallas</td>
                        <td>$$$</td>
                        <td>Rating</td>
                        <td>
                            <button className="btn btn-warning">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr> */}
                </tbody>
                </table>
        </div>
    )
}

export default RestaurantList
