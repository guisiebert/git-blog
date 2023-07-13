import { Link } from "react-router-dom";
import { PostInfoContainer, PostInfoContent } from "./styles";
import { DateFormatter } from "../../../../utils/formatter.ts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from "react";
import { AuthorContext } from "../../../../contexts/AuthorContext";

export function PostInfo({post}) {
    const { title, html_url, created_at, comments } = post

    const { login } = useContext(AuthorContext)


    return (
        <PostInfoContainer>
            <PostInfoContent>
                <nav>
                    <Link className="a" to={'/'}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </Link>
                    <Link className="a" to={html_url}>
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Link>
                </nav>
                <h1>{title}</h1>
                <div className="stats">
                    <span> <FontAwesomeIcon icon={faGithub} /> {login}</span>
                    <span> <FontAwesomeIcon icon={faCalendarDay} /> {created_at}</span>
                    <span> <FontAwesomeIcon icon={faComment} /> {comments} comments</span>
                </div>

            </PostInfoContent>
        </PostInfoContainer>
    )
}