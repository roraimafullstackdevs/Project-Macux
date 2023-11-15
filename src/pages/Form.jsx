import { Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { codeForCommoditie } from "./commodities";

export default function Form({ setIsFormSubmitted }) {
    const [formData, setFormData] = useState({})

    function formatData(data) {
        setFormData({...data, produto_id: codeForCommoditie(data.produto_id)})

        console.log(data)
    }

    return (
        <>
            <Text mb={2} fontSize="2xl" color={"white"}>Cadastre dados de uma safra para liberar o dashboard informativo</Text>

            <Center flexDir="column">
                <Text color={"white"}>Informe o município de plantio</Text>
                <Input mb={3} placeholder={"Municipio"}
                onChange={(e) => setFormData({...formData, municipio: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text color={"white"}>Informe a cultura utilizada</Text>
                <Input mb={3} placeholder={"Cultura"}
                onChange={(e) => setFormData({...formData, produto_id: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text color={"white"}>Informe o ano de colheita</Text>
                <Input mb={3} placeholder={"Data"}
                onChange={(e) => setFormData({...formData, ano: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text color={"white"}>Informe qual foi o custo para a produção</Text>
                <Input mb={3} placeholder={"Custo de produção"}
                onChange={(e) => setFormData({...formData, custo_do_produto: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text color={"white"}>Informe a média de rendimento por hectare</Text>
                <Input mb={3} placeholder={"Rendimento por hectare"}
                onChange={(e) => setFormData({...formData, rendimento: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text color={"white"}>Informe a área total colhida</Text>
                <Input mb={3} placeholder={"Área colhida"}
                onChange={(e) => setFormData({...formData, area_colhida: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text color={"white"}>Informe se foi utilizado financiamento</Text>
                <Input mb={3} placeholder={"Financiamento"}
                onChange={(e) => setFormData({...formData, financiado: e.target.value})} />
            </Center>

            <Button mt={4} onClick={() => {
                setIsFormSubmitted(true)
                formatData(formData)
                }}>Cadastrar dados</Button>
        </>
    )
}