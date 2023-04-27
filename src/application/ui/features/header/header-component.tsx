import { css } from "@emotion/react";

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  background-color: #fff;
  height: 60px;
  width: 100%;
  top: 0;
  z-index: 2;
  & > h1 {
    margin: 0;
  }
`;

const h1Style = css`
  width: 100vw;
  height: 100%;
  overflow: auto;
  color: #e51d20;
  background-color: #333333;
`;

const pStyle = css`
  color: #fff;
  background-color: #e51d20;
  height: 100%;
  width: 100%;
  opacity:0.9;
`;

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header css={headerStyle} data-testid="header-component">
      <h1 css={h1Style}>{children}</h1>
      <p css={pStyle}>Jose Soloaga Martín</p>
    </header>
  );
};

export default Header;
