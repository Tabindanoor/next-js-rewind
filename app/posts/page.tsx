import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>

          <Link href={`/posts/${post.id}`}>
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
