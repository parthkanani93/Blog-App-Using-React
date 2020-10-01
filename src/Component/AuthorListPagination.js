import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const AuthorListPagination = ({
  showPerPage,
  onPaginationChange,
  totalAuthors,
}) => {
  const [counter, setCounter] = useState(1);
  const [noOfButton, setNoOfButton] = useState(
    Math.ceil(totalAuthors / showPerPage)
  );

  useEffect(() => {
    const total = showPerPage * counter;
    const starting = total - showPerPage;
    const ending = total;
    onPaginationChange(starting, ending);
  }, [counter]);

  const onBttonClick = (type) => {
    if (type === "prev") {
      counter === 1 ? setCounter(1) : setCounter(counter - 1);
    } else if (type === "next") {
      noOfButton === counter ? setCounter(counter) : setCounter(counter + 1);
    }
  };

  let numberOfButton = [];
  for (let i = 0; i < noOfButton; i++) {
    numberOfButton.push(i + 1);
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination size="md">
        <PaginationItem>
          <PaginationLink onClick={() => onBttonClick("prev")}>
            Prev
          </PaginationLink>
        </PaginationItem>
        {numberOfButton.map((temp, index) => {
          return (
            <div key={index}>
              <PaginationItem
                className={index + 1 === counter ? "active" : null}
              >
                <PaginationLink onClick={() => setCounter(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            </div>
          );
        })}
        <PaginationItem>
          <PaginationLink onClick={() => onBttonClick("next")}>
            Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>{" "}
    </div>
  );
};

export default AuthorListPagination;
