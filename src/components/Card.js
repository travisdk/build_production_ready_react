import { useMemo } from "react";
const Card = ({ path, title, createdAt }) => {
  const timestamp = useMemo(() => {
    return new Date(createdAt.seconds * 1000).toString(); // date from milliseconds from creation - serverTimestamp
  }, []);
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <div style={{ height: "220px", backgroundImage: `url(${path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
        <h5 className="text-center">{title}</h5>
        <p>{timestamp}</p>
      </div>
    </div>
  );
};
export default Card;
