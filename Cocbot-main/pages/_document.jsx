import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>/
          <link rel="apple-touch-icon" href="https://discord.gg/vDWEQQ6bPJ" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Ekonomi'de Çığır Açmış Bir Bot!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@CocBOT" />
          <meta name="twitter:creator" content="@CocBOT" />
          <meta property="og:url" content="https://cocbot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CocBOT" />
          <link
            rel="icon"
            href="img/CocBOT.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content=" Moderasyon, Koruma, Bilet, Oto Sistemler, Bir çok Gelişmiş Sistem Ve Daha Fazlası..."
          />
          <meta property="og:image" content="/img/CocBOT.png" />
          <meta property="og:image:alt" content="CocBOT" />
          <meta property="og:locale" content="tr_TR" />
          <meta
            property="og:site_name"
            content="CocBOT"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/CocBOT.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
