import {Button, Buttons, Input, Label, LabelList, Radio, Range, SetMode, Start, Text, Wrapper} from "./Menu.style"
import {useRouter} from "next/router";
import {ChangeEvent, useContext, useState} from "react";
import {ISettingsProvider, SettingsContext} from "provider";

export const Menu = () => {
    const [ , setContext] = useContext(SettingsContext)
    const router = useRouter()
    const [settings, setSettings] = useState<ISettingsProvider>({count: "1", mode: "0", values: "1"})

    const handlerSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        const values = e.currentTarget.value
        setSettings((prev) => ({...prev, values: values}))
    }

    const handlerSetCount = (e: ChangeEvent<HTMLInputElement>) => {
        const count = e.currentTarget.value
        setSettings((prev) => ({...prev, count}))
    }

    const handlerPlay = () => {
        setContext(settings)
        router.push("/Game")
    }

    const handlerSetMode = (e: ChangeEvent<HTMLInputElement>) => {
        const mode = e.currentTarget.value
        setSettings((prev) => ({...prev, mode}))
    }

    return (<Wrapper>
        <Text>Кол-во предметов</Text>
        <Range>
            <Input type="range" list={"count"} min={2} max={5} onChange={handlerSetCount} defaultValue={settings.count}/>
            <datalist id={"count"}>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
            </datalist>
            <LabelList>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </LabelList>
        </Range>
        <Text>Значения</Text>
        <Range>
            <Input type="range" onChange={handlerSetValue} list={"value"} min={"1"} max={"6"} defaultValue={settings.values}/>
            <datalist id={"value"}>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
            </datalist>
            <LabelList>
                <div>A</div>
                <div>9</div>
                <div>19</div>
                <div>50</div>
                <div>99</div>
                <div>999</div>
            </LabelList>
        </Range>
        <Buttons>
            <SetMode>
                <Label htmlFor="increase"><h3>По возрастанию</h3></Label>
                <Radio onChange={handlerSetMode} id={"increase"} type={'radio'} value={'0'} name={'mode'} defaultChecked={true}/>
            </SetMode>
            <SetMode>
                <Label htmlFor="decrease"><h3>По убыванию</h3></Label>
                <Radio onChange={handlerSetMode} id={"decrease"} type={'radio'} value={"1"} name={'mode'}/>
            </SetMode>
        </Buttons>
        <Start>
            <Button onClick={handlerPlay} bg={"green"}>Играть</Button>
        </Start>
    </Wrapper>)
}