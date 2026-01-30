import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ApiReference(): React.ReactElement {
  const openApiUrl = useBaseUrl('/openapi.json');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout
      title="API Reference"
      description="Situator API Reference - Interactive OpenAPI documentation"
    >
      <Head>
        <style>{`
          .main-wrapper {
            display: flex;
            flex-direction: column;
          }
          #scalar-api-reference {
            flex: 1;
            min-height: calc(100vh - 60px);
          }
        `}</style>
      </Head>
      <div
        id="scalar-api-reference"
        data-url={openApiUrl}
        data-configuration={JSON.stringify({
          theme: 'purple',
          layout: 'modern',
          isEditable: false,
          showSidebar: true,
          hideModels: false,
          hideDownloadButton: false,
        })}
      />
    </Layout>
  );
}
