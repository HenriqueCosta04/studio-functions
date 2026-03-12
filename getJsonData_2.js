function getJsonData(jsonBody) {
    try {
        const jsonData = JSON.parse(jsonBody);
        return jsonData;
    } catch (error) {
        console.error('Erro ao analisar JSON:', error);
        return null;
    }
}
