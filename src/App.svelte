<script>
	import logo from './assets/digital-bequest.svg';
	import Decode from './Decode.svelte';
	import Encode from './Encode.svelte';


	const queryParams = new URLSearchParams(window.location.search);
	const cipher = queryParams.get('cipher');
	const hasCipher = cipher !== null;
</script>

<main>
	<img src={logo} alt="Digital Bequest Logo" />
	<h1>Digital Bequest</h1>

	{#if hasCipher }
		<Decode { cipher } />
	{:else}
		<Encode />
	{/if}

</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

		--primary-color: #274472;
		--font-color: #000000;
	}

	html {
		box-sizing: border-box;
		font-size: 16px;
		color: var(--font-color);

	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	ol, ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	img {
		height: 16rem;
		width: 16rem;
	}

	h1 {
		color: var(--font-color);
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 1rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
