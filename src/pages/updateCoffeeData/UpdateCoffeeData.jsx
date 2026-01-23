import UpdateCoffeeDataForm from "../../components/forms/updateCoffeeDataForm/UpdateCoffeeDataForm";
import Header from "../../components/header/Header";

function UpdateCoffeeData() {
  return (
    <main className="main">
      <Header
        btnLabel="Back to Dashboard"
        headerTitle="Edit Coffee"
        btnBgColor="#7D5A50"
        path="/"
      />

      <UpdateCoffeeDataForm />
    </main>
  );
}

export default UpdateCoffeeData;
