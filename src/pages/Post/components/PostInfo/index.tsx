import { Link } from "react-router-dom";
import { PostInfoContainer } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo({post}) {
    const { title, url, user, created_at, comments } = post
    console.log(post)


    return (
        <PostInfoContainer>
            <nav>
                <Link className="a" to={'/'}>
                <FontAwesomeIcon icon={faChevronLeft} />
                    VOLTAR
                </Link>
                <Link className="a" to={url}>
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
            </nav>
            <h1>{title}</h1>
            <div className="stats">
                <span> <FontAwesomeIcon icon={faGithub} /> Someone</span>
                <span> <FontAwesomeIcon icon={faCalendarDay} /> {created_at}</span>
                <span> <FontAwesomeIcon icon={faComment} /> {comments} comments</span>
            </div>

        </PostInfoContainer>
    )
}