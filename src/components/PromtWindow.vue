<script setup lang="ts">
    import { useMusicStore } from '../stores/musicStore';
    import { useRouter } from 'vue-router';
    const redirectToExternal= () => {
        window.location.href="https://ko-fi.com/peterclaymore03x"
    };
    const store = useMusicStore();
    const router = useRouter();
    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        store.setPromt(target.value);
    };
    const handleSubmit = async () => {
        await store.submitRequest()
        router.push('/results')
    }
</script>

<template>
    <div class="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <div class="w-100" style="max-width: 900px; padding: 0 15px;">
            <div class="text-center">
                <h2 class="mb-4" style="color: #8b28a4;">What Kind Of Music Are You Thinking Of?</h2>
                <form @submit.prevent="handleSubmit">
                    <div class="input-group mb-3 ">
                        <input @input="handleInput" type="text" class="form-control rounded-5 shadow-lg p-3 mb-5" placeholder="Tell me your vibe">
                        <div v-if="store.isLoading == true"><img class = "spinner" src='/public/spinner.gif'></div>
                    </div>
                    <button type="button" @click="redirectToExternal" class="btn btn-primary rounded-5">Support Me</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .spinner{
        position: absolute;
        width: 3em;
        right: 1%;
        top: 28%;
        transform: translateY(-50%);
    }

    .input-group{
        position: relative;
    }
</style>