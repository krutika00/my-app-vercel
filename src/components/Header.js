import react from 'react';

function Header() {
    return(
        <header>
        <p>This is a header. - 
            This header is rendering from Header component.
        </p>
        <img src="http://placekitten.com/400/300" height={150} width={150} />
        <p>Story</p>
    </header>
    )
}

export default Header;
