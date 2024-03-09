import React from "react";
import { Viewer } from "@/types";


interface IProps {
  viewers: Viewer[];
}

const Hall = ({ viewers }: IProps) => {
  return (
    <div>
      <h1>My Hall</h1>
      <ul>
        {viewers.map((viewer) => (
          <li key={viewer.id}>
            {viewer.name}
            {viewer.seatNumber}
            {viewer.tableNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from an API, database, or file system
  const res = await fetch("http://localhost:3000/api/viewers");
  const viewers = await res.json();

  return {
    props: {
      ...viewers,
    },
  };
}

export default Hall;
