import React from "react";

import PageM3 from "./pageM3";

function App1() {
  const salesDetails = [
    {
      id: "1",
      name: "Metta",
      date: new Date(2022, 4, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "2",
      name: "surendhar",
      date: new Date(2022, 4, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
    {
      id: "3",
      name: "Metta Surendhar",
      date: new Date(2022, 4, 23),
      items: ["rice", "wheat", "miller"],
      amount: 343,
    },
  ];

  const salesItems = ["Rice", "Jute", "Fibre", "Wheat", "Millet"];

  return (
    <div>
      <PageM3 items={salesDetails} itemsList={salesItems} />
    </div>
  );
}

export default App1;
