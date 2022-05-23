<script>
  import { onMount } from "svelte";
  import BoardGrid from "../components/BoardGrid.svelte";
  import Container from "../components/Container.svelte";
  import Controls from "./Controls.svelte";

  import GameOfLife from "../utils/GameAPI";
  import Cell from "../components/Cell.svelte";

  export let params;
  $: console.log("in boardcontainers ", params);

  let game;
  let board = [];
  let started = false;
  let gameSubscription;

  onMount(() => {
    game = GameOfLife(params.size);
    board = game.getState().flat();
    gameSubscription = game.getBoardUpdates$();
  });

  $: if (gameSubscription && $gameSubscription) board = $gameSubscription;

  const handleStart = () => {
    started = true;
    game.startUpdates(10);
  };

  const handleStop = () => {
    started = false;
    game.endUpdates();
  };

  const handleClear = () => game.wipeBoard();

  const handleToggle = (position) => game.toggleAtPos(position);
</script>

<Container>
  <BoardGrid size={params.size}>
    {#each board as cell (cell.id)}
      <Cell
        clickHandler={handleToggle}
        disabled={started}
        position={cell.pos}
        alive={cell.alive}
      />
    {/each}
  </BoardGrid>
  <Controls
    on:start={handleStart}
    on:stop={handleStop}
    on:clear={handleClear}
    {started}
  />
</Container>
