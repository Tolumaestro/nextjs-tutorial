import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const name = router.query.newsId;

  return <h1>The {name} Page</h1>;
}

export default DetailPage;
