<script>
	import QrCode from './components/QrCode.svelte';
	import { encodeMessage }  from './lib/message-functions';

	let message = '';
	let password = '';

	$: cipher = encodeMessage(message, password);

</script>

<main>
	<textarea type="text" bind:value={message}></textarea>

	<input type="password" bind:value={password}>

	<QrCode data={ `${window.location.href}?cipher=${encodeURIComponent(cipher)}` } />
</main>

<style>

</style>

