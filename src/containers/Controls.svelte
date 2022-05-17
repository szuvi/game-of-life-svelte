<script>
  import { createEventDispatcher } from "svelte";
  import page from "page";
  import ClearButton from "../components/ClearButton.svelte";
  import Row from "../components/Row.svelte";

  export let started;

  const dispatch = createEventDispatcher();

  const start = () => dispatch("start");
  const stop = () => dispatch("stop");
  const clear = () => dispatch("clear");
  const handleBack = () => page.back();
</script>

<Row childrenCount="4">
  <ClearButton on:click={start} disabled={started}>Start</ClearButton>
  <ClearButton on:click={stop} disabled={!started}>Stop</ClearButton>
  <ClearButton on:click={clear} disabled={started}>Clear</ClearButton>
  <ClearButton on:click={handleBack}>Back</ClearButton>
</Row>
