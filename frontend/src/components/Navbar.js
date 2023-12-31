import React from "react";
import { useAuthStore } from "../state/store";

function Navbar() {
    const { logout } = useAuthStore();

    function handleLogout(e) {
        e.preventDefault();
        logout();
        window.location.href = '/login';
    }

    const isAdmin = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).admin;

    return (
        <div className="bg-custom-orange-lighter text-custom-orange-darker py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold hover:underline">
                        黒予約アプリ {isAdmin && "(Admin)"}
                    </a>
                    <div className="space-x-4">
                        {localStorage.getItem('userInfo') ? (
                            <>
                                {isAdmin ? (
                                    <>
                                        <a href="/admin/users" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">ユーザー一覧</a>
                                        <a href="/admin/bookings" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">予約一覧</a>
                                        <a href="/admin/rooms" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">部屋一覧</a>
                                        <a href="/admin/rooms/new" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">部屋新規作成</a>
                                        <a href="/admin/tags" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">タグ一覧</a>
                                        <a href="/admin/tags/new" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">タグ新規作成</a>

                                    </>
                                ) : (
                                    <a href="/bookings" className="transition-colors duration-200 px-4 py-2 text-black rounded bg-custom-orange-light hover:bg-custom-orange-dark focus:bg-custom-orange-darker focus:outline-none">予約一覧</a>
                                )}
                                <span className="bg-custom-orange-lighter text-custom-orange-darkest px-3 py-1 rounded-lg shadow-md">
                                    {JSON.parse(localStorage.getItem('userInfo')).email}
                                </span>
                                <a href="/logout" onClick={handleLogout} className="text-black transition-colors duration-200 px-4 py-2 rounded bg-red-500 hover:bg-red-400 focus:bg-red-600 focus:outline-none">ログアウト</a>
                            </>
                        ) : (
                            <>
                                <a href="/register" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">ユーザー登録</a>
                                <a href="/login" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-orange-lightest font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">ユーザーログイン</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;
