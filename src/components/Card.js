import { useMemo } from "react";
const Card = ({ path, title, createdAt }) => {
  const timestamp = useMemo(() => {
    const date = `${new Date(createdAt.seconds * 1000)}`.split(" ");
    return `${date[1]} ${date[2]} ${date[3]}`; // date from milliseconds from creation - serverTimestamp
  }, [createdAt]);
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <div style={{ height: "220px", backgroundImage: `url(${path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
        <h5 className="text-center m-1">{title}</h5>
        <div className="d-flex p-2 justify-content-between">
          <p>{timestamp}</p>
          <i>@username</i>
        </div>
      </div>
    </div>
  );
};
export default Card;
