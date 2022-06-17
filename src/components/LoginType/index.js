import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import  * as ROUTES from '../../constants/routes';
import Stack from 'react-bootstrap/Stack'
function LoginType() {
  return (
    <div
    style={{
      marginTop: '5rem'
    }}
    >
      <Container className="col-md-5">
        <Card className="shadow-sm">
          <Card.Header as="h2" className="text-center">
            Log In As
          </Card.Header>
          <Card.Body style={{
            alignItems: 'center',
          }}>
            <Stack gap={2} className="col-md-5 mx-auto">
            <LinkContainer to={ROUTES.LOG_IN_ADMIN}>
              <Button variant="secondary">Admin</Button>
              </LinkContainer>
              <LinkContainer to={ROUTES.LOG_IN_HR}>
              <Button variant="secondary">HR</Button>
              </LinkContainer>
              <LinkContainer to={ROUTES.LOG_IN_INT}>
              <Button variant="secondary">Interviewer</Button>
              </LinkContainer>
              <LinkContainer to={ROUTES.LOG_IN_EMP}>
              <Button variant="secondary">Employee</Button>
              </LinkContainer>
            </Stack>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Create One</Link>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default LoginType;
