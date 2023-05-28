import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Partytown } from '@builder.io/partytown/react';

class MyDocument extends Document {
    render() {
        return (
          <Html>
            <Head>
              <Partytown debug={true} forward={["dataLayer.push"]} />
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-JTKRHSZYN1"
                type="text/partytown"
              />

              <link
                legacyBehaviorrel="preconnect"
                href="https://fonts.googleapis.com"
              />
              <link
                legacyBehavior
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
              />
              <link
                legacyBehavior
                href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
                rel="stylesheet"
              />

              <script
                async
                type="text/partytown"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JTKRHSZYN1')`,
                }}
              />

              {/* <script defer src="https://www.googletagmanager.com/gtag/js?id=G-JTKRHSZYN1"></script>
                    <script defer dangerouslySetInnerHTML={{
                        __html:
                            `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JTKRHSZYN1')`
                    }}

                    >
                    </script> */}

              <script
                async
                type="text/partytown"
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NVNSL65');`,
                }}
              />
            </Head>
            <body>
              <Main />
              <NextScript />
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-NVNSL65"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                />
              </noscript>
            </body>
          </Html>
        );
    }
}

export default MyDocument