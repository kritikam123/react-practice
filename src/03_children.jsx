const user = {
  name: "Kritika",
  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  handle: "kritika123",
};
export function Children({ name, handle, img }) {
  const handleAddFriend = () => alert("Added");
  return (
    <div>
      <img
        alt={user.name}
        src={user.img}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid white",
        }}
      />
      <header>
        <h4>{user.name}</h4>
        <h6>@{user.handle}</h6>
      </header>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero omnis
        fuga, ex magni veniam labore, eum nostrum assumenda saepe ipsum
        voluptatem ipsa sint molestiae eligendi voluptate nam hic, est
        laboriosam!
      </p>
      <button onClick={handleAddFriend}>Add Friend</button>
    </div>
  );
}
