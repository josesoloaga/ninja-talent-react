import { useNavigate } from "react-router";
import image from "../../../../infrastructure/assets/fondo2Ninja.png";
import imageTech from "../../../../infrastructure/assets/porque-ser-ninja.png"
import {
  buttonEnterStyle,
  divButtonStyle,
  divContainerStyle,
  h1Style,
  headerContainerStyle,
  imageTechStyle,
  imgNinjaStyle,
  pStyle,
} from "./init-stiled-component";

const InitComponent = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home");
  };

  return (
    <div css={divContainerStyle}>
      <div css={headerContainerStyle}>
        <h1 css={h1Style}>React-junior 83108</h1>
        <p css={pStyle}>Jose Soloaga Martín.</p>
      </div>
      <img css={imgNinjaStyle} src={image} alt="Portada_img" />
      <div css={divButtonStyle}>
        <button css={buttonEnterStyle} onClick={handleEnter}>
          Entrar
        </button>
      </div>
        <img css={imageTechStyle} src={imageTech} alt="image-tech" />
    </div>
  );
};

export default InitComponent;
