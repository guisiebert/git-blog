import { ProfileContainer } from "./styles";
import { GithubLogo, Buildings, Users, Link } from "@phosphor-icons/react";


const avatarImg = "https://avatars.githubusercontent.com/u/114298014?v=4"


export function Profile() {
    return (
        <ProfileContainer>
            <img className="avatar" src={avatarImg} alt="" />
            <div className="profile-content">
                <div className="name-display">
                    <h2>Cameron Williamson</h2>
                    <a href="">
                        GITHUB
                        <Link size={12}/> 
                    </a>
                </div>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div className="stats">
                    <span><GithubLogo/> cameronwll</span>
                    <span><Buildings/> Rocketseat</span>
                    <span><Users/> 32 seguidores</span>
                </div>

            </div>
        </ProfileContainer>
    )
}