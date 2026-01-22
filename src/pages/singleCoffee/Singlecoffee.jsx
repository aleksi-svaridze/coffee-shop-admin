import Styles from "./SingleCoffee.module.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

export default function SingleCoffee() {
  const params = useParams();

  return (
    <main className="main">
      <Header
        btnBgColor="#B4846C"
        btnLabel={"Back to Dashboard"}
        headerTitle={"Coffee Details"}
        path={"/"}
      />
      <section className={Styles.coffee__container}>
        <h2>Coffee ID: {params.id}</h2>
      </section>
    </main>
  );
}
