import React, { FunctionComponent } from "react";

interface Props {
  data: string;
}

const Category: FunctionComponent<Props> = ({ data }) => {
  return (
    <div>
      <h1>Category</h1>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { category } = context.query;
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${category}`);
  const data = await res.json();

  return { props: { data } };
}

export default Category;
