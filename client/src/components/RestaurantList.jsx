import React, {useContext, useEffect} from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
    const [restaurants, setRestaurants] = useContext(RestaurantsContext);
    useEffect( () => {
        const fetchData = async () => {
            try{
                const response = await RestaurantFinder.get("/");
                setRestaurants(Response.data.data.restaurants);
                console.log(response);
            }
            catch(e){
            }
        }
        fetchData();
        
}, []);

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
                    <tr>
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
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default RestaurantList
