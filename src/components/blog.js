import * as React from "react";
import BlogItem from "./blog-item";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  const blogData = useStaticQuery(graphql`
    query BlogQuery {
      allBlogPostsJson {
        edges {
          node {
            title
            description
            author
            date
            body
          }
        }
      }
    }
  `)["allBlogPostsJson"]["edges"];
  const blog_posts = blogData.map(function (node) {
    const post = node.node;
    return (
      <BlogItem
        title={post.title}
        author={post.author}
        date={post.date}
        description={post.description}
        body={post.body}
      />
    );
  });

  return (
    <section id="blog" className="blog">
      <Container>
        <Row className="d-flex">
          <Col className="text-center pb-5">
            <h1 className="heading">Blog</h1>
          </Col>
        </Row>
        <Row>
          <Col md="10" className="mx-auto">
            <Row className="justify-content-md-center">{blog_posts}</Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
