import { Fragment } from "react";
import Link from "next/link";

function News() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="news/breaking-news">Breaking News</Link>
        </li>
        <li>Sport News</li>
      </ul>
    </Fragment>
  );
}

export default News;
