import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RoomScreen() {
    const [room, setRoom] = useState(null);
    const baseUrl = 'http://localhost:3001';
    const { id } = useParams();

    useEffect(() => {
        async function fetchRoom() {
            try {
                const response = await axios.get(`${baseUrl}/rooms/${id}`);
                setRoom(response.data);
            } catch (error) {
                console.error("Error fetching room:", error);
            }
        }

        fetchRoom();
    }, [id]);

    const createBooking = async (data) => {
        try {
            await axios.post(`${baseUrl}/bookings`, data);
            return true;
        } catch (error) {
            console.error('Error making booking:', error);
            return false;
        }
    };

    const handleButtonClick = async () => {
        const bookingData = {
            booking: {
                user_id: 1,
                room_id: parseInt(id, 10),
                start_date: "2023-10-10",
                end_date: "2023-10-20",
                total_price: 200.50
            }
        };

        const isBookingSuccessful = await createBooking(bookingData);

        if (isBookingSuccessful) {
            window.location.href = '/bookings';
        }
    };

    if (!room) return <div>Loading...</div>;

    return (
        <div className="flex flex-col h-screen items-center bg-gray-200 text-gray-700">
            <h1 className="text-4xl mb-4">部屋</h1>
            <div className="flex flex-col items-center mb-4 p-4 border rounded bg-white shadow-md w-1/2">
                <img
                    src={room.image_path}
                    alt={`部屋 ${room.room_number} ${room.room_type}`}
                    className="w-3/4 h-3/4 object-cover rounded-md mb-3"
                />
                <div className="w-3/4 flex gap-36">
                    <div className="w-1/2">
                        <h2 className="text-xl font-bold">{room.room_number} - {room.room_type}</h2>
                        <p>説明: {room.description}</p>
                        <p>定員: {room.capacity}人</p>
                        <p>1泊あたりの価格: ¥{room.price_per_night}</p>
                        <div className="mt-2">
                            <span className="font-semibold">タグ:</span>
                            {room && room.tags && room.tags.map(tag => (
                                <span key={tag.id} className="bg-green-200 text-green-800 rounded-full px-2 py-1 ml-2">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <button
                            onClick={handleButtonClick}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            予約する
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomScreen;
