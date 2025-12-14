type Props = {
  params: {
    id: string;
  };
};


type Post = {
  id: number;
  title: string;
  body: string;
};



export default async function PostDetailPage({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post: Post = await res.json();
  console.log(post)
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
