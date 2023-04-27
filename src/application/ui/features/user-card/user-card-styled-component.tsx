import { css } from "@emotion/react";

export const cardListStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: -2px 3px 12px -3px rgba(112, 111, 112, 0.75);
  margin: 2rem;
  max-width: 40%;
  min-width: 16rem;
  font-size: 12px;
  word-break: break-word;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  color: rgb(238, 238, 238);
  background-color: #1a1a1a;
  z-index: 1;
`;

export const imgCardStyle = css`
  max-width: 8rem;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  margin: auto;
  box-shadow: -2px 3px 8px -3px rgba(0, 0, 0, 0.75);
`;

export const buttonDetailsCardStyle = css`
  box-shadow: -0px 0px 10px -3px rgba(0, 0, 0, 0.75);
  background: transparent;
  color: rgb(238, 238, 238);
  border: 1px solid rgb(238, 238, 238);
  border-radius: 4px;
  margin-top: 1rem;
`;
