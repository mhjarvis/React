/* eslint-disable no-unused-vars */

import { useState } from "react";

const productsList = [
    {
        id: "tcg",
        title: "React - The Complete Guide",
        price: "$19.99",
    },
    {
        id: "st",
        title: "Stylish Chair",
        price: "$329.49",
    },
    {
        id: "ec1",
        title: "Ergonomic Chair",
        price: "$0.99",
    },
    {
        id: "hvg3",
        title: "History Video Game Collection",
        price: "$19.99",
    },
];

const newProduct = { id: "test", title: "New Obj", price: "$9.99" };

export default function ListOfProducts() {
    const [theList, setTheList] = useState(productsList);

    function addProductHandler() {
        setTheList((currentList) => [...currentList, newProduct]);
    }

    return (
        <div className="activity">
            <h2>Activity 5.2: Outputting a List of Products</h2>
            <div>
                {theList.map((product) => {
                    return (
                        <p key={product.id} className="product-item">
                            {product.title} {product.price}
                        </p>
                    );
                })}
            </div>
            <button onClick={addProductHandler} className="product-button">Add Product</button>
        </div>
    );
}
