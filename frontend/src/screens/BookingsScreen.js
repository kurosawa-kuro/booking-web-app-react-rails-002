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
        <div className="flex flex-col h-full items-center bg-custom-blue-lightest text-custom-blue-darkest px-6">
            <h1 className="text-4xl mb-4">予約一覧</h1>
            {bookings.map(booking => (
                <div key={booking.id} className="w-full flex justify-center mb-4">
                    <div className="flex p-4 border rounded bg-custom-blue-lighter shadow-md w-full md:w-2/3 lg:w-1/2">
                        <div className="w-full pr-4">
                            <h2 className="text-xl font-bold text-custom-blue-dark mb-2">{booking.room.room_number} - {booking.room.room_type}</h2>
                            <p className="mb-1">部屋の説明: {booking.room.description}</p>
                            <p className="mb-1">予約開始日: {booking.start_date}</p>
                            <p className="mb-1">予約終了日: {booking.end_date}</p>
                            <p>合計金額: ¥{booking.total_price}</p>
                        </div>
                        <button
                            className="mt-20 w-[100px] bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            キャンセル
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookingsScreen;
