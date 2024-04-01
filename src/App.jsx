import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:8080/api/products")
      .then((res) => {
        console.log(res.data.response.docs);
        setProducts(res.data.response.docs);
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <NavBar />
      <main>
        <section
          id="items"
          className="d-flex flex-wrap justify-content-evenly w-50 mt-2 mb-4"
        >
          {products.map((each) => (
            <a key={each._id} href="#" className="card m-2 anchor">
              <img
                src={each.photo}
                className="card-img-top object-fit-cover"
                alt="{{this.title}}"
              />
              <h5 className="p-2 text-center card-title">{each.title}</h5>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
