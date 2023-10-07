// src/components/Navbar.js
import React from "react";

function Navbar() {

    //   function logout() {
    //     localStorage.removeItem('currentUser')
    //     window.location.href='/login'
    //   }

    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">黒さん予約アプリ</a>
                    <div className="space-x-4">
                        {localStorage.getItem('currentUser') ? (
                            <div className="relative inline-block text-left">
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none">
                                    <i className="fa fa-user mr-2"></i>
                                    {JSON.parse(localStorage.getItem('currentUser')).name}
                                </button>
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <div className="rounded-md bg-white shadow-xs">
                                        <a href="/profile" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100">Profile</a>

                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <a href="/bookings" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">予約一覧</a>
                                <a href="/register" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">ユーザー登録</a>
                                <a href="/login" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">ユーザーログイン</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
