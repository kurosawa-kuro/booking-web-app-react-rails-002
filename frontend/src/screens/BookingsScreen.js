// src/screens/BookingsScreen.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingsScreen() {
    const [bookings, setBookings] = useState([]);
    const baseUrl = 'http://localhost:3001';
    const userId = 1; // ここにユーザーIDを設定します

    useEffect(() => {
        async function fetchBookings() {
            try {
                const response = await axios.get(`${baseUrl}/users/${userId}/bookings`);
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        }

        fetchBookings();
    }, [userId]);

    return (
        <div className="flex flex-col h-full items-center bg-gray-200 text-gray-700 px-6">
            <h1 className="text-4xl mb-4">User {userId} Bookings</h1>
            {bookings.map(booking => (
                <div key={booking.id} className="w-full flex justify-center mb-4">
                    <div className="flex p-4 border rounded bg-white shadow-md w-full md:w-2/3 lg:w-1/2">
                        <div className="w-full">
                            <h2 className="text-xl font-bold mb-2">{booking.room.room_number} - {booking.room.room_type}</h2>
                            <p className="mb-1">Description: {booking.room.description}</p>
                            <p className="mb-1">Booking Start Date: {booking.start_date}</p>
                            <p className="mb-1">Booking End Date: {booking.end_date}</p>
                            <p>Total Price: ${booking.total_price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookingsScreen;
