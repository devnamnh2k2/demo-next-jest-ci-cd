
type MetadataParams = {
  params: {
    slug: string;
  };
};

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: MetadataParams) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>NamNH</p>
      <p>bla bla bla</p>
    </>
  );
}
