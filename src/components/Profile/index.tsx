import { useContext } from "react";
import { ProfileContainer } from "./styles";
import { AuthorContext } from "../../contexts/AuthorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const avatarImg = "https://avatars.githubusercontent.com/u/114298014?v=4"




export function Profile() {

    const author = useContext(AuthorContext)

    return (
        <ProfileContainer>
            <img className="avatar" src={author.avatar_url} alt="" />
            <div className="profile-content">
                <div className="name-display">
                    <h2>{author.name}</h2>
                    <Link to={author.html_url} className="git">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
                    </Link>
                </div>
                <p>{author.bio}</p>
                <div className="stats">
                    <span><FontAwesomeIcon icon={faGithub} />{author.login}</span>
                    <span><FontAwesomeIcon icon={faBuilding} />{author.company}</span>
                    <span><FontAwesomeIcon icon={faUserGroup} />{author.followers} followers</span>
                </div>

            </div>
        </ProfileContainer>
    )
}