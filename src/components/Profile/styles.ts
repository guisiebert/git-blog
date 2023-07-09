import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    gap: 2rem;

    margin: -7rem auto 0;
    width: 100%;
    max-width: 864px;
    padding: 2rem 2.5rem;

    background-color: ${props => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

    .avatar {
        width: 9.25rem;
        height: 9.25rem;
        /* flex-shrink: 0; */
        border-radius: 0.5rem;
    }

    .profile-content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        /* justify-content: space-between; */
        
        .name-display {
            display: flex;
            justify-content: space-between;
            align-items: start;

            h2 {
                color: ${props => props.theme['base-title']};
            }

            a {
                color: ${props => props.theme['blue']};
                text-decoration: none;
                font-size: 0.75rem;

                display: flex;
                gap: 0.25rem;
            }
        }

        p {
            line-height: 160%;
        }
        
        .stats {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-top: auto;

            span {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: ${props => props.theme['base-label']};
            }


        }


    }


`