import styled from "@emotion/styled";

const yellow = "#FFD748"
const green = "#38DF7A"
const black = "#423F45"

export const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  height: 80%;
  background: #fff;
  background-clip: padding-box;
  border-radius: 50px;
  padding: 40px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -5px;
    right: -5px;
    bottom: -5px;
    top: -5px;
    z-index: -1;
    border-radius: 50px;
    background-image: linear-gradient(#7F75F0, #101F32);
  }
`

interface IButton {
    bg?: string
}

export const Button = styled('button')`
  background: ${(props: IButton) => (props.bg === "green" ? green : yellow)};
  border: none;
  padding: 10px 50px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.3rem;
  color: ${(props: IButton) => (props.bg === "green" ? "#fff" : black)};

  &:hover {
    cursor: pointer;
  }
`

export const Buttons = styled('div')`
  max-width: 800px;
  width: 100%;
  display: flex;
  gap: 100px;
  justify-content: space-between;
`

export const Text = styled('h3')`
  font-weight: 700;
  font-size: 2.5rem;
  color: ${black};
`

export const LabelList = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;

  > div {
    width: 1rem;
  }
`

export const Range = styled('div')`
  width: 100%;
  max-width: 800px;
`

export const Input = styled('input')`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  max-width: 800px;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(90deg, #eccb51, #FFD748);
    border-radius: 10px;
  }

  &::-moz-range-track {
    -moz-appearance: none;
    appearance: none;
    background: linear-gradient(90deg, #eccb51, #FFD748);
    border-radius: 10px;
  }

  &::-moz-range-thumb {

  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1rem;
    width: 1rem;
    background-color: #104987;
    border-radius: 50px;
  }
`

export const Start = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: flex-end;
`

export const Radio = styled('input')`
  appearance: none;
  padding: .5rem 1.5rem;
  box-sizing: border-box;
  min-width: 100px;
  width: 100%;
  height: 3rem;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #FFD748FF;
  opacity: 0.6;

  &:checked {
  opacity: 1;
  }
`

export const SetMode = styled('div')`
  width: 100%;
  position: relative;
`

export const Label = styled('label')`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  transform: translate(-50%,-50%);
`