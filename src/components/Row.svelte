<script>
  export let center = false;
  export let childrenCount = 0;
  export let gap = "0rem";
  $: gridColumns = `repeat(${childrenCount}, 1fr)`;
</script>

<div
  style="
    align-items: {center ? 'center' : 'stretch'}; 
    grid-gap: {gap || '0rem'};
    grid-template-columns: {gridColumns}"
>
  <slot />
</div>

<style>
  div {
    display: grid;
  }
</style>
