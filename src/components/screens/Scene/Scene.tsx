import {Cookie, Cell, Items, Store, Wrapper} from "./Scene.style";
import rightCookie from "assets/Cookie/CookieRight.png";
import cookieLeft from "assets/Cookie/CookieLeft.png";
import {DragEvent, useContext, useEffect, useRef, useState} from "react";
import {SettingsContext} from "provider";
import {Item} from "./Item/Item";
import cookie from "assets/Cookie/Cookie1.png";
import {StaticImageData} from "next/image";
import {v4 as uuidv4} from 'uuid';

export interface IItem {
    order: number
    id: string
    src: StaticImageData
    value: string
}

export const Scene = () => {
    let order = useRef(0)
    let storeOrder = useRef(0)
    const [context,] = useContext(SettingsContext)

    const items = new Array<IItem>(Number(context?.count))
        .fill({order: order.current, value: "3", id: uuidv4(), src: cookie})
        .map(el => {
            const mutedEl = {...el, order: order.current}
            order.current++
            return mutedEl
        })

    console.log(items)

    const [store, setStore] = useState<Array<IItem>>(new Array(Number(context?.count)).fill({
        order: storeOrder.current,
        value: "",
        id: uuidv4(),
        src: ""
    }).map(el => {
        const mutedEl = {...el, order: order.current}
        order.current++
        return mutedEl
    }))

    const [current, setCurrent] = useState<IItem>()

    const handlerDragStart = (e: DragEvent<HTMLDivElement>, item: IItem) => {
        setCurrent(item)
    }

    const handlerDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handlerDrop = (e: DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault()
        setStore(store => [...store].map((el, i) => i === index ? current as IItem : el))
    }
    const handlerSoredItemDrag = (item:IItem) => {
    }
    return (<Wrapper>
        <Cookie draggable={false} src={rightCookie} alt={"pieces background"} width={100} height={100}/>
        <Cookie isLeft draggable={false} src={cookieLeft} alt={"pieces background"} width={300} height={300}/>
        <Items>{items.map(item => <Item item={item}
                                        onDragStart={(e: DragEvent<HTMLDivElement>) => handlerDragStart(e, item)}/>)}</Items>
        <Store>
            {store.map((item, index) => item.src ? <Item item={item} onDragStart={()=>handlerSoredItemDrag(item)}/> : <Cell
                draggable
                onDrop={(event: DragEvent<HTMLDivElement>) => handlerDrop(event, index)}
                onDragOver={(event: DragEvent<HTMLDivElement>) => handlerDragOver(event)}
            />)}
        </Store>
    </Wrapper>)
}