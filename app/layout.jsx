import "../styles/globals.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


const RootLayout = ({ children }) => {
    return (
        <html lang="en">
        <body>
        {/*
            <div className="main">
                <div className="background" />
            </div>
        */}
        <main className="app">
            <NavBar />
            {children}
            <Footer />
        </main>
        </body>
        </html>
    );
}

export default RootLayout