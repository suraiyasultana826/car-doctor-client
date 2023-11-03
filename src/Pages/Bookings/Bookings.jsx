import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const url = `http://localhost:5200/bookings?email=${user?.email}`;
    const [bookings, setBookings] = useState([]);
    useEffect( () => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    }, [url]);
    const handleDelete = id => {
        const proceed = confirm ("Are u sure you want to delete?");
        if(proceed){
            fetch(`http://localhost:5200/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfull');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })

        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5200/bookings/${id}`, {
            method:'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
     }
     
     
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default Bookings;