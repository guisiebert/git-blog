import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between ;


    height: 18.5rem;
    background-color: ${props => props.theme['base-profile']};

    .logo {
        margin-bottom: 7rem;
    }

`