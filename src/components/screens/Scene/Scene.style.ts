import styled from "@emotion/styled";
import Image from "next/image";

const bgColor = '#DEC6AA'

export const Wrapper = styled('div')`
  background: ${bgColor};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

interface ICookie{
    isLeft?: boolean
}

export const Cookie = styled(Image)<ICookie>`
  width: 612px;
  height: ${(props)=>props.isLeft?"612px":"400px"};;
  object-fit: contain;
  position: absolute;
  left: ${(props)=>props.isLeft?"-120px":"auto"};
  right: ${(props)=>(props.isLeft?"auto":"-170px")};
`

export const Store = styled('div')`
  background-color: #fff;
  width:80%;
  height: 25%;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%);
  background-image: url("/storeBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .3;
  background-position: center;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Cell = styled('div')`
  opacity: .7;
  width: 170px;
  height: 170px;
  border-radius: 100%;
  background-image: radial-gradient(white,black);
`

export const Items = styled('div')`
  padding-top: 5%;
  justify-content: center;
  display: flex;
  gap: 5%;
`