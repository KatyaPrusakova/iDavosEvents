"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        const response = await axios.post(`https://auth.quorini.io/${process.env.NEXT_PUBLIC_QUORINI_PROJECT_KEY}/log-in`, {
          authOption: {
              username: email,
              password: password
          },
      })
        console.log(response, "response")

        if (response.data && response.data.data) {
          console.log("success")

        } else {
          console.log("error to create user" )
          // console.log(response.data.errors[0].message)
          console.log(response.data)

          // setError(response.data)
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };


  return (<>

    <Card className="w-full max-w-sm">
      <CardHeader>
        {/* <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
      <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {error && (<div className="text-red" > {error} </div>)} */}
          <Button type="submit">Sign in</Button>
        </form>
      </CardContent>
     
    </Card>

    </>
  );
}
