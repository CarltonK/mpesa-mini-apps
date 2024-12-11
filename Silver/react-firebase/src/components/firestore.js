import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from '../firebase';

function Firestore() {
    const [hotels, setHotels] = useState([]);
    const [hotelName, setHotelName] = useState('');

    const fetchHotels = async () => {
        const querySnapshot = await getDocs(collection(firestore, "hotels"));
        const fetchedHotels = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setHotels(fetchedHotels);
    }

    useEffect(() => {
        fetchHotels();
    }, []);

    const addData = async () => {
        await addDoc(collection(firestore, "hotels"), {
            name: hotelName
        });
    }

    return (
        <div>
            <h1>Hotels</h1>
            <ul>
                {hotels.map((hotel) => (
                    <li key={hotel.id}>
                        {hotel.name}
                    </li>
                ))}
            </ul>

            <input
                type='text'
                placeholder='Please enter the hotel name'
                value={hotelName}
                onChange={(event) => setHotelName(event.target.value)}
            />
            <button onClick={addData}>Add Data</button>
        </div>
    );
}

export default Firestore;