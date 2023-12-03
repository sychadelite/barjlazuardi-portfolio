<template>
  <div>
    <header>
      scroll down
    </header>

    <section class="sticky-element half-height">
      <div class="track">
        <div class="track-flex">
          <div class="panel-wide">
            <img class="image" src="https://assets.website-files.com/62f4dd003ef1495b1bb8f3a0/62f4f620fe7a4e4395360bc5_and-machines-mAiFQrt9xMc-unsplash.jpg" alt="">
          </div>
          <div class="panel-wide">
            <img class="image" src="https://assets.website-files.com/62f4dd003ef1495b1bb8f3a0/62f4f6201cd426577274fab1_and-machines-SZd_V4A8gYo-unsplash.jpg" alt="">
          </div>
          <div class="panel-wide">
            <img class="image" src="https://assets.website-files.com/62f4dd003ef1495b1bb8f3a0/62f4f62034d6a56dd03cced8_and-machines-odNU0f3jmUg-unsplash.jpg" alt="">
          </div>
          <div class="panel-wide">
            <img class="image" src="https://assets.website-files.com/62f4dd003ef1495b1bb8f3a0/62f4f620dbc7f7e7db222488_and-machines-YLplJ9m_RKE-unsplash.jpg" alt="">
          </div>
          <div class="panel-wide">
            <img class="image" src="https://assets.website-files.com/62f4dd003ef1495b1bb8f3a0/62f4f62054964a1416e0b3c8_and-machines-vqTWfa4DjEk-unsplash.jpg" alt="">
          </div>
        </div>
      </div>
    </section>

    <footer class="pin-section">
      <p class="pin-text">scroll up</p>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Barjlazuardi | UI - Parallax',
      meta: [
        { name: 'description', content: 'My amazing ui parallax site.' }
      ],
      bodyAttrs: {
        class: 'ui-parallax-page'
      },
    })
  },
  data() {
    return {
      
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0)
      this.initGsap()
    })
  },
  beforeUnmount() {
    const { $gsap, $ScrollTrigger } = useNuxtApp()

    $gsap.killTweensOf()
    $ScrollTrigger.killAll()
  },
  methods: {
    initGsap() {
      const { $gsap, $ScrollTrigger } = useNuxtApp()

      // Gsap logic
      const tracks = document.querySelectorAll(".sticky-element")
      tracks.forEach((track, i) => {
        let trackWrapper = track.querySelectorAll(".track")
        let images = track.querySelectorAll(".image")

        let trackWrapperWidth = () => {
          let width = 0
          trackWrapper.forEach(el => width += el.offsetWidth)
          return width
        }

        $gsap.defaults({
          ease: "none"
        })
        
        $ScrollTrigger.defaults({
          markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "12px"
          }
        })

        let scrollTween = $gsap.to(trackWrapper, {
          x: () => -trackWrapperWidth() + window.innerWidth,
          scrollTrigger: {
            trigger: track,
            pin: true,
            scrub: 1,
            start: "center center",
            end: () => "+=" + (track.scrollWidth - window.innerWidth),
            onRefresh: self => self.getTween().resetTo("totalProgress", 0), // fixes a very minor issue where the progress was starting at 0.001.
            invalidateOnRefresh: true,
            id: "id-one"
          },
        })

        images.forEach((img, i) => {
          // the intended parallax animation
          $gsap.fromTo(img, {
            x: "-20vw"
          }, {
            x: "20vw",
            scrollTrigger: {
              trigger: img.parentNode, // .panel-wide
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
              invalidateOnRefresh: true,
              onRefresh: self => {
                if (self.start < 0) {
                  self.animation.progress($gsap.utils.mapRange(self.start, self.end, 0, 1, 0))
                }
              },
              id: "id-two"
            },
          })
        })
      })

      const tlPin = $gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "center center", 
          end: "+=200%",
          pin: true,
          scrub: true
        }
      })

      tlPin.to('.pin-text', {
        scale: 20
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.ui-parallax-page {
  header,
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
}
</style>