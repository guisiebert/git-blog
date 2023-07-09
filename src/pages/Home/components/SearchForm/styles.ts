import { styled } from "styled-components";


export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 100%;
    max-width: 864px;
    margin: 4.5rem auto 0;


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

export const SearchForm = styled.form`

`