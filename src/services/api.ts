import axios from "axios";

interface PromptData{
    prompt: string
}

const apiClient = axios.create({
    baseURL: "https://jakbtevq9g.execute-api.ap-southeast-1.amazonaws.com/newStage1",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    transformResponse: [(data) => {
        try {
            return JSON.parse(data);
        } catch {
            return data;
        }
    }]
});

export default{
    async getMusic(promptData: PromptData) {
        console.log("🔥 API CALL - Sending:", JSON.stringify(promptData));
        return await apiClient.post('/music-finder', promptData);
    }
}
