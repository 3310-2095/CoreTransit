import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "CoreTransit - Transport Courier Logistics HTML Template"}
                </title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
        </>
    )
}

export default PageHead