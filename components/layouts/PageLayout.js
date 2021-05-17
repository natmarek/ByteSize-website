import React from 'react'
import Container from 'react-bootstrap/Container'


const PageLayout = props => {
  const { className = '', children } = props;
  
  return (
    <div className="pages">
      <Container className="page-container">
        {children}
      </Container>
    </div>
  )
}

export default PageLayout;