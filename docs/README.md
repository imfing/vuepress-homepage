---
pageClass: home-page
# some data for the components

name: August Sosick
profile: /pics/profile.jpeg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/asosick
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/asosick/

resume: https://asosickpersonalsitebucket52.s3.ca-central-1.amazonaws.com/August_Sosick_Resume_2022.pdf
bio: Student at UofC

email: august@sosick.ca
---
[a](google.ca)


<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am attending the [University of Calgary](https://en.wikipedia.org/wiki/Hogwarts) to continue my education in software engineering and business.

I have worked professionally as a full stack developer at Morgan Stanley, which involved backened, front-end, and devops work.



## Education

- **University of Calgary - Software Engineering** <br/>
Sept 2017 - Apr 2023

- **University of Calgary - Business** <br/>
Sept 2018 - Apr 2023

## Work Experience

[→ Full list](/work/)

<ProjectCard image="/pics/MS.jpeg" hideBorder=true>

  **Morgan Stanley**

  May 2021 - August 2022

  Software Engineering Intern at Morgan Staney

</ProjectCard>

<ProjectCard image="/pics/BCI.png" hideBorder=true>

  **BroadCast Controls**

  May 2020 - August 2020

  Software Engineering Intern at Broadcast Controls Inc.

</ProjectCard>

## Projects


[→ Full list](/projects/)

<ProjectCard image="/pics/telus.png" hideBorder=true>

  **Telus LTE Bandwidth Throttling**

  September 2022 - April 2023
  
  I am currently working with Telus Communications Inc. to develop strategies to throttle LTE video traffic to reduce network load during peak hours
  

</ProjectCard>

<ProjectCard image="/pics/orrery.GIF" hideBorder=true>

  **Orrery**
  
  A small orrery which simulates all major planetary bodies of the solar system, including the moon.

  [[Link](https://www.google.com)]

</ProjectCard>


## Awards & Honors

### Contests

- First place in **The Hogwarts House Cup**


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
