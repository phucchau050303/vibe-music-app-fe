<script setup lang="ts">
    import { useMusicStore } from '../stores/musicStore';
    const redirectToExternal= () => {
        window.location.href="https://ko-fi.com/peterclaymore03x"
    };
    const store = useMusicStore();
    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        store.setPromt(target.value);
    };
</script>

<template>
    <div class="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <div class="w-100" style="max-width: 900px; padding: 0 15px;">
            <div class="text-center">
                <h2 class="mb-4">What Kind Of Music Are You Thinking Of?</h2>
                <form @submit.prevent="store.submitRequest">
                    <div class="input-group mb-3">
                        <input @input="handleInput" type="text" class="form-control rounded-5 shadow-lg p-3 mb-5" placeholder="Tell me your vibe">
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                    <button type="button" @click="redirectToExternal" class="btn btn-primary">Support Me</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>