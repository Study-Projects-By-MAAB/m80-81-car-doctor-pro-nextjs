import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";
// import First from "@/services/First";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Car Doctor Pro",
        template: "%s | Car Doctor Pro",
    },
    description: "Car Repairing workshop",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className={inter.className}>
                    <ToastContainer />
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </AuthProvider>
        </html>
    );
}
