import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeEffect = () => {
  const [number, setnumber] = useState(0);
  const [name, setname] = useState("josh");
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    console.log("use effect ran");
    const makeRequest = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        console.log(response.data.products);
        setisloading(false);

        setproducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, []);

  //without dependency array->onload use effect runs, when any state changes use effect runs again
  //with empty dependency array->onload use effect runs, when any state changes it will not run
  //with dependecy array (with state)->onload use effect runs, when state assigned changes it will run again

  return (
    <div>
      <button className="btn btn-success" onClick={() => setnumber(number + 1)}>
        {number}
      </button>
      <button className="btn btn-success" onClick={() => setname("Pamilerin")}>
        {name}
      </button>

      {isloading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-3">
          {products.map((product, index) => (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <img src={product.images[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeEffect;
