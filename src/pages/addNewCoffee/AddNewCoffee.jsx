import Header from "../../components/header/Header";

function AddNewCoffee() {
  return (
    <main className="main">
      <Header
        btnLabel={"Back to dashboard"}
        headerTitle={"Add New Coffee"}
        btnBgColor="#7D5A50"
        path={"/"}
      />
    </main>
  );
}

export default AddNewCoffee;
