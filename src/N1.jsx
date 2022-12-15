import React from "react";
import Query from "./QueryDetails";
import Navbar from "./components/navbar";
import "./css/request.css";
function AllQueries() {
  const listOfRequests = [
    {
      querySub: "2023-01-31",
      queryDate: "04:30",
      status: "To discuss about paddy cultivation",
    },
    {
        querySub: "2023-01-31",
        queryDate: "04:30",
        status: "To discuss about paddy cultivation",
    },
    {
        querySub: "2023-01-31",
        queryDate: "04:30",
        status: "To discuss about paddy cultivation",
    },
    {
        querySub: "2023-01-31",
        queryDate: "04:30",
        status: "To discuss about paddy cultivation",
    },
    {
        querySub: "2023-01-31",
        queryDate: "04:30",
        status: "To discuss about paddy cultivation",
    },
    {
        querySub: "2023-01-31",
        queryDate: "04:30",
        status: "To discuss about paddy cultivation",
    }
  ];
  return (
    <div className="">
      <Navbar />
      <p className="query-count">(PAGE N1) Queries</p>
      {listOfRequests.map((request, index) => {
        return (
          <Query
            QueryID={index}
            querySubject={request.querySub}
            queryDate={request.queryDate}
            status={request.status}
          />
        );
      })}
    </div>
  );
}
export default AllQueries;
