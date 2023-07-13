import { styled } from "styled-components";

export const PostInfoContainer = styled.div`
    padding: 2rem 2.5rem;


`

export const PostInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    margin: -7rem auto 0;
    width: 100%;
    max-width: 54rem;
    padding: 2rem 2.5rem;

    background-color: ${props => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    nav {
        display: flex;
        justify-content: space-between;

        .a {
            display: flex;
            gap: 0.5rem;
            text-transform: uppercase;
            font-size: 0.75rem;
            font-weight: bold;
            color: ${props => props.theme['blue']};

            text-decoration: none;
            border-bottom: 2px solid transparent;

            &:hover {
                border-bottom: 2px solid ${props => props.theme['blue']};
                transition: 0.2s;
            }
        }
    }

    h1 {
        font-size: 1.5rem;
        line-height: 130%;
        margin-top: 1.25rem;
    }


        
    .stats {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-top: 0.5rem;

        span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${props => props.theme['base-label']};
        }


    }



`