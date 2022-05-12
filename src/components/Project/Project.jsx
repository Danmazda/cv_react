export const Project = ({ props }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-1/3"
      key={props.title}
    >
      <h2 className="text-xl">{props.title}</h2>
      <p className="text-sm"> {props.text}</p>
      <a href={props.githubLink} target="_blank" rel="noreferrer">
        <iframe src={props.link} frameborder="0" title="aggretsuko"></iframe>{" "}
        Github link
      </a>
    </div>
  );
};
