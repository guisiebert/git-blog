import { styled } from "styled-components";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    padding: 2rem;
    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;

    header {
        display: flex;
        gap: 1rem;

        h2 {
            color: ${props => props.theme['base-title']};
            font-size: 1.25rem;
            line-height: 160%;
        }

        span {
            color: ${props => props.theme['base-span']};
            font-size: 0.875rem;
            /* font-weight: 400; */
            line-height: 160%;
            width: 6.5rem;
            text-align: end;
        }
    }

    .excerpt {
        height: 7rem;
        overflow: hidden;
        color: ${props => props.theme['base-text']};

        text-overflow: ellipsis;
        font-size: 1rem;
        font-weight: 400;
        line-height: 160%;
    }

`