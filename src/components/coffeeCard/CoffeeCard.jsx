import Btn from "../buttons/Btn";

function CoffeeCard() {
  return (
    <div className="card">
      <footer>
        <Btn bgColor="#B4846C" label="View More" />
        <div>
          <Btn bgColor="#7D5A50" label="Edit" />
          <Btn bgColor="#e74c3c" label="Delete" />
        </div>
      </footer>
    </div>
  );
}

export default CoffeeCard;
