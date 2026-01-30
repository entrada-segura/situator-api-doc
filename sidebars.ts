import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: [
        'introduction',
        'architecture',
      ],
    },
    {
      type: 'category',
      label: 'Autenticação',
      items: [
        'authentication',
      ],
    },
    {
      type: 'category',
      label: 'Recursos',
      items: [
        'people',
        'access-permissions',
        'zones',
        'credentials',
      ],
    },
    {
      type: 'category',
      label: 'Eventos & Webhooks',
      items: [
        'remote-events',
        'webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Visitas & Sincronização',
      items: [
        'visit-scheduling',
        'synchronization',
      ],
    },
    {
      type: 'category',
      label: 'Relatórios',
      items: [
        'reports',
      ],
    },
    {
      type: 'category',
      label: 'Referência',
      items: [
        'glossary',
      ],
    },
  ],
};

export default sidebars;
