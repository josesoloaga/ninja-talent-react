import { css } from "@emotion/react";

export const userDetailsCardStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 80px;
  color: #fff;
`;

export const divPInfoStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 1rem;
  justify-content: center;
  z-index: 1;
`;

export const divInfoStyle = css`
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 1rem;
  width: 80vw;
  overflow-wrap: break-word;
`;

export const imgCardStyle = css`
  width: 12rem;
  top: 1rem;
  right: 1rem;
  border-radius: 3px;
  margin: auto;
  box-shadow: -2px 3px 8px -3px rgba(112, 111, 112, 0.75);
`;

export const buttonBackStyle = css`
  position: relative;
  box-shadow: -2px 3px 12px -3px rgba(0, 0, 0, 0.75);
  width: 8rem;
  heigth: 3.5rem;
  box-shadow: -0px 0px 10px -3px rgba(0, 0, 0, 0.75);
  background: #cf2e2e;
  color: rgb(238, 238, 238);
  border-radius: 4px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  z-index: 1;
`;

export const imgTechBackground = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0rem;
  opacity: 0.3;
  z-index: 0;
`;

export const divOtherInfo = css`
  position: relative;
  z-index: 1;
  text-align: center;
`;
