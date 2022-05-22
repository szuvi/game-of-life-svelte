<script>
  export let alive;
  export let disabled;
  export let position;
  export let clickHandler;

  $: color = alive ? "black" : "none";
  $: hoverBackground = disabled ? "none" : "black";
  $: cursor = disabled ? "default" : "pointer";

  const handleClick = () => clickHandler(position);
</script>

<button
  on:click={handleClick}
  {disabled}
  style="--color: {color}; --hoverBackground: {hoverBackground}; --cursor: {cursor}"
/>

<style>
  button {
    height: 2rem;
    width: 2rem;
    border: 1px solid black;
    background: var(--color);
  }

  button:hover {
    background: var(--hoverBackground);
    opacity: 50%;
    cursor: var(--cursor);
  }

  button:active {
    opacity: 100%;
  }
</style>
