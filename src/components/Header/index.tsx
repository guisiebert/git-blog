import { HeaderContainer } from "./styles";
import logo from './../../assets/gitblog-logo.svg';
import bgRight from './../../assets/bg-right.svg';
import bgLeft from './../../assets/bg-left.svg';

export function Header() {
    return (
        <HeaderContainer>
            <img src={bgLeft} alt="" />
            <img className="logo" src={logo} alt="" />
            <img src={bgRight} alt="" />
        </HeaderContainer>
    )
}