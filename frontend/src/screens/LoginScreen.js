import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const baseUrl = 'http://localhost:3001';
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, credentials);
            // Save token or user data to state or local storage here if needed
            console.log(response.data);
            navigate('/'); // Redirect to rooms after successful login
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="flex flex-col h-full items-center bg-gray-200 text-gray-700 px-6">
            <h1 className="text-4xl mb-4">ログイン</h1>
            <form onSubmit={handleSubmit} className="w-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        パスワード
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="パスワード"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        ログイン
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;
