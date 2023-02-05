'use client';
import React from 'react';
import { registerAction } from './signup.hooks';
import Link from 'next/link';
import {
  Card,
  Spacer,
  Button,
  Text,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import { SubmitHandler, useForm } from "react-hook-form";
import InputItem from '../../components/InputItem';
import { Toaster } from 'react-hot-toast';
import { printError } from "../utils";

type ValuesType =  {
  userName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const handleOnSubmit: SubmitHandler<ValuesType> = (data) => {
  console.log(data);
}

const Signup = () => {
  const { 
    register, 
    handleSubmit, 
  } = useForm<ValuesType>();

  return (
    <div>
      <Toaster />
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
          <form onSubmit={handleSubmit(handleOnSubmit)}
          >

          <InputItem placeholder='名前' { ...register('userName')} />
          <InputItem placeholder='Eメール' { ...register('email')} />
          <InputItem placeholder='パスワード' { ...register('password')} />
          <InputItem placeholder='パスワード確認用' { ...register('passwordConfirmation')} />

          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>ログイン状態を保存する</Text>
            </Checkbox>
            <Link 
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
    </div>
  );
}

export default Signup;