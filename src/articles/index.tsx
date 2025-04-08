import { useParams } from "react-router";
import "./style.css";
import { getArticleById } from "../fixtures/fixture";
import { articles } from "../fixtures/fixture";
import PageLayouts from "../pages";

function ArticlesById() {
  let { id } = useParams();

  const product = getArticleById(Number(id));

  return (
    <>
      <a href="/Blogs">Назад до Блогів</a>
      <p>Шукайте статтю за ID</p>

      <h2>{product.title}</h2>
      <p>{product.text}</p>
    </>
  );
}

export default ArticlesById;
