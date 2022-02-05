function Header(props) {
    return(
        <header>
            <h1>{props.data.site_name}</h1>
            {/* <h1>{props.sitename}</h1> */}
         {/* <Nav nav= {props.data.nav} /> */}
         <Nav nav={props.data.nav}/>
        </header>
    );
}

function Nav(props) {
    let data = props.nav;
    const listItem = data.map( item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
    return(
        <nav>
            <ul>
            {listItem}
            </ul>
        </nav>
    )
}

export default Header;