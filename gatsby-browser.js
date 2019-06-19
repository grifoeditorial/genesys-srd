export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `O SRD foi atualizado ` +
            `Deseja atualizar a página para obter a última versão?`
    )

    if (answer === true) {
        window.location.reload()
    }
}
