<script lang="ts">
	import { Bike } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col bg-gray-900 text-gray-100">
	<header class="flex items-center border-b border-gray-800 p-4 px-4 lg:px-6">
		<div class="container mx-auto">
			<a class="flex items-center justify-center" href="/">
				<Bike class="mr-2 h-8 w-8 text-yellow-500" />
				<span class="text-xl font-bold">Pedal for Medal</span>
			</a>
		</div>
	</header>

	<main class="container mx-auto flex-1 px-4 py-8 md:px-6">
		<h1 class="mb-8 text-3xl font-bold text-yellow-500">Privacy Policy</h1>

		<div class="prose prose-invert max-w-none">
			<h2>Overview</h2>
			<p>
				This privacy policy explains how Pedal for Medal ("we", "us", "our") collects and processes
				your personal data when you sign our petition. We are committed to protecting your privacy
				and handling your data in an open and transparent manner.
			</p>

			<h2>What Data We Collect</h2>
			<p>We collect and process your email address when you sign our petition.</p>

			<h2>How We Use Your Data</h2>
			<p>Your email address is used for the following purposes:</p>
			<ul>
				<li>To verify that you are a real person and prevent multiple registrations</li>
				<li>To send you a confirmation email with a verification link</li>
				<li>
					If Arrowhead Game Studios expresses interest in our campaign, we may contact you to
					request permission to share your email with them
				</li>
			</ul>

			<h2>Data Retention</h2>
			<p>
				If you do not verify your email within 24 hours of signing the petition, your data will be
				automatically deleted from our records. If you do verify your email, we will retain your
				data until either:
			</p>
			<ul>
				<li>The end of this campaign</li>
				<li>You request deletion of your data</li>
			</ul>

			<h2>Data Processors</h2>
			<p>We use the following third-party service providers to process your data:</p>
			<ul>
				<li>Resend.com - For processing and sending emails</li>
				<li>Upstash - For storing email addresses</li>
			</ul>
			<p>
				These providers are essential for the basic functionality of our petition system. Data
				transfers to these providers are governed by appropriate data processing agreements.
			</p>

			<h2>Your Rights</h2>
			<p>Under GDPR, you have the right to:</p>
			<ul>
				<li>Request deletion of your personal data</li>
				<li>Access your personal data</li>
				<li>Object to processing of your personal data</li>
				<li>Request rectification of your personal data</li>
			</ul>

			<h2>Contact Us</h2>
			<p>
				To exercise any of your rights or for any questions about our privacy practices, you can
				contact us at privacy@pedalformedal.org.
			</p>

			<h2>Updates to This Policy</h2>
			<p>
				We may update this privacy policy from time to time. Any changes will be posted on this
				page.
			</p>
		</div>
	</main>

	<footer class="border-t border-gray-800 px-4 py-6 md:px-6">
		<div class="container mx-auto text-sm text-gray-400">
			Last updated: {new Date().toLocaleDateString()}
		</div>
	</footer>
</div>
