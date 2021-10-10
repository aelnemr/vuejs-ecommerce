<template>
  <div id="home">
    <div class="row">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" v-for="slider in sliders">
          <div v-bind:class="slider.classes">
            <img v-bind:src="slider.image" class="d-block w-100" alt="Slider">
          </div>
        </div>
        <button class="carousel-control-prev" v-on:click="previousSlider" type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" v-on:click="nextSlider" type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      currentActiveSlider: 1,
      sliders: [
        {
          id: 1,
          title: 'Slider 1',
          image: 'https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556_960_720.jpg',
          classes: [
            'carousel-item',
            'active'
          ]
        },
        {
          id: 2,
          title: 'Slider 2',
          image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
          classes: ['carousel-item']
        },
        {
          id: 3,
          title: 'Slider 3',
          image: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg',
          classes: ['carousel-item']
        },
      ]
    }
  },
  methods: {
    nextSlider() {
      // check if last slider
      if (this.sliders.length === this.currentActiveSlider) {
        this.currentActiveSlider = 0;
      }

      this.sliders = this.sliders.map(slider => {
        // remove active class from current slider
        if (slider.id === this.currentActiveSlider || this.currentActiveSlider === 0) {
          slider.classes = ['carousel-item']
        }

        // add active class to next slider
        if (slider.id === this.currentActiveSlider + 1) {
          slider.classes = ['carousel-item', 'active']
        }

        return slider;
      })

      this.currentActiveSlider++;
    },
    previousSlider() {
      // check if first slider
      if (1 === this.currentActiveSlider) {
        this.currentActiveSlider = this.sliders.length + 1;
      }

      this.sliders = this.sliders.map(slider => {
        // remove active class from current slider
        if (slider.id === this.currentActiveSlider || this.currentActiveSlider === this.sliders.length + 1) {
          slider.classes = ['carousel-item']
        }

        // add active class to next slider
        if (slider.id === this.currentActiveSlider - 1) {
          slider.classes = ['carousel-item', 'active']
        }

        return slider;
      })

      this.currentActiveSlider--;
    }
  },
  mounted() {
    window.setInterval(() => {
      this.nextSlider()
    }, 2000);

    console.log('mounted..')
  }
}
</script>
