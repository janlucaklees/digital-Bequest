<script>
	import QrCode from './components/QrCode.svelte';
	import { encodeMessage }  from './lib/message-functions';

	let message = 'In the event of my death, scan the QR Code to retrive my important credentials.';
	let credentials = '';
	let password = '';
	let passwordRepetition = '';

	$: cipher = encodeMessage(credentials, password);

</script>

<div class="container">

	<h3>1. Your Message</h3>

	<p>Leave a Message for your loved ones</p>

	<textarea
		rows="4"
		bind:value={message} />

</div>

<div class="container">

	<h3>2. Your Credentials (Encrypted)</h3>

	<p>Enter important credentials that your loved ones will need to access your devices and password managers.</p>

	<textarea
	 rows="12"
		bind:value={credentials} />

</div>

<div class="container">

	<h3>3. Set your Password</h3>

	<p>Protect your credentials with a unique password. Give this password to your loved ones so that they can access your credentials in the event of your death.</p>

	<label for="password">Enter your Password</label>
	<input
		type="password"
		bind:value={password} />

	<label for="password">Repeat your Password</label>
	<input
		type="password"
		bind:value={passwordRepetition} />

</div>

<div class="container">

	<h3>4. Print the PDF</h3>

	<div class="page">
		{ message }

		<QrCode
			data={ `${window.location.href}?cipher=${encodeURIComponent(cipher)}` } />
	</div>

</div>

<style>
	textarea {
		height: auto;
		min-height: 8rem;
		resize: vertical;
	}
</style>

