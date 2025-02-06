"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryCache, QueryClientProvider } from "@tanstack/react-query";
import { toast, Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import SideBar from "@/components/Admin/SideBar/SideBar";
import Navbar from "@/components/Admin/Navbar/Navbar";
import LoadingFetch from "@/components/Admin/LoadingFetch/LoadingFetch";

import "./globals.css";
import axios from "axios";
import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({ subsets: ['latin'], display: 'swap' })
axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL_API;
// axios.defaults.withCredentials = true;
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname();
    const isAdminPage = path !== "/admin/login";
    const queryClient = useMemo(
        () =>
            new QueryClient({
                queryCache: new QueryCache({
                    onError: (err: any) => {
                        console.log(err?.response?.status);
                        if (err?.response?.status === 403) {
                            toast.error("You are not allowed to do this");
                            localStorage.setItem("user", "");
                            window.location.href = "/";
                        } else {
                            toast.error("We encountered an error in connection with the database");
                        }
                    },
                }),
            }),
        []
    );
    return (
        <html lang="en" dir="ltr">
            <body className={`w-full p-3 md:p-5 min-h-screen bg-[#f4f4f5] ${josefinSans.className}`}>
                <QueryClientProvider client={queryClient}>
                    <NextUIProvider>
                        <main className="flex gap-10">
                            {isAdminPage && <SideBar />}
                            <div className={isAdminPage ? "w-full md:w-10/12" : "w-full"}>
                                <Navbar />
                                {children}
                            </div>
                            <LoadingFetch />
                            <Toaster />
                        </main>
                    </NextUIProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
