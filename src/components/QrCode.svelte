<script>
	// Props
	export let data;

	// Imports
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';


	// Code
	let canvas;

	$: canvas && QRCode.toCanvas(canvas, data);

</script>

<main>
	<canvas
	 bind:this={canvas} >
	</canvas>
</main>

<style>
</style>

