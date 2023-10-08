// src/screens/admin/TagFormScreen.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TagFormScreen() {
    const [tagName, setTagName] = useState('');
    const baseUrl = 'http://localhost:3001';
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setTagName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}/tags`, { tag: { name: tagName } });
            navigate('/admin/tags');
        } catch (error) {
            console.error("Error creating tag:", error);
        }
    };

    return (
        <div className="flex flex-col h-full items-center bg-gray-200 text-gray-700 px-6">
            <h1 className="text-4xl mb-4">新しいタグを追加</h1>
            <form onSubmit={handleSubmit} className="w-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag_name">
                        タグ名
                    </label>
                    <input
                        type="text"
                        id="tag_name"
                        name="tag_name"
                        value={tagName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="タグ名"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        追加
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TagFormScreen;
