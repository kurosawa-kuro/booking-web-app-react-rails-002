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

    const handleButtonClick = async () => {
        console.log('ボタンが押されました');

        // 予約の情報
        const bookingData = {
            booking: {
                user_id: 1,
                room_id: parseInt(id), // useParamsから取得したidを整数として使用
                start_date: "2023-10-10",
                end_date: "2023-10-20",
                total_price: 200.50
            }
        };

        try {
            const response = await axios.post(`${baseUrl}/bookings`, bookingData);
            console.log('Booking Response:', response.data);
        } catch (error) {
            console.error('Error making booking:', error);
        }
    };

    if (!room) return <div>Loading...</div>;

    return (
        <div className="flex flex-col h-screen items-center bg-gray-200 text-gray-700">
            <h1 className="text-4xl mb-4">Room</h1>
            <div className="flex flex-col items-center mb-4 p-4 border rounded bg-white shadow-md w-1/2">
                <img
                    src="https://static.amanaimages.com/imgroom/rf_preview640/11014/11014019870.jpg"
                    alt={`Room ${room.room_number} ${room.room_type}`}
                    className="w-3/4 h-3/4 object-cover rounded-md mb-3"
                />
                <div className="w-3/4 flex gap-36">
                    <div className="w-1/2">
                        <h2 className="text-xl font-bold">{room.room_number} - {room.room_type}</h2>
                        <p>Description: {room.description}</p>
                        <p>Capacity: {room.capacity}</p>
                        <p>Price per night: ${room.price_per_night}</p>
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
