import "./components.css";
export default function BButton(props) {
  console.log(`props`, props);
  const { but } = props;
  return (
    <>
      <div className="aa">
        <a href={"/" + but.URl}>
          <button className="but">{but.name}</button>
        </a>
      </div>
    </>
  );
}
