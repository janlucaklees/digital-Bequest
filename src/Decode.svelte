<script>
	// Props
	export let cipher

	// Imports
	import { decodeMessage }  from './lib/message-functions';

	// Code
	let password = '';

	$: message = decodeMessage(cipher, password);

</script>

<main>
	<input type="password" bind:value={ password }>

	{ message }
</main>

<style>

</style>

