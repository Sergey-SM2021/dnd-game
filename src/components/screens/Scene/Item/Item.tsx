import {ItemContent, ItemCount, ItemWrapper} from "./Item.style";
import {IItem} from "../Scene";

interface IProps {
    item: IItem
    onDragStart: any
}

export const Item = ({item, onDragStart}: IProps) => {
    return (<ItemWrapper draggable={true} onDragStart={onDragStart}>
        <ItemCount>3</ItemCount>
        <ItemContent draggable={"false"} width={170} height={170} alt={'Печенька1'} src={item.src}/>
    </ItemWrapper>)
}