<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info"
          >Organize Meetup</v-btn
        >
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel
          cycle
          height="600"
          hide-delimiter-background
          show-arrows-on-hover
          style="cursor: pointer;"
        >
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl:
            "https://www.visittheusa.co/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-04/7010d1e88b80578f3d4e6fc09c2a2379.jpeg?itok=YLMbh1Rm",
          id: "Meetup in New York"
        },
        {
          imageUrl:
            "https://diariolalibertad.com/sitio/wp-content/uploads/2019/12/Dubai-skyline_16d7de0fdce_large.jpg",
          id: "Meetup in Dubai"
        }
      ]
    };
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
