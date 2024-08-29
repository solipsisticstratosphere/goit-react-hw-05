export default function ArticleList({ articles }) {
  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
