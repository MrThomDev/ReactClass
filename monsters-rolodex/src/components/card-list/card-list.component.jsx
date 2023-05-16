import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ filteredMonster }) => {
  return (
    <div className="card-list">
      {filteredMonster.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
