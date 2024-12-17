import {useState} from "react"

export default function Home(){

  const [products, setProducts ] =useState([
    {id:1, name:'Milk', category:'liquid', Price:50,stock:26},
    {id:2, name:'simosa', category:'crunch', Price:30,stock:20},
    {id:3, name:'paneer', category:'pneer', Price:200,stock:2},
    {id:4, name:'butter', category:'oil', Price:100,stock:23},
  ]);

  const [newProduct, setNewProduct]= useState({
    name:'',
    category:'',
    price:'',
    stock:'',
  });
  const handleInputChange =(e) =>{
    const {name,value} = e.target;

    setNewProduct({...newProduct,[name]: value

    })

  };
const handleAddProduct=(e)=>{
  e.preventDefault();
  setProducts([...products,{...newProduct,id:products.length + 1 
  }]);
  setNewProduct({name:'',category:'',price:'',stock:'',});
};

return(


      <div className="container">
      <header className="header">
      <h1>Dairy products</h1>
      </header>


       <main className="main">
        <section className="productList">
          {products.map((product)=>(
            <div key={product.id} className="productCard">
              <h3>{product.name}</h3>
              <p>category:{product.category}</p>
              <p>price:${product.price}</p>
              <p>stock:{product.stock}</p>
            </div>
          ))}
        </section>
        <section className="addProductForm">
          <h2>
            Add New Product
          </h2>
          <form onSubmit={handleAddProduct}>
            <input type="text"
            name="name"
            placeholder="product Name"
            value={newProduct.name}
            onChange={handleInputChange}
            />
            
            <input
            type="text"
            name="category"
            placeholder="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
            />
            <input
          type="number"
          name="price"
          placeholder="price"
          value={newProduct.price}
          onChange={handleInputChange}
          required
          />
          <input
          type="number"
          name="stock"
          placeholder="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          required
          />
          <button type="submit">Add Product</button>
          </form>
        </section>
        </main>
        
         
        <footer className="footer">
          <p>&copy; 2024 Dairy App</p>
        </footer>
      </div>
    
)
}
