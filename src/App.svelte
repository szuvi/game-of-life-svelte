<script>
  import router from "page";

  // Include our Routes
  import Intro from "./containers/Intro.svelte";
  import BoardContainer from "./containers/BoardContainer.svelte";
  import Container from "./components/Container.svelte";

  // Variables
  let page;
  let params;

  $: console.log(params);

  // Set up the pages to watch for
  router("/", () => (page = Intro));
  router(
    "/main/:size",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (page = BoardContainer)
  );

  // Set up the router to start and actively watch for changes
  router.start();
</script>

<Container fullscreen>
  <svelte:component this={page} {params} />
</Container>
