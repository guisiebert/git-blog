import { styled } from "styled-components";

export const BlogPostContainer = styled.div`
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;
`

export const BlogPostText = styled.div`
    padding: 3rem 4rem;
    line-height: 130%;

    p, h3 {
        margin-top: 1rem;
    }
    
    li {
        margin: 2rem 5rem;
    }

    a {
        color: ${props => props.theme['blue']};
    }

    hr {
        margin: 3rem 6rem;
    }
`