import Image, {StaticImageData} from "next/image";
import {Wrapper} from "./BG.style";

interface IProps{
    src: StaticImageData
}

export const BG = ({src}:IProps) => {
    return (<Wrapper>
        <Image src={src} alt={'layout'} layout={'fill'} objectFit={'cover'}/>
    </Wrapper>)
}