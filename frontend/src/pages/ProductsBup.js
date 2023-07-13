// import NavHome from '../components/NavHome'
// import { db } from '../DB/firebase'
// import { collection, addDoc, getDocs } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import logo from '../img/logo-h.png'


// export function ProductsBUP() {

//   const [product, setProduct] = useState("");
//   const [price, setPrice] = useState(0)
//   const [products, setProducts] = useState([]);

//   const addProduct = async (e) => {
//     e.preventDefault();

//     try {
//       const docRef = await addDoc(collection(db, "products"), {
//         name: product,
//         price: price
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }

//   const fetchProduct = async () => {

//     await getDocs(collection(db, "products"))
//       .then((querySnapshot) => {
//         const newData = querySnapshot.docs
//           .map((doc) => ({ ...doc.data(), id: doc.id }));
//         setProducts(newData);
//         console.log(products, newData);
//       })

//   }

//   useEffect(() => {
//     fetchProduct();
//   }, [])

//   return (
    
//     <section className="todo-container">
//       <NavHome></NavHome>
//       <div className="todo">
//         <h1 className="header">
//           Todo-App
//         </h1>

//         <div>

//           <div>
//             <input
//               type="text"
//               placeholder="What do you have to do today?"
//               onChange={(e) => setProduct(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="What do you have to do today?"
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>

//           <div className="btn-container">
//             <button
//               type="submit"
//               className="btn"
//               onClick={addProduct}
//             >
//               Submit
//             </button>
//           </div>

//         </div>

//         <div className="App">
//           <p>
//             {products.map(data => ('Name : ' + data.name + ' Price : ' + data.price + ''))}
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }