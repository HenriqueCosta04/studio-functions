/**
 * @Studio
 * @property {string} studio_json_body - Elementos separados por vírgula (ex: "a,b,c")
 */
function getJsonData() {
    try {
        const jsonData = JSON.parse(studio_json_body);
        return jsonData;
    } catch (error) {
        console.error('Erro ao analisar JSON:', error);
        return null;
    }
}
