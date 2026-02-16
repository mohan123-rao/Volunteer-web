import { useState } from "react";
import axios from "axios";

const EditItem = ({ itemData, token }) => {
  const [item, setItem] = useState(itemData.item);
  const [price, setPrice] = useState(itemData.price);

  const updateItem = async () => {
    try {
      await axios.put(
        `http://localhost:3000/restaurant/items/${itemData._id}`,
        { item, price },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={updateItem}>Update</button>
    </div>
  );
};

export default EditItem;
