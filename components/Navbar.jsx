const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                <p>Desktop Nav</p>
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                <p>Mobile Nav</p>
            </div>
        </nav>
    )
}

export default NavBar;