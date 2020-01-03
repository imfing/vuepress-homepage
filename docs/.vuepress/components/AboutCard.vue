<template>
  <div class="about-card">
    <div class="avatar">
      <img :src="$withBase(data.avatar)" alt="">
    </div>
    <div class="card">
      <div class="bio">
        <div class="head">
          <span>
            {{data.head}}
          </span>
        </div>
        <div class="info">
          <span>
            {{data.info}}
          </span>
        </div>
        <div class="description">
          <slot></slot>
        </div>
      </div>
      <div class="interests">
        <span>
          {{data.interests}}
        </span>
      </div>
      <div class="socials">
        <div v-for="item in data.socials">
          <a :href="item.link" target="_blank">
            <img :src="'/icons/'+item.title+'.svg'" :alt="item.title"
            :title="item.title" />
          </a>
        </div>
      </div>
      <div class="actions">
        <div v-for="item in data.actions">
          <a :href="item.link" class="button"
              :target="item.link.startsWith('/')?'':'_blank'">
            {{item.text}}
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div> -->
  </div>
</template>


<script>

export default {
  props: ['frontmatter'],
  computed: {
    data() {
      return this.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl'

.about-card
  width 100%
  display: flex
  flex-direction column
  align-items center

  .avatar 
    position relative
    z-index 1
    img
      display block
      width 100%
      height auto
      max-width 150px
      border-radius 500rem

  .card
    max-width: 600px
    width 100%
    position relative
    top -75px
    padding-top 75px
    margin-left auto 
    margin-right auto 
    background #fff
    box-shadow 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius 0.3rem
    text-align center 
    .bio
      padding 1em
      .head
        font-weight 700
        font-size 1.3em
      .info
        padding-top 0.5rem
        font-size 1em
        color rgba(0,0,0,.4)
      .description
        text-align justify
        p
          padding 0.8em 0.5em 0
          line-height normal
          -webkit-margin-before 0em
          -webkit-margin-after 0em
          a
            font-weight normal

    .interests
      padding 1em 1.5em
      border-top 1px solid rgba(34,36,38,.1)
    .socials
      border-top 1px solid rgba(34,36,38,.1)
      display flex
      flex-direction: row
      justify-content: center
      flex-wrap wrap 
      img 
        width 32px
        margin 1em
        cursor pointer
    .actions
      border-top 1px solid rgba(34,36,38,.1)
      display flex
      flex-direction: row
      justify-content: center
      flex-wrap wrap
      .button
        background-color $btnBgColor
        border none
        border-radius 0.3em
        color white
        padding 0.5em 1em
        margin 1em 0.5em
        font-size 1rem
        font-family inherit
        font-weight 400
        text-align center
        text-decoration none
        display inline-block
        -webkit-transition-duration 0.4s /* Safari */
        transition-duration 0.4s
        cursor pointer
        &:hover
          background-color $btnHvColor
  .footer
      padding 1rem
      font-weight 200
      font-size 1rem
      text-align center
      color lighten($footColor, 25%)
      margin-top auto

</style>
