export function codeForCommoditie(commoditie) {
    let code

    switch(commoditie) {
        case 'arroz':
            code = commoditieCode.ARROZ
            break
        case 'milho':
            code = commoditieCode.MILHO
            break
        case 'soja':
            code = commoditieCode.SOJA
            break
        case 'feijao caupi':
            code = commoditieCode.FEIJAO_CAIPI
            break
        default:
            code = 0
    }

    return code
}

const commoditieCode = {
    ARROZ: 4685,
    MILHO: 4782,
    SOJA: 4744,
    FEIJAO_CAUPI: 8629
}