import { defineStore } from "pinia";
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
            fetchingStatus: "FAILED"
        }
    },

    actions: {
        setPromt(prompt: string) {
            this.prompt = prompt;
        },

        async submitRequest(){
            const promptData = {prompt: this.prompt};
            this.isLoading = true;
            this.playlists = [];

            try {
                const response = await api.getMusic(promptData);
                 console.log("📦 FULL RESPONSE:", response);
                 const parsedData = response.data;
                if (parsedData.status == "SUCCEEDED") {
                    this.fetchingStatus = "SUCCEEDED";
                    this.playlists = parsedData.output;
                    this.prompt = "";
                } else {
                    this.fetchingStatus = "FAILED";
                    console.log('Error fetching playlists: ', parsedData.error, '. Cause by: ', parsedData.cause); 
                }
  
            } catch (errorLog) {
                this.fetchingStatus = "FAILED";
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