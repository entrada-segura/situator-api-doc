import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ApiReferencePage(): React.ReactElement {
  const apiDocsUrl = useBaseUrl('/api-docs.html');

  return (
    <Layout
      title="API Reference"
      description="Situator API Reference - Interactive OpenAPI documentation"
    >
      <iframe
        src={apiDocsUrl}
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          border: 'none',
        }}
        title="Situator API Reference"
      />
    </Layout>
  );
}
