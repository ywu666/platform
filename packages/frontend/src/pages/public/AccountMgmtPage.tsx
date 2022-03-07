import { Col, Container, Row } from '@nextui-org/react';
import React from 'react';
import Btn from '../../components/common/layout/Btn';
import { useApi } from '../../hooks/useApi';

interface AccountMgmtPageProps {}

const AccountMgmtPage: React.FC<AccountMgmtPageProps> = () => {
  // get the house status

  const { data } = useApi('/api/v1/ping', {
    method: 'get',
  });

  return (
    <Container style={{ position: 'absolute', top: '50%' }}>
      <Row gap={2}>
        <Col>
          <Btn content="CREATE" bordered={true}></Btn>
        </Col>
        <Col>
          <Btn content="JOIN" bordered={true}></Btn>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountMgmtPage;
