import axios from "axios";

async function generateCongratulation(name) {
    const response = await axios.post("https://zeapi.yandex.net/lab/api/yalm/text3", {
        "filter": 1,
        "into": 0,
        "query": `${name}, поздравляем с днем рождения!`
    }, {
        'Content-Type': 'application/json'
    })

    return response.data.query + response.data.text
}

export {generateCongratulation}