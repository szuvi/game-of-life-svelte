<script>
  export let value;
</script>

<input {...$$restProps} type="number" on:keypress on:change bind:value />

<style>
  input {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
    border: 1px solid rgb(223, 225, 229);
    transition: all 0.05s;
  }
  input:hover,
  input:active,
  input:focus,
  input:focus-within {
    box-shadow: 0 5px 6px -6px rgba(32, 33, 36, 0.28);
    outline: none;
    border: 1px solid rgb(223, 225, 229);
  }
</style>
