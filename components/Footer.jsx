export default function Footer() {
    return (
        <footer className="py-4 flex justify-center pb-8 flex-col items-center justify-center w-full">
            <p>© {new Date().getFullYear()} SkyWave</p>

            <p className="footer-text text-sm flex items-center gap-1">
                Made by
                <a
                    href="https://github.com/nott-po/skywave-weather"
                    target="_blank"
                    className=" text-rose-400 font-bold"
                >
                    Polina Nott
                </a>
            </p>
        </footer>


    );
}
