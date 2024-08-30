import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Arthik Advisors - Dedicated To Financial and Business Consulting"}
                </title>
            </Head>
        </>
    )
}

export default PageHead