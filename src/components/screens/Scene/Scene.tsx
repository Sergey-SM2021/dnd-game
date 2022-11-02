import {Cookie, ItemWrapper, ItemCount, Cell, Items, Store, Wrapper, Item} from "./Scene.style";
import rightCookie from "../../../assets/Cookie/CookieRight.png";
import cookieLeft from "../../../assets/Cookie/CookieLeft.png";
import cookie from "assets/Cookie/Cookie1.png";
import cookie2 from "assets/Cookie/Cookie2.png";
import cookie3 from "assets/Cookie/Cookie3.png";

export const Scene = () => {
    return <Wrapper>
        <Cookie draggable={false} src={rightCookie} alt={"pieces background"} width={100} height={100}/>
        <Cookie isLeft draggable={false} src={cookieLeft} alt={"pieces background"} width={300} height={300}/>
        <Items>
            <ItemWrapper draggable={true}>
                <ItemCount>3</ItemCount>
                <Item draggable={"false"} width={170} height={170} alt={'Печенька1'} src={cookie}/>
            </ItemWrapper>
            <ItemWrapper draggable={true}>
                <ItemCount>3</ItemCount>
                <Item draggable={"false"} width={170} height={170} alt={'Печенька1'} src={cookie2}/>
            </ItemWrapper>
            <ItemWrapper draggable={true}>
                <ItemCount>3</ItemCount>
                <Item draggable={"false"} width={170} height={170} alt={'Печенька1'} src={cookie3}/>
            </ItemWrapper>
        </Items>

        <Store>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </Store>
    </Wrapper>
}