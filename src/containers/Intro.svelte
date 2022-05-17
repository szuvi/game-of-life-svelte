<script>
  import ClearButton from "../components/ClearButton.svelte";
  import Container from "../components/Container.svelte";
  import Input from "../components/Input.svelte";
  import page from "page";

  let size = "";
  let error = "";

  const handleSubmit = () => {
    if (!Number.isNaN(+size)) {
      page(`/main/${size}`);
      error = "";
    }
    error = "Incorrect input!";
  };

  const handleEnter = ({ code }) => {
    if (code === "Enter") {
      handleSubmit();
    }
  };
</script>

<Container centered>
  {#if error.length > 0}
    <p style={{ color: "red" }}>{error}</p>
  {/if}
  <label for="size">Input size of the Board</label>
  <Input id="size" on:keypress={handleEnter} bind:value={size} />

  <ClearButton on:click={handleSubmit}>Enter</ClearButton>
</Container>
