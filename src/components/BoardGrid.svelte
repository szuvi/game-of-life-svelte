<script>
  export let size;
</script>

<div style="--size: {size}">
  <slot />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(var(--size), 1fr);
    grid-template-rows: repeat(var(--size), 1fr);
    grid-gap: 0.2rem;
  }
</style>
