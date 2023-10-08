import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RoomFormScreen() {
    const [roomData, setRoomData] = useState({
        room_number: "",
        description: "",
        capacity: 0,
        price_per_night: 0.0,
        room_type: "",
        image_path: "",  // これを追加
        tag_ids: []
    });
    const [tags, setTags] = useState([]);

    const baseUrl = 'http://localhost:3001';
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTags() {
            try {
                const response = await axios.get(`${baseUrl}/tags`);
                setTags(response.data);
            } catch (error) {
                console.error("Error fetching tags:", error);
            }
        }

        fetchTags();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRoomData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTagToggle = (tagId) => {
        if (roomData.tag_ids.includes(tagId)) {
            setRoomData(prevState => ({
                ...prevState,
                tag_ids: prevState.tag_ids.filter(id => id !== tagId)
            }));
        } else {
            setRoomData(prevState => ({
                ...prevState,
                tag_ids: [...prevState.tag_ids, tagId]
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}/rooms`, { room: roomData });
            navigate('/admin/rooms');
        } catch (error) {
            console.error("Error creating room:", error);
        }
    };

    return (
        <div className="flex flex-col h-full items-center bg-custom-blue-lightest text-gray-700 px-6">
            <h1 className="text-4xl mb-4">部屋 新規作成</h1>
            <form onSubmit={handleSubmit} className="w-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="room_number">
                        部屋番号
                    </label>
                    <input
                        type="text"
                        id="room_number"
                        name="room_number"
                        value={roomData.room_number}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="部屋番号"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        説明
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={roomData.description}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="部屋の説明"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
                        定員
                    </label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        value={roomData.capacity}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="定員数"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price_per_night">
                        1泊あたりの価格
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        id="price_per_night"
                        name="price_per_night"
                        value={roomData.price_per_night}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="1泊あたりの価格"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="room_type">
                        部屋のタイプ
                    </label>
                    <input
                        type="text"
                        id="room_type"
                        name="room_type"
                        value={roomData.room_type}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="部屋のタイプ (例: シングル)"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image_path">
                        画像パス
                    </label>
                    <input
                        type="text"
                        id="image_path"
                        name="image_path"
                        value={roomData.image_path}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="画像のURL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        タグ
                    </label>
                    {tags.map(tag => (
                        <button
                            key={tag.id}
                            type="button"
                            onClick={() => handleTagToggle(tag.id)}
                            className={`py-2 px-4 m-2 rounded ${roomData.tag_ids.includes(tag.id) ? 'bg-custom-blue-dark text-white' : 'bg-custom-blue-light'}`}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-custom-blue hover:bg-custom-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        作成
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RoomFormScreen;
