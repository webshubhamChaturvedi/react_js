import React, { useState, useRef } from "react";
const listArray = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple", id: 1 },
  {
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Dragonfruit",
    id: 2,
  },
  {
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Mango",
    id: 3,
  },
  {
    category: "Vegetables",
    price: "$2",
    stocked: true,
    name: "Spinach",
    id: 4,
  },
  {
    category: "Vegetables",
    price: "$4",
    stocked: false,
    name: "Pumpkin",
    id: 5,
  },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas", id: 6 },
  { category: "Bis", price: "$1", stocked: true, name: "Parle", id: 8 },

  { category: "Choc", price: "$1", stocked: true, name: "Kit", id: 9 },
  { category: "Choc", price: "$1", stocked: false, name: "Dairy", id: 11 },

  { category: "dairy", price: "$1", stocked: true, name: "Milk", id: 10 },
  { category: "Choc", price: "$1", stocked: true, name: "Munch", id: 12 },
  { category: "dairy", price: "$1", stocked: false, name: "Curd", id: 13 },
  { category: "Bis", price: "$1", stocked: true, name: "lauda", id: 14 },
];

function FiltredProduct({ listArray }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  //checkHandle
  const handleCheck = () => {
    setInStockOnly(!inStockOnly);
  };
  // const abc=inStockOnly === true ? "active" : ""
  //SearchFilter
  const fiterFunction = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <>
      <input type="text" value={filterText} onChange={fiterFunction}></input>
      <div className="uinputType">
        <input type="checkbox" onChange={handleCheck} />
        <label>In Stock</label>
      </div>
      <ProductTable
        listArray={listArray}
        inStockOnly={inStockOnly}
        filterText={filterText}
      />
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

//ProductRow

function Productrow({ price, name, stocked }) {
  return (
    <tr>
      <td>{name}</td>
      <td style={{ color: `${stocked !== true ? "red" : ""}` }}>{price}</td>
    </tr>
  );
}

//SearchBar

//Main table
function ProductTable({ listArray, inStockOnly, filterText }) {
  const tablerow = [];
  let lastCategory = null;

  listArray.forEach((list) => {
    if (inStockOnly && !list.stocked) {
      return;
    }
    if (list.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (list.category !== lastCategory) {
      tablerow.push(
        <ProductCategoryRow category={list.category} key={list.id} />
      );
    }
    lastCategory = list.category;

    tablerow.push(
      <Productrow
        price={list.price}
        name={list.name}
        key={list.name}
        stocked={list.stocked}
      />
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{tablerow}</tbody>
    </table>
  );

  console.log(listArray);
}

const List = () => {
  return (
    <>
      <FiltredProduct listArray={listArray} />
    </>
  );
};

export default List;
