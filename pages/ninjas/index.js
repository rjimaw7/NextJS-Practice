import React from "react";
import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);

  return {
    props: {
      ninjas: data,
    },
  };
};

const index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Next JS Practice | NinjaList</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>MASTER NINJA</div>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className="">
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default index;
