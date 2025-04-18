import type { Metadata } from 'next';
type Props = {
  params: Promise<{ slug: string }>
}


export async function generateMetadata(
  { params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: `Post: ${slug}` };
}
 


export default async function Page({ params }: Props) {
  const { slug } = await params
  return (
    <>
      <h1>Slug: {slug}</h1>
      <p>NamNH</p>
      <p>bla bla bla</p>
    </>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'hello-world' },
    { slug: 'nextjs-tutorial' },
    { slug: 'my-first-post' },
  ];
}
