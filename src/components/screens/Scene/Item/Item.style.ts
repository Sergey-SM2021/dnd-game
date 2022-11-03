import styled from "@emotion/styled";
import Image from "next/image";

export const ItemWrapper = styled('div')`
  background-color: transparent;
  position: relative;
`

export const ItemCount = styled('div')`
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  color: #ffffff;
  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
  1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`

export const ItemContent = styled(Image)`
    display: block;
    position: relative;
`