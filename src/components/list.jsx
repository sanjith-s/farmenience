import React from "react";
import PropTypes from "prop-types";
import { DetailsList, SelectionMode } from "@fluentui/react";

function List(props) {
  const { data } = props;

  const columns = [
    {
      key: "title",
      name: "Name",
      fieldName: "title",
      minWidth: 200,
      maxWidth: 200,
      isResizable: true
    },
    {
      key: "startDate",
      name: "Start Date",
      fieldName: "startDate",
      minWidth: 200,
      maxWidth: 200
    },
    {
      key: "endDate",
      name: "End Date",
      fieldName: "endDate",
      minWidth: 200,
      maxWidth: 200
    }
  ];

  return (
    <>
      <DetailsList
        setKey="items"
        items={data}
        columns={columns}
        selectionMode={SelectionMode.multiple}
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        ariaLabelForSelectionColumn="Toggle selection"
        checkButtonAriaLabel="Row checkbox"
      />
    </>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired
};

List.defaultProps = {
  data: []
};

export default List;
