"use client";
import React from "react";
import MUIDataTable from "mui-datatables";
const affTableProducts = ({ products }) => {
  const columns = [
    {
      label: "Title",
      name: "title",
    },
    {
      label: "price",
      name: "price",
    },
    {
      label: "Description",
      name: "description",
    },
    {
      label: "Image",
      name: "images",
      options: {
        customBodyRender: (rowdata) => (
          <img
            style={{ height: 40, width: 60, borderRadius: "10%" }}
            src={`${rowdata[0]}`}
            alt=""
          />
        ),
      },
    },
  ];
  return (
    <>
      {products && products?.length > 0 ? (
        <MUIDataTable title="Products List" data={products} columns={columns} />
      ) : null}
    </>
  );
};
export default affTableProducts;
