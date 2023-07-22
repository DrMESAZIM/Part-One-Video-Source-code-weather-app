import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Weather App </title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Weather app "
      />
      <meta
        name="keywords"
        content="code, relavancy, weather app, next.js, typescript, tailwind css, open weather"
      />
      <meta name="author" content="" />
      <meta
        name='msapplication-TileImage'
        content=''
      />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Weather App' />
      <meta
        property='og:description'
        content='Weather app is developed by Irvine MESA'
      />
      <meta
        property='og:url'
        content=''
      />
      <meta property='og:site_name' content='' />
      <meta property='og:image' content='' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='Weather App' />
      <meta
        name='twitter:description'
        content='Weather app '
      />
      <meta name='twitter:image' content='' />
      <meta name='twitter:image:alt' content='' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@codeofrelevancy' />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;