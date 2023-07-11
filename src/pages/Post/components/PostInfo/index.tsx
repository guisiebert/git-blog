import { Link } from "react-router-dom";
import { PostInfoContainer } from "./styles";
import { GithubLogo, Buildings, Users, Link as LinkIcon, ArrowLeft } from "@phosphor-icons/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo({post}) {
    const { title, original_url, author, date, comment_count } = post


    return (
        <PostInfoContainer>
            <nav>
                <Link className="a" to={'/'}>
                <FontAwesomeIcon icon={faChevronLeft} />
                    VOLTAR
                </Link>
                <Link className="a" to={original_url}>
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
            </nav>
            <h1>{title}</h1>
            <div className="stats">
                <span> <FontAwesomeIcon icon={faGithub} /> {author}</span>
                <span> <FontAwesomeIcon icon={faCalendarDay} /> {date}</span>
                <span> <FontAwesomeIcon icon={faComment} /> {comment_count} comments</span>
            </div>

        </PostInfoContainer>
    )
}