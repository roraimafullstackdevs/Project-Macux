import { Button, Heading, Image, Input } from "@chakra-ui/react";

import logo from "../images/logo.jpeg"

export default function Login({ setIsUserLogged }) {
    return (
        <>
            <Image src={logo} mb={16} alt='Data Agro RR Logo' />
            <Heading mb={2} as="h1">Data Agro RR</Heading>
            <Input my={2} placeholder="Nome de usuário" />
            <Input my={2} placeholder="Senha" />
            <Button my={2} onClick={() => setIsUserLogged(true)}>Entrar</Button>
        </>
    )
}