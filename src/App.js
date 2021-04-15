import connector from "./connector/connector";
import config from "./config.json";

import productListFactory from "./container/ProductList"
import ProductListView from "./components/ProductListView"

connector.baseUrl = config.baseUrl;

const ProductList = productListFactory({View: ProductListView})

function App() {


  return (
    <div className="App">

      <ProductList />

    </div>
  );
}

export default App;
