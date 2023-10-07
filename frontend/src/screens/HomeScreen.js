import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const baseUrl = 'http://localhost:3001';

    useEffect(() => {
        async function fetchRooms() {
            try {
                const response = await axios.get(`${baseUrl}/rooms`);
                console.log({ response });
                setRooms(response.data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        }

        fetchRooms();
    }, []);

    return (
        <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
            <h1 className="text-4xl mb-4">Room List</h1>
            {rooms.map(room => (
                <div key={room.id} className="flex mb-4 p-4 border rounded bg-white shadow-md w-1/2">
                    <img
                        src="https://static.amanaimages.com/imgroom/rf_preview640/11014/11014019870.jpg"
                        alt="Room Image"
                        className="w-2/5 object-cover h-48 rounded-md mr-3" // 画像の幅を40%に変更
                    />
                    <div className="w-3/5"> {/* テキストのコンテナの幅を60%に変更 */}
                        <h2 className="text-xl font-bold">{room.room_number} - {room.room_type}</h2>
                        <p>Description: {room.description}</p>
                        <p>Capacity: {room.capacity}</p>
                        <p>Price per night: ${room.price_per_night}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeScreen;
