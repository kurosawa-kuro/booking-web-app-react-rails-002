import React from "react";
import { useAuthStore } from "../state/store";

function Navbar() {
    const { userInfo, logout } = useAuthStore();

    function handleLogout(e) {
        e.preventDefault();
        logout();
        window.location.href = '/login';
    }

    console.log("userInfo", userInfo);

    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold hover:underline">黒予約アプリ</a>
                    <div className="space-x-4">
                        {localStorage.getItem('userInfo') ? (
                            <>

                                <a href="/admin/users" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">ユーザー一覧</a>
                                <a href="/admin/bookings" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">予約一覧</a>
                                <a href="/admin/rooms" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">部屋一覧</a>
                                <a href="/admin/rooms/new" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">部屋新規作成</a>
                                <a href="/admin/tags" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">タグ一覧</a>
                                <a href="/admin/tags/new" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">タグ新規作成</a>
                                <a href="/bookings" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">予約一覧</a>

                                <span className="bg-yellow-500 px-3 py-1 rounded-lg shadow-md">
                                    {JSON.parse(localStorage.getItem('userInfo')).email}
                                </span>
                                <a href="/logout" onClick={handleLogout} className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">ログアウト</a>
                                {/* <a href="/logout" onClick={handleLogout} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100">ログアウト</a> */}
                            </>
                        ) : (
                            <>
                                <a href="/register" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">ユーザー登録</a>
                                <a href="/login" className="transition-colors duration-200 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:outline-none">ユーザーログイン</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
