import { defineStore } from "pinia";
import { errorMessages } from "vue/compiler-sfc";
import api from "../services/api";

interface Playlist{
    title: string;
    playlistLink: string;
    imageUrl: string;
    platform: string;
    description: string;
}

export const useMusicStore = defineStore('musicSearch', {
    state: () => {
        return {
            prompt: "",
            playlists: [] as Playlist[],
            isLoading: false,
        }
    },

    actions: {
        setPromt(prompt: string) {
            this.prompt = prompt;
        },

        async submitRequest(){
            const promptData = {prompt: this.prompt};
            
            this.isLoading = true;

            try {
                const response = await api.getMusic(promptData);
                console.log("📦 FULL RESPONSE:", response);
                if (response.status === 200) {
                    console.log("Inside if block");
                    console.log("Repsonse Data: ", response.data);
                    const outputString = response.data;
                    const parsedOutput = JSON.parse(outputString);
                    this.playlists = parsedOutput;
                    this.prompt = "";
                    console.log(this.playlists[2].playlistLink)
                }
  
            } catch (errorLog) {
                this.isLoading = false;
                console.error('Error fetching playlist:', errorLog);
                alert('An error occurred while fetching playlists. Please try again.');
            }
            finally {
                this.isLoading = false
            }
        } 
    }
})