import { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth";

import { Button, Heading, Image, Input, Text } from "@chakra-ui/react";

import logo from "../images/logo.jpeg"

export default function Login({ setIsUserLogged }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { signIn, customer } = useAuth();
  
    const handleSignIn = () => {
      signIn({ email, password });
      
    };
    useEffect(() => {
        if(customer){
            setIsUserLogged(true)
        }
      }, []);
    return (
        <>
            <Image src={logo} mb={8} alt='Data Agro RR Logo' />
            <Heading mb={8} mx="auto" as="h1" color={"white"}>Data Agro RR</Heading>

            <Text color={"white"}>Email</Text>
            <Input my={2} placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
            <Text color={"white"}>Senha</Text>
            <Input my={2} placeholder="Senha"  onChange={(e) => setPassword(e.target.value)}/>

            <Button mt={8} 
            onClick={handleSignIn}
            >Entrar</Button>
        </>
    )
}