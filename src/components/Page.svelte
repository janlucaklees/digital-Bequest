<script lang="ts">
	//
	// Props
	export let message;
	export let qrCodeData;

	export let page;

	//
	// Imports
	import i18n from '../i18n';

	import QrCode from './QrCode.svelte';
	import logo from '../assets/digital-bequest.svg';

	//
	// Code

</script>

<div
	class="page"
	bind:this={page}>

	<p class="message">
		{ message }
	</p>

	<div class="qr-code">

		<QrCode
			data={ qrCodeData } />

		<p>
			<small>
				{$i18n.t('page.qr-code.hint')}
			</small>
		</p>

	</div>

	<div class="footer">

		<img
			class="logo"
			src={logo}
			alt="{$i18n.t('app.logo.alt')}" />

		<h1 class="app-name">
			{$i18n.t('app.name')}
		</h1>

		<p class="credits">
			<small>
				{$i18n.t('page.footer.message', { url: window.location.href })}
			</small>
		</p>
	</div>

</div>

<style>
	.page {
		display: grid;
		grid-template-rows: 33.3333% calc(66.6666% - 20mm) 20mm;

		width: 210mm;
		height: 296mm;
		padding: 5mm;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

		background-color: #ffffff;
	}

	.message {
		margin-bottom: 0;
		padding: 25mm;

		font-size: 5mm;
		white-space: pre-line;
	}

	.qr-code {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: 15mm;
	}

	.footer {
		display: grid;
		grid-template:
			"logo  title"   8mm
			"blank credits" auto
		 / 8mm   auto;
		align-items: flex-end;
		align-content: flex-end;

		padding: 0 3mm;
	}

	.logo {
		grid-area: logo;

		height: 100%;
	}

	.app-name {
		grid-area: title;

		margin-bottom: -.1em;

		font-size: 6mm;
	}

	.credits {
		grid-area: credits;

		margin-top: .8rem;
		margin-bottom: 0;
		margin-left: .1em;

		line-height: .8em;
	}

</style>

