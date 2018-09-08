import React from 'react';
import { Link } from 'react-router-dom';
import AnchorNav from '@cwds/components/lib/AnchorNav';
import AppBar from '@cwds/components/lib/AppBar';
import { Container } from '@cwds/components/lib/Grid';
import PageHeader from '@cwds/components/lib/PageHeader';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';

import BasicContentSection from './views/BasicContent';
import DashboardSection from './views/Dashboard';
import LongJumpSection from './views/LongJump';
import RouteNestSection from './views/RouteNest';

/* eslint-disable import/no-webpack-loader-syntax */
import Test from '!babel-loader!mdx-loader!./views/About.mdx';
/* eslint-enable import/no-webpack-loader-syntax */

const routes = [
  {
    title: 'About',
    slug: 'about',
    component: Test,
  },
  {
    title: 'Page Elements',
    slug: 'page-elements',
    component: () => <div>Page Elements</div>,
    children: [
      {
        title: 'Something',
        slug: 'something',
        component: () => <div>Something</div>,
      },
    ],
  },
  {
    title: 'The Templates',
    slug: 'templates',
    component: () => <h4>The Templates</h4>,
    children: [
      {
        title: 'Basic Content',
        slug: 'basic-content',
        component: BasicContentSection,
      },
      {
        title: 'Dashboard',
        slug: 'dashboard',
        component: DashboardSection,
      },
      {
        title: 'Long Jump',
        slug: 'long-jump',
        component: LongJumpSection,
      },
      {
        title: 'Route Nest',
        slug: 'route-nest',
        component: RouteNestSection,
      },
    ],
  },
];

export default () => {
  return (
    <div>
      <AppBar />
      <PageHeader title="Layouts" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Layouts</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <AnchorNav.Container
          renderNav={() => (
            <AnchorNav
              offset={135}
              items={routes}
              renderItem={({ slug, title }) => <a href={`#${slug}`}>{title}</a>}
            />
          )}
          renderMain={() => <div>{routes.map(renderSection)}</div>}
        />
      </Container>
    </div>
  );
};

function renderSection({ title, slug, children, component: Component }) {
  if (children) {
    return (
      <AnchorNav.Section key={slug} id={slug}>
        <Component />
        {children.map(renderSection)}
      </AnchorNav.Section>
    );
  } else {
    return (
      <AnchorNav.Section key={slug} id={slug}>
        <Component />
        <hr className="my-4" />
      </AnchorNav.Section>
    );
  }
}
