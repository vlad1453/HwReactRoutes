import { Articles } from "../../types/types";
import "./style.css";

function TitleContainer(props: Articles) {
  return (
    <>
      <h4>{props.title}</h4>
    </>
  );
}

export default TitleContainer;
