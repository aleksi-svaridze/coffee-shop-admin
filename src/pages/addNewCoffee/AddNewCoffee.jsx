import Header from "../../components/header/Header";

function AddNewCoffee() {
  return (
    <main className="main">
      <Header
        btnLabel={"Back to dashboard"}
        headerTitle={"Add New Coffee"}
        btnBgColor="#B4846C"
        path={"/"}
      />
    </main>
  );
}

export default AddNewCoffee;
