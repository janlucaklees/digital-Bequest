<script>
	// Props
	export let cipher

	// Imports
	import { decodeMessage }  from './lib/message-functions';

	// Code
	let password = '';
	let credentials = '';

	$: credentials = decodeMessage(cipher, password);

</script>

<div class="container">

	<h3>Sorry for your loss.</h3>

	<p>As you are here, it means you must have lost someone. But they left you something. Enter the password that they have given to you to retrieve it.</p>

	<label for="password">
		Enter the Password
	</label>

	<input
		id="password"
		type="password"
		bind:value={ password } />

	<label for="credentials">
		Here is what was left to you
	</label>

	<pre id="credentials"><code>{ credentials }</code></pre>

</div>

<style>

</style>

