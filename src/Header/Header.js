function Header() {
    return(
        <header>
            <h1>Header</h1>
            <Nav/>
        </header>
    );
}

function Nav() {
    return(
        <nav>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </nav>
    )
}

export default Header;