<script>
  export let centered = false;
  export let fullscreen = false;
  export let gap = "0.5rem";
</script>

<div class:centered class:fullscreen style="grid-gap: {gap}">
  <slot />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }

  .centered {
    margin: 0 auto;
  }

  .fullscreen {
    height: 100vh;
    width: 100vw;
  }
</style>
