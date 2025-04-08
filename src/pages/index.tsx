import { Children } from "../types/types";
import "./syyle.css";
function PageLayouts(props: Children) {
  return (
    <>
      <div className="header">
        <p>
          <a href="/">Головна сторінка</a>
        </p>
        <p>
          <a href="/AboutUs">Про нас</a>
        </p>
        <p>
          <a href="/Blogs">Блоги</a>
        </p>
      </div>
      <p></p>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      {props.children}
    </>
  );
}

export default PageLayouts;
