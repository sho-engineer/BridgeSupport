import React from 'react';
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
import { useForm } from "react-hook-form";

const Signup = () => {
  const { 
    register, 
    handleSubmit, 
  } = useForm();

  const inputItems = [
    "Name",
    "Email",
    "Password",
    "Password Confirmation"
  ]

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
          <form onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          >
          {
            inputItems.map(item => {
              return <InputItem
                      placeholder={ item } 
                      register={
                        register(`${item}`)
                      }
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

const InputItem = ({placeholder, register}) => {

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
      {...register}
    />
    <Spacer y={1} />
    </>
  )
}

export default Signup;