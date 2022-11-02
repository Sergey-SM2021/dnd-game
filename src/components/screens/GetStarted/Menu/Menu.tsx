import {Wrapper, Text, Button, Buttons, Input, LabelList, Range, Start} from "./Menu.style"
import {useRouter} from "next/router";

export const Menu = () => {
    const router = useRouter()
    const handlerPlay = () => {
        router.push("/Game")
    }
    return (<Wrapper>
        <Text>Кол-во предметов</Text>
        <Range>
            <Input type="range" list={"count"} min={2} max={5}/>
            <datalist id={"count"}>
                <option value="1" label={"hi"}></option>
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
            <Input type="range" list={"value"} min={"1"} max={"6"}/>
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
            <Button>По возрастанию</Button>
            <Button>По убыванию</Button>
        </Buttons>
        <Start>
            <Button onClick={handlerPlay} bg={"green"}>Играть</Button>
        </Start>
    </Wrapper>)
}