import "../styles/globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import ThemeProviders from "../Providers/ThemeProviders.jsx";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body >
        <ThemeProviders
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            enableSystem
        >
            <main className="app">
                <NavBar/>
                {children}
                <Footer/>
                <SpeedInsights />
            </main>
        </ThemeProviders>
        </body>
        </html>
    );
}
