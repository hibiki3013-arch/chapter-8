import Article from './_components/Article';

export default async function ArticlePage({params}: {params:Promise< {id: string}>}) {
    const {id} = await params;

    return (
        <main>
            <Article id={id} />
        </main>
    );
}