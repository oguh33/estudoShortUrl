import React from 'react';
import { HeaderContainer, Logo } from './styles';

import Icone from '../../assets/image.jpg';

function Header(props){
    return(
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='ShortUrl - Encurtador de URL' />
                <h1>ShortURL</h1>
                <p>{props.children}</p>
            </HeaderContainer>

        </>
    )
}

export default Header;