import { Button, Heading, Image, Input, Text } from "@chakra-ui/react";

import logo from "../images/logo.jpeg"

export default function Login({ setIsUserLogged }) {
    return (
        <>
            <Image src={logo} mb={8} alt='Data Agro RR Logo' />
            <Heading mb={8} mx="auto" as="h1" color={"white"}>Data Agro RR</Heading>

            <Text color={"white"}>Email</Text>
            <Input my={2} placeholder="Email" />
            <Text color={"white"}>Senha</Text>
            <Input my={2} placeholder="Senha" />

            <Button mt={8} onClick={() => setIsUserLogged(true)}>Entrar</Button>
        </>
    )
}