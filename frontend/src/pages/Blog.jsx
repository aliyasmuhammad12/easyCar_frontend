import React from 'react'
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection';
import BlogList from '../components/UI/BlogList';
import AddCar from '../components/admin/AddCar';

const Blog = () => {
  return (
    <Helmet title="Blog">
      <CommonSection title="Blogs"/>
<AddCar></AddCar>
      <section>
        <Container>
          <Row>
            <BlogList/>
            <BlogList/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Blog