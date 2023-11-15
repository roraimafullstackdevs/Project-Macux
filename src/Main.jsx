import { useState } from "react";
import Login from "./pages/Login";
import Form from "./pages/Form";
import { Center, Flex } from "@chakra-ui/react";
import Dashboards from "./pages/Dashboards";

export default function Main() {
    const [isUserLogged, setIsUserLogged] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    return (
        <Center h="100vh" bgGradient='linear(to-b, #009407, #181818)'>
            <Flex flexDir="column" margin="auto" justifyContent="center" bg='#3f3f3f' p={8} borderRadius={12}>
                {isUserLogged ? (
                        isFormSubmitted ? (
                            <Dashboards />
                            ) : (
                            <Form setIsFormSubmitted={setIsFormSubmitted} />
                        )
                    ) : (
                    <Login setIsUserLogged={setIsUserLogged} />
                )}
            </Flex>
        </Center>
        
    )
}