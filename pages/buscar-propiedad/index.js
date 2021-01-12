import Head from "next/head";
import fetch from 'isomorphic-unfetch';

// Import template //
import TemplateSearchRealestate from "../../components/templates/Template-search-realestate"


export default function SearchRealEstate({post}) {

    return (
        <>
            <Head>
                {/** <!-- SEO / Home --> */}
                <title>PENDIENTE ESTUDIO SEO</title>
                <meta name="description" content="PENDIENTE ESTUDIO SEO"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="robots" content="index, follow"/>

                {/** <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content="PENDIENTE SEO" key="title"/>
                <meta
                    property="og:description"
                    content="PENDIENTE SEO"
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://midominio.com/logo200x200.png"
                />
                <meta property="og:url" content="https://midominio.com/"/>
            </Head>

            <main className="mt-20 font-axiformaMedium">
                <TemplateSearchRealestate dataGetInitialProps={post}/>
            </main>
        </>
    )
}


SearchRealEstate.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const post = await res.json()

    return {post}
}
