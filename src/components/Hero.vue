<template>
<div id="hero" class="hero pt-10">
    <div class="flex justify-around">
        <div>
            <div class="sfmono py-3 text-darkgray">Hello, I am</div>
            <div class="text-8xl font-semibold">Tejas Gajare</div>
            <div class="text-6xl font-semibold">
                <Typed :options="options">
                    I <span class="typing"></span>
                </Typed>
            </div>
            <div class="sfmono w-7/12">I am a Software Engineer based in Syracuse, NY, currently working as a Cloud Developer II at HPE</div>
            <div>
                <!-- Show social media icons  -->
                <div class="flex gap-3 w-32 py-3">
                    <a target="_blank" href="https://www.linkedin.com/in/tejasgajare"><img src="../assets/linkedin-icon.svg" alt="*"/></a>
                    <a target="_blank" href="https://github.com/tejasgajare"><img src="../assets/github-icon.svg"/></a>
                    <a href="#"><img src="../assets/instagram-icon.svg"/></a>

                </div>

                
            </div>
        </div>
        <div>
            <img class="hero-image" src="../assets/hero-image.png">
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
  strings: [
        "build things for the web.", 
        "create beautiful user interfaces.",
        "develop applications at scale.", 
        "engineer high-performant APIs.",
        "design mobile applications.", 
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
};
</script>