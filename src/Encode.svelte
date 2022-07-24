<script  lang="ts">
	//
	// Props


	//
	// Imports
	import html2pdf from 'html2pdf.js';

	import i18n from './i18n';

	import Page from './components/Page.svelte';
	import { encodeMessage }  from './lib/message-functions';

	//
	// Code
	let message = 'In the event of my death, scan the QR Code to retrive my important credentials.';
	let credentials = '';
	let password = '';
	let passwordRepetition = '';

	let page;

	$: cipher = encodeMessage(credentials, password);

	function downloadPDF() {
		html2pdf(page);
	}

</script>

<div class="container">

	<h3>{$i18n.t('encode.steps.1.title')}</h3>

	<p>{$i18n.t('encode.steps.1.subtitle')}</p>

	<textarea
		rows="12"
		bind:value={message} />

</div>

<div class="container">

	<h3>{$i18n.t('encode.steps.2.title')}</h3>

	<p>{$i18n.t('encode.steps.2.subtitle')}</p>

	<textarea
	 rows="12"
		bind:value={credentials} />

</div>

<div class="container">

	<h3>{$i18n.t('encode.steps.3.title')}</h3>

	<p>{$i18n.t('encode.steps.3.subtitle')}</p>

	<label for="password">{$i18n.t('encode.steps.3.fields.password.label')}</label>
	<input
		id="password"
		name="password"
		type="password"
		bind:value={password} />

	<label for="password-repeat">{$i18n.t('encode.steps.3.fields.password.label')}</label>
	<input
		id="password-repeat"
		name="password-repeat"
		type="password"
		bind:value={passwordRepetition} />

</div>

<div class="container">

	<h3>{$i18n.t('encode.steps.4.title')}</h3>

	<div class="preview">
		<Page
			bind:page={page}
	 		message={ message }
	 		qrCodeData={ `${window.location.href}?cipher=${encodeURIComponent(cipher)}` } />
	</div>

	<div class="align-center">
		<button
			class="cta"
			on:click={downloadPDF}>
			{$i18n.t('encode.steps.4.buttons.download')}
		</button>
	</div>

</div>

<style>
	textarea {
		height: auto;
		min-height: 8rem;
		resize: vertical;
	}

	.preview {
		height: calc(297mm * 0.75);

		overflow: visible;

		transform: scale(.75);
		transform-origin: top center;

		margin-bottom: 6rem;
	}

	.align-center {
		display: flex;
		justify-content: center;
	}

	.cta {
		font-size: 2rem;
		height: 3.45em;
	}
</style>

