import Header from "../../components/header/Header";

function Ingredients() {
  return (
    <main className="main ">
      <Header
        btnLabel={"Back to dashboard"}
        headerTitle={"Manage Ingredients"}
        btnBgColor="#7D5A50"
        path={"/"}
      />
    </main>
  );
}

export default Ingredients;
