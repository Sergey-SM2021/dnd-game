import {Wrapper} from "./GetStarted.style"
import menuBg from "../../../assets/menuBg.png";
import {Menu} from "./Menu/Menu";
import {BG} from "../../ui/BG/BG";

export const GetStarted = () => {
    return (<Wrapper>
        <BG src={menuBg}/>
        <Menu/>
    </Wrapper>)
}