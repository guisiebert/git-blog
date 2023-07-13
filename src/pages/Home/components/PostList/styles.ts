import { styled } from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    max-width: 864px;
    margin: 4.5rem auto;
    padding: 0rem 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;


`

export const SearchBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;


    .summary {
        display: flex;
        justify-content: space-between;

        strong {
            font-size: 1.125rem;
            color: ${props => props.theme['base-subtitle']};
            line-height: 160%;
            font-weight: 700;
        }

        p {
            font-size: 0.875rem;
            color: ${props => props.theme['base-span']};
            font-weight: 400;
            line-height: 160%;
        }


    }

    input {
        width: 100%;
        padding: 0.75rem 1rem;

        border-radius: 0.375rem;
        border: 1px solid ${props => props.theme['base-border']};
        background: ${props => props.theme['base-input']};

        line-height: 160%;
        font-weight: 400;
        color: ${props => props.theme['base-text']};
        
        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }
`

export const PostListContainer = styled.div`
    /* width: 100%;
    max-width: 864px;
    margin: 3rem auto; */
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;


    a {
        text-decoration: none;
    }



`

