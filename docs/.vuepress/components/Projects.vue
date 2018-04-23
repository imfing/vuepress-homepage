<template>
  <div class="projects">
    <div class="wrapper">
      <Content/>
      <div class="project" v-for="project in data.projects">
        <div v-if="project.image" class="project-image">
          <img :src="$withBase(project.image)" alt="">
        </div>
        <div class="project-content">
          <div v-for="row in project.rows" >
            <m-content :content="row.content"></m-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MContent from "./MContent.vue";

export default {
  components: {
    MContent
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl'

.projects
  max-width 100%
  background-color $projBgColor
  min-height calc(100vh - 3.6rem)
  .wrapper
    padding 2em 2em
    display flex
    flex-direction column
    align-items center
    box-sizing border-box
    .content
      max-width 740px
      margin-left auto 
      margin-right auto
      width 100%
    .project
      background-color $frontColor   
      border 1px solid #eee
      border-radius 0.5rem
      box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
      padding 0.5rem
      margin-top 1em
      max-width 740px
      width 100%
      min-height 150px
      margin-left auto 
      margin-right auto
      display flex
      flex-direction row
      align-items: stretch
      // justify-content: center
      .project-image
        display flex
        align-items center
        padding 0.5rem
        img 
          max-width 150px
          max-height 150px
          height 150px
          border: 1px solid #eee;
          border-radius 0.2rem
          object-fit cover
      .project-content
        padding 0.5rem
        flex-grow 1
        p
          line-height 1.5
          -webkit-margin-before 0em
          -webkit-margin-after 0.5em
        blockquote 
          font-size 1rem

@media (max-width: $MQMobileNarrow)
  .projects
    .wrapper
      padding 1rem 1rem
      .project
        display flex
        flex-direction column
        padding 0.5rem
        width 100%
        box-sizing border-box
        .project-image
          flex-grow 1
          align-items: stretch
          img 
            width 100%
            max-width 400px

</style>