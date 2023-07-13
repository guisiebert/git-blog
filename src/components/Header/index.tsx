import { HeaderContainer } from "./styles";
import logo from './../../assets/gitblog-logo.svg';
import bgRight from './../../assets/bg-right.svg';
import bgLeft from './../../assets/bg-left.svg';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={bgLeft} alt="" />
            <Link to={'/'}>
                <img className="logo" src={logo} alt="" />
            </Link>
            <img src={bgRight} alt="" />
        </HeaderContainer>
    )
}