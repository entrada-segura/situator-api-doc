import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): React.ReactElement {
  const introUrl = useBaseUrl('/docs/introduction');
  return <Redirect to={introUrl} />;
}
