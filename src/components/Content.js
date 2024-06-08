import CardItem from "./CardItem";
import data from "./Data";

function Content() {
  return (
    <>
      <div className="container">
        {data.map((item) => (
          <CardItem
            src={item.src}
            name={item.name}
            price={item.price}
            rating={item.rating}
            sale={item.sale}
          />
        ))}
      </div>
    </>
  );
}
export default Content;
