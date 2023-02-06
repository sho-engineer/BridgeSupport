'use client';
import React from 'react';
import { registerAction } from './signup.hooks';
import Link from 'next/link';
import {
  Card,
  Input,
  Spacer,
  Button,
  Text,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from 'react-hot-toast';
import { printError } from "../utils";

type ValuesType =  {
  userName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

// テキストボックス
const listItems: ValuesType = {
  "userName": "名前",
  "email": "Eメール",
  "password": "パスワード",
  "passwordConfirmation": "パスワード確認用"
} 

// 配列のキー名
const items = [
  "userName",
  "email",
  "password",
  "passwordConfirmation"
]

const Signup = () => {
  const { 
    register, 
    handleSubmit, 
  } = useForm<ValuesType>();

  const handleOnSubmit: SubmitHandler<ValuesType> = (data: ValuesType) => {
    alert(JSON.stringify(data));
  }

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
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            {
              items.map((data) => {
                let elem = listItems[data];
                return(
                  <div> 
                    <Input clearable underlined fullWidth color="primary" size="lg"
                      placeholder={elem} css={{ mb: '6px' }} 
                      {...register(`${elem}`)}
                      />
                    <Spacer y={1} />
                  </div>
                )
              })
            }
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
            <Button 
              type='submit'
              css={{
                margin: '0 auto',
                width: '50%',
              }}
            >
            ログイン
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default Signup;