import { articles } from "../fixtures/fixture";
import PageLayouts from "../pages";
import TitleContainer from "../textContainer/textArrayBlogs";
import "./style.css";

function BlogsWithArticles() {
  return (
    <>
      <PageLayouts title="Блоги">
        <ol>
          {articles.map((obj, index) => (
            <li>
              <TitleContainer {...obj} />
            </li>
          ))}
        </ol>
        <a href="/articles">Детальніше</a>
      </PageLayouts>
    </>
  );
}

export default BlogsWithArticles;
