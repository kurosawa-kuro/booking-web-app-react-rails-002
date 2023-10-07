import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // 追加

function RoomScreen() {
    const [room, setRoom] = useState(null);
    const baseUrl = 'http://localhost:3001';

    const { id } = useParams(); // ルートパラメータを取得

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
    }, [id]); // idが変わるたびに部屋の情報を再取得

    if (!room) return <div>Loading...</div>; // 部屋の情報がまだロードされていない場合

    return (
        <div className="flex flex-col h-screen items-center bg-gray-200 text-gray-700">
            <h1 className="text-4xl mb-4">Room</h1>
            <div className="flex flex-col items-center mb-4 p-4 border rounded bg-white shadow-md w-1/2"> {/* ここに flex-col と items-center を追加 */}
                <img
                    src="https://static.amanaimages.com/imgroom/rf_preview640/11014/11014019870.jpg"
                    alt={`Room ${room.room_number} ${room.room_type}`}
                    className="w-45 h-45 object-cover rounded-md mb-3"
                />
                <div className="w-45 flex gap-36">
                    <div className="w-45">
                        <h2 className="text-xl font-bold">{room.room_number} - {room.room_type}</h2>
                        <p>Description: {room.description}</p>
                        <p>Capacity: {room.capacity}</p>
                        <p>Price per night: ${room.price_per_night}</p>
                    </div>
                    <div className="w-3/5">
                        予約する
                    </div>
                </div>
            </div>
        </div>
    );


}

export default RoomScreen;
