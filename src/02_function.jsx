export function Avatar({ img, name }) {
  return (
    <img
      src={img}
      alt={name}
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "3px solid white",
      }}
    />
  );
}

export function Name({ name }) {
  return <h4>{name}</h4>;
}

export function Handle({ handle }) {
  return <p>@{handle}</p>;
}

export function Card({ style, user, addFriend }) {
  return (
    <div style={style}>
      <Avatar img={user.img} name={user.name} />

      <div>
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button onClick={addFriend}>Add Friend</button>
      </div>
    </div>
  );
}
