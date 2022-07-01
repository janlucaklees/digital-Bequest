<script>
	import logo from './assets/digital-bequest.svg';
	import Decode from './Decode.svelte';
	import Encode from './Encode.svelte';


	// Retrieve possible cipher from URL
	const queryParams = new URLSearchParams(window.location.search);
	const cipher = queryParams.get('cipher');
	const hasCipher = cipher !== null;

</script>

<main class="wrapper">

	<div class="container">
		<img src={logo} alt="Digital Bequest Logo" />
		<h1>Digital Bequest</h1>
	</div>

	{#if hasCipher }
		<Decode { cipher } />
	{:else}
		<Encode />
	{/if}

</main>

<style>
	.container {
		text-align: center;
	}

	img {
		margin-bottom: 3.5rem;
	}

	h1 {
		text-transform: uppercase;
		font-weight: 200;
		color: #000000;
	}
</style>
