import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function ScalarApiReference(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing script
    const existingScript = document.getElementById('api-reference');
    if (existingScript) {
      existingScript.remove();
    }

    // Create the script element with proper Scalar attributes
    const script = document.createElement('script');
    script.id = 'api-reference';
    script.setAttribute('data-url', '/situator-api-doc/openapi.json');
    script.setAttribute('data-proxy-url', 'https://proxy.scalar.com');
    script.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference';

    containerRef.current.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('api-reference');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: 'calc(100vh - 60px)',
        width: '100%'
      }}
    />
  );
}

export default function ApiReferencePage(): React.ReactElement {
  return (
    <Layout
      title="API Reference"
      description="Situator API Reference - Interactive OpenAPI documentation"
    >
      <BrowserOnly fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading API Reference...</div>}>
        {() => <ScalarApiReference />}
      </BrowserOnly>
    </Layout>
  );
}
