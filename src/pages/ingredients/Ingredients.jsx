import Header from "../../components/header/Header";

function Ingredients() {
  return (
    <main className="main ">
      <Header
        btnLabel={"Back to dashboard"}
        headerTitle={"Manage Ingredients"}
        btnBgColor="#B4846C"
        path={"/"}
      />
    </main>
  );
}

export default Ingredients;
