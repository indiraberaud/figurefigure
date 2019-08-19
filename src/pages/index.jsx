import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import HomepageIssue from '../components/homepage_issue';

const PAGE_TITLE = 'Figure Figure';

const IndexPage = ({ data }) => {
  const issues = data.allDataJson.edges[0].node.issues.sort((a, b) => b.number - a.number);

  return (
    <main>
      <Helmet title={PAGE_TITLE} />
      <HomepageIssue homepage issues={issues} key="homepage issue" />
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          issues {
            number
            title
            date_of_issue
            path
            bg_href
            image_href
          }
        }
      }
    }
  }
`;
