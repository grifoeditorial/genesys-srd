export function ConvertText2Id(text) {
    return text
        .toLocaleLowerCase()
        .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')
        .replace(/\s/g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}
