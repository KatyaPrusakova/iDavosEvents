"use client";
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
import {  useState } from 'react';
import axios from 'axios';


export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [verification, setVerification] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
 
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        const response = await axios.post(`https://api.quorini.io/${process.env.NEXT_PUBLIC_QUORINI_PROJECT_KEY}/gql`, {
          authOption: {
            username: email,
            password: password,
          },
          // specify your own user group
          query: `mutation create($input: createAdminInput!) { createAdmin(input: $input) { id }}`,
          variables: {
            "input": {
              "email": email,
              "firstName": "Katya",
              "username": email,
              "lastName": "hahaha",
              "password": password,
          },
          },
        });
        console.log(response, "response")
        if (response.data && response.data.data) {
          console.log("success")
          setVerification(true)

        } else {
          console.log("error to create user" )
          console.log(response.data.errors[0].message)

          setError(response.data.errors[0].message)
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
    const handleVerification = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        const response =  await axios.get(`https://auth.quorini.io/${process.env.NEXT_PUBLIC_QUORINI_PROJECT_KEY}/verify-email/?code=${verificationCode}&username=${email}`)
       
        console.log(response.data.verified, "response")
        if (response.data.verified) {
          window.location.href = '/login';
        } else {
          console.log(response.data, "response")
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

  return (<>
  { !verification && (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
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
          {error && (<div className="text-red" > {error} </div>)}
          <Button type="submit">Sign up</Button>
        </form>
      </CardContent>
     
    </Card>)}
    {verification &&  (
         <Card className="w-full max-w-sm">
         <CardHeader>
           <CardTitle className="text-2xl">Verification Code</CardTitle>
           <CardDescription>
             Enter code from your email.
           </CardDescription>
         </CardHeader>
         <CardContent className="grid gap-4">
         <form onSubmit={handleVerification} className="grid gap-4">
             <div className="grid gap-2">
               <Label htmlFor="verificationCode">Code</Label>
               <Input
                 id="verificationCode"
                 type="verificationCode"
                 placeholder="123546"
                 required
                 value={verificationCode}
                 onChange={(e) => setVerificationCode(e.target.value)}
               />
             </div>
         
             <Button type="submit">Submit</Button>
           </form>
         </CardContent>
        
       </Card>
    )}
    </>
  );
}
