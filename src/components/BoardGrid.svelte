<script>
  export let size;
</script>

<div
  style="grid-template-columns: repeat({size}, 1fr); grid-template-rows: repeat({size}, 1fr);"
>
  <slot />
</div>

<style>
  div {
    display: grid;
    grid-gap: 0.2rem;
  }
</style>
