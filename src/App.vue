<template lang="pug">
  #app
    #nav
      router-link(to='/') Home
      | &nbsp;|&nbsp;
      router-link(to='/about') About
    router-view
</template>
<template lang="pug">
  #app
    b-container
      b-row
        b-col.text-center(col="12")
          #nav
            router-link(to='/') Home
            | &nbsp;|&nbsp;
            router-link(to='/about') About
        b-col(cols="12")
          router-view
</template>
