<template>
    <section id="home">
        <div class="flex flex-col-reverse sm:flex-row gap-10 w-full h-fit 2xl:h-[inherit] 2xl:mt-[-10%] justify-evenly sm:justify-between items-center">
            <div class="flex flex-col gap-20 w-full sm:items-start mt-8 sm:mt-0">
                <article class="prose lg:prose-xl">
                    <h1>Hi,<br>I'am<br><span class="text-[#008080]">Barj Lazuardi</span></h1>
                    <h4 class="text-2xl">
                        Web Developer &nbsp;&#128520;
                    </h4>
                </article>
                <div>
                    <a id="btn-get-in-touch" class="btn btn-animate" tabindex="1" @click.prevent="toSection('about')"><span class="pointer-events-none">&nbsp;Get In Touch</span></a>
                    <div class="flex flex-wrap mt-10 gap-10">
                        <!-- Add the style and icon you want using the Array format -->
                        <a href="https://github.com/sychadelite/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'github']" /></a>
                        <a href="https://www.linkedin.com/in/barjlazuardi/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'linkedin']" /></a>
                        <!-- <a href="https://www.facebook.com/barjlazuardi/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'facebook']" /></a> -->
                        <a href="https://www.instagram.com/barjlazuardi/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'instagram']" /></a>
                        <!-- <a href="https://www.twitter.com/themoltisanti/" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'twitter']" /></a> -->
                        <!-- <a href="https://www.discordapp.com/users/417678662633127937" target="_blank" class="neu-pill small pill-circle"><font-awesome-icon class="w-5" :icon="['fab', 'discord']" /></a> -->
                    </div>
                </div>
            </div>
            <img class="max-w-[28rem] max-h-[28rem] min-w-[16rem] min-h-[16rem] mt-8 sm:mt-0" src="@/assets/avatar/sendlove[bgremove].gif" alt="avatar" width="65%" height="65%">
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'HomeComponent',
    data() {
        return {
            count: {
                sectionClick: 0
            },
            status: {
                touch: false
            }
        }
    },
    created() {
        if (process.client) {
            const btn = document.getElementById('btn-get-in-touch')
            const isActive = document.activeElement === btn
        }

        this.$root.$refs.home_component = this
    },
    methods: {
        statusTouch(state: boolean) {
            this.status.touch = state
        },
        toSection(id: string) {
            this.count.sectionClick++
            if (this.count.sectionClick === 1) {
                const jump = () => {
                    const el: any = document.getElementById(id)
                    el.scrollIntoView({
                        behavior: 'smooth'
                    })
                    clearTimeout(wait)
                    this.count.sectionClick = 0
                }
                const wait = this.status.touch ? setTimeout(jump, 0) : setTimeout(jump, 0)
            }
        }
    }
})
</script>

<style>

</style>