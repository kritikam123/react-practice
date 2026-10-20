export function HackerNewsSearch() {
  return (
    <main>
      <h1>Hacker News Search</h1>
      <form action="">
        <div>
          <label>Search</label>
          <input type="text" name="query" placeholder="Search Hacker News..." />
        </div>

        <div>
          <label> Tag </label>
          <select name="tag" id="tag">
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
    </main>
  );
}
