// src/screens/admin/AdminTagsScreen.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminTagsScreen() {
    const [tags, setTags] = useState([]);
    const baseUrl = 'http://localhost:3001';

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

    return (
        <div className="flex flex-col h-full items-center bg-gray-200 text-gray-700 px-6">
            <h1 className="text-4xl mb-4">タグ一覧</h1>
            <ul className="w-full md:w-2/3 lg:w-1/2">
                {tags.map(tag => (
                    <li key={tag.id} className="flex p-4 border-b">
                        {tag.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminTagsScreen;
