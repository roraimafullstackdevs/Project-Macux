import { Button, Heading, Image, Input, Text } from "@chakra-ui/react";

import logo from "../images/logo.jpeg"

export default function Login({ setIsUserLogged }) {
    return (
        <>
            <Image src={logo} mb={8} alt='Data Agro RR Logo' />
            <Heading mb={8} mx="auto" as="h1">Data Agro RR</Heading>

            <Text>Usuário</Text>
            <Input my={2} placeholder="Nome de usuário" />
            <Text>Senha</Text>
            <Input my={2} placeholder="Senha" />

            <Button mt={8} onClick={() => setIsUserLogged(true)}>Entrar</Button>
        </>
    )
}