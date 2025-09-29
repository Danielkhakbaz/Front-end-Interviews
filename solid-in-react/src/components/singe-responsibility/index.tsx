import { useState, useEffect } from "react";
import { getItems } from "./services/api";

type ItemsType = {
  id: number;
  title: string;
};

const SingleResponsibility = () => {
  const [items, setItems] = useState<ItemsType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getItems();

      setItems(result);
    };

    fetchItems();
  }, []);

  return (
    <>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default SingleResponsibility;
