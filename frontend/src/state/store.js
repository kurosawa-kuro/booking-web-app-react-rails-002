// frontend\src\state\store.js

import { create } from "zustand";

export const useAuthStore = create((set) => {
    const storedUserInfo = localStorage.getItem("userInfo");

    return {
        userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
        setUserInfo: (userInfo) => {
            console.log("userInfo.data", userInfo.data);
            localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
            const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
            localStorage.setItem("expirationTime", expirationTime.toString());

            set({ userInfo: userInfo.data });
        },
        logout: () => {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("expirationTime");

            set({ userInfo: null });
        },
    };
});
