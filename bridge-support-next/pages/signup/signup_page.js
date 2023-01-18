import React, { useState } from 'react';
// import { checkPwConfirmation } from "./login.hooks";
import Link from 'next/link';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const inputItems = [
    "Name",
    "Email",
    "Password",
    "Password Confirmation"
  ]
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }} variant="bordered">
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            BridgeSupport サインアップ
          </Text>
          <Spacer y={1} />
          <form>
          {
            inputItems.map(item => {
              return <InputItem
                      placeholder={ item } 
                      />
            })
          }
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>ログイン状態を保存する</Text>
            </Checkbox>
            <Link 
              size={12}
              href="/login/login_page"
              >
              ログイン画面へ
            </Link>
          </Row>
          <Spacer y={1} />
          <Button type='submit'>ログイン</Button>
          </form>
        </Card>
      </Container>
    </>
  );
}

const InputItem = ({placeholder}) => {
  return(
    <>
    <Input
      clearable
      underlined
      fullWidth
      color="primary"
      size="lg"
      placeholder={placeholder}
      id={`obj_${placeholder}`}
      css={{ mb: '6px' }}
    />
    <Spacer y={1} />
    </>
  )
}

export default Signup;