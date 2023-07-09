import { useEffect, useState } from "react";
import { ProfileContainer } from "./styles";
import { GithubLogo, Buildings, Users, Link } from "@phosphor-icons/react";
import axios from "axios";


const avatarImg = "https://avatars.githubusercontent.com/u/114298014?v=4"




export function Profile() {
    const [author, setAuthor] = useState({
        avatar_url: "",
        name: "",
        html_url: "",
        bio: "",
        login: "",
        company: "",
        followers: 0,
    })

    async function fetchAuthor() {
        const data = await axios.get('https://api.github.com/users/guisiebert').then(res => res.data)
        setAuthor(data)
    }

    useEffect(() => {
        fetchAuthor()
    }, [])



    return (
        <ProfileContainer>
            <img className="avatar" src={avatarImg} alt="" />
            <div className="profile-content">
                <div className="name-display">
                    <h2>{author.name}</h2>
                    <a href={author.html_url}>
                        GITHUB<Link size={14}/> 
                    </a>
                </div>
                <p>{author.bio}</p>
                <div className="stats">
                    <span><GithubLogo weight="fill" size={20}/>{author.login}</span>
                    <span><Buildings weight="fill" size={20}/>{author.company}</span>
                    <span><Users weight="fill" size={20}/>{author.followers} followers</span>
                </div>

            </div>
        </ProfileContainer>
    )
}