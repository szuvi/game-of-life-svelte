<button on:click {...$$restProps}><slot /></button>

<style>
  button {
    font-size: 1.2rem;
    background: none;
    border: none;
    padding: 0.2rem 0.7rem;
    transition: 100ms;
  }
  button:hover {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    box-shadow: 0 5px 6px -6px rgba(32, 33, 36, 0.28);
  }
  button:active {
    padding: 0.1rem 0.5rem;
    box-shadow: 0 6px 7px -5px rgba(32, 33, 36, 0.28);
  }
</style>
