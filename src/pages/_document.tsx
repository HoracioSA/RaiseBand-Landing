import Document, {Html, Head,Main, NextScript} from 'next/document'
export default class MyDocument extends Document {
render() {
    return(
    <Html>
        <Head>
            <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            <link rel="shortcut icon" href="favicon.png" type="image/png"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,300&family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
      <body>
          <Main/>
          <NextScript/>

      </body>
    </Html>
    )
}
}