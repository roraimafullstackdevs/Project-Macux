import { Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Form({ setIsFormSubmitted }) {
    const [formData, setFormData] = useState({})

    return (
        <>
            <Text mb={2} fontSize="2xl">Preencha abaixo os dados do seu plantio</Text>

            <Center flexDir="column">
                <Text>Informe o município</Text>
                <Input mb={3} placeholder={"Localidade"}
                onChange={(e) => setFormData({...formData, place: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text>Informe a cultura utilizada</Text>
                <Input mb={3} placeholder={"Cultura"}
                onChange={(e) => setFormData({...formData, culture: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text>Informe a data de colheita</Text>
                <Input mb={3} placeholder={"Data"}
                onChange={(e) => setFormData({...formData, date: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text>Informe qual foi o custo para a produção</Text>
                <Input mb={3} placeholder={"Custo de produção"}
                onChange={(e) => setFormData({...formData, productionCost: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text>Informe a média de rendimento por hectare</Text>
                <Input mb={3} placeholder={"Rendimento por hectare"}
                onChange={(e) => setFormData({...formData, hectareYield: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text>Informe a área total colhida</Text>
                <Input mb={3} placeholder={"Área colhida"}
                onChange={(e) => setFormData({...formData, harvestedArea: e.target.value})} />
            </Center>

            <Center flexDir="column">
                <Text>Informe se foi utilizado financiamento</Text>
                <Input mb={3} placeholder={"Financiamento"}
                onChange={(e) => setFormData({...formData, financial: e.target.value})} />
            </Center>

            <Button mt={4} onClick={() => {
                console.log(formData)
                setIsFormSubmitted(true)
                }}>Enviar dados</Button>
        </>
    )
}