import { signIn } from "next-auth/react"
import { GoogleOutlined } from "@ant-design/icons"
import { Button, Col, Row, Typography } from "antd"

export const SignIn = () => {
  return (
    <Row align="middle" className="signIn">
      <Col span={6} offset={9}>
        <Row className="form">
          <Col span={24}>
            <Typography.Title level={1}>
              Welcome
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              onClick={() => signIn("google", { callbackUrl: "/" })}>
              <Typography.Title level={5}>
                <GoogleOutlined />
                &nbsp;
                Sign In
              </Typography.Title>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
