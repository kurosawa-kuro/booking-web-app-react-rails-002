import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const baseUrl = 'http://localhost:3001';

    useEffect(() => {
        async function fetchRooms() {
            try {
                const response = await axios.get(`${baseUrl}/rooms`);
                setRooms(response.data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        }

        fetchRooms();
    }, []);

    return (
        <div className="flex flex-col h-full items-center bg-gray-200 text-gray-700 px-6">
            <h1 className="text-4xl mb-4">部屋一覧 By Admin</h1>
            {rooms.map(room => (
                <Link to={`/room/${room.id}`} key={room.id} className="w-full flex justify-center mb-4">
                    <div className="flex p-4 border rounded bg-white shadow-md w-full md:w-2/3 lg:w-1/2">
                        <img
                            src={room.image_path}
                            alt={`部屋 ${room.room_number} ${room.room_type}`}
                            className="w-1/3 object-cover rounded-md mr-3"
                        />
                        <div className="w-2/3">
                            <h2 className="text-xl font-bold mb-2">{room.room_number} - {room.room_type}</h2>
                            <p className="mb-1">説明: {room.description}</p>
                            <p className="mb-1">定員: {room.capacity}人</p>
                            <p>1泊あたりの価格: ¥{room.price_per_night}</p>
                            <div className="mt-2">
                                <span className="font-semibold">タグ:</span>
                                {room.tags.map(tag => (
                                    <span key={tag.id} className="bg-green-200 text-green-800 rounded-full px-2 py-1 ml-2">
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default HomeScreen;
