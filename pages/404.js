import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>That page cannot be found</h2>
      <Link href="/">
        <a>Go back to Homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
