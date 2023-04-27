import { css } from "@emotion/react";
export const divContainerStyle = css`
  width: 100vw;
`;

export const headerContainerStyle = css`
  position: relative;
  top: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const h1Style = css`
  font-size: 5rem;
  color: rgb(238, 238, 238);
`;

export const pStyle = css`
  justify-content: flex-start;
  color: #cf2e2e;
`;

export const imgNinjaStyle = css`
  position: absolute;
  width: 10rem;
  top: 2rem;
  left: 1rem;
  opacity: 0.6;
`;

export const divButtonStyle = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const buttonEnterStyle = css`
  justify-content: center;
  text-align: center;
  padding: 0;
  width: 10rem;
  height: 4rem;
  background-color: rgb(207, 46, 46);
  box-shadow: -2px 3px 12px -3px rgba(0, 0, 0, 0.75);
  font-size: xx-large;
  color: rgb(238, 238, 238);
  margin-right: 3rem;
`;

export const imageTechStyle = css`
  opacity: 0.4;
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  width: 50%;
  z-index: 0;
`;
