export const USER_DATA = {
  name: "John Maharjan",
  img: "https://avatars.githubusercontent.com/u/6645985",
  handle: "johnhero",
};

export function Badge({ style, user }) {
  return (
    <div style={style}>
      <img alt={user.name} src={user.img} />
      <div>
        <h4>{user.name}</h4>
        <p>@{user.handle}</p>
      </div>
    </div>
  );
}
