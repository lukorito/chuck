import React from 'react';
import {Row, Col, ProgressBar} from 'react-materialize';

const Loader = () => {
  return (
    <Row>
      <Col>
        <ProgressBar />
      </Col>
    </Row>
  );
};

export default Loader;
