<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <AuthenticatedLayout>
        <div
            class="bg-background-light dark:bg-background-dark font-display min-h-screen"
        >
            <div
                class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
            >
                <div class="layout-container flex h-full grow flex-col">
                    <div
                        class="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5"
                    >
                        <div
                            class="layout-content-container flex flex-col w-full max-w-[960px] flex-1"
                        >
                            <!-- TopNavBar -->
                            <Head
                                class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-3"
                            >
                                <div
                                    class="flex items-center gap-4 text-text-main-light dark:text-text-main-dark"
                                >
                                    <div class="size-6 text-primary">
                                        <!-- Logo -->
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_6_319)">
                                                <path
                                                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_6_319">
                                                    <rect
                                                        width="48"
                                                        height="48"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <h2 class="text-lg font-bold leading-tight">
                                        ForestSoul
                                    </h2>
                                </div>

                                <div
                                    class="hidden md:flex flex-1 justify-end gap-8"
                                >
                                    <nav class="flex items-center gap-9">
                                        <a class="nav-link" href="#"
                                            >Meditation</a
                                        >
                                        <a class="nav-link" href="#">Yoga</a>
                                        <a class="nav-link" href="#">Therapy</a>
                                        <a class="nav-link" href="#">Donate</a>
                                        <a class="nav-link" href="#"
                                            >About Us</a
                                        >
                                    </nav>

                                    <div class="flex gap-2">
                                        <button class="btn-primary">
                                            Sign Up
                                        </button>
                                        <button class="btn-secondary">
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </Head>

                            <main class="flex-grow">
                                <!-- Hero Section -->
                                <section class="my-10 @container">
                                    <div class="sm:p-4">
                                        <div
                                            class="hero-bg"
                                            style="
                                                background-image:
                                                    linear-gradient(
                                                        rgba(16, 34, 22, 0.5) 0%,
                                                        rgba(16, 34, 22, 0.8)
                                                            100%
                                                    ),
                                                    url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBXgjMUD2yXjytH2F1BCnM4F0za-WFf-ft7l-xCusCyq37Q8D4ZHINop1lWRsIzPOS1rhUZrbofVVJqxhvu6UmrPzHtU1QVyjKmFVHMd76R1E8GLbI7VdDHcLpeQ_5RQ2Jo5T7DnxmV0JGwsNW_FB2h9TdttHWCWNH90grVhoG3NvGHvORTMnAv0MCqQbKjgXtX1F-RqVcKH-5eKlRsFpbqnvBtMs_gZrNawEuaNj1lY4b7-KlJQ8b_LuTfvwFIpXHRDAxeBauTkhM&quot;);
                                            "
                                        >
                                            <div
                                                class="flex flex-col gap-2 text-center max-w-2xl"
                                            >
                                                <h1 class="hero-title">
                                                    Find Your Inner Peace,
                                                    Naturally
                                                </h1>
                                                <p class="hero-subtitle">
                                                    Connecting mental wellness
                                                    with the healing power of
                                                    nature.
                                                </p>
                                            </div>

                                            <button class="btn-primary-lg">
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                <!-- Offerings Section -->
                                <section class="my-10">
                                    <h2 class="section-title px-4 pb-3 pt-5">
                                        Our Offerings
                                    </h2>

                                    <div
                                        class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4"
                                    >
                                        <!-- Meditation -->
                                        <div class="card-offer">
                                            <span
                                                class="material-symbols-outlined text-primary text-3xl"
                                            >
                                                self_improvement
                                            </span>
                                            <div>
                                                <h3 class="card-title">
                                                    Meditation
                                                </h3>
                                                <p class="card-desc">
                                                    Guided sessions to calm your
                                                    mind.
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Yoga -->
                                        <div class="card-offer">
                                            <span
                                                class="material-symbols-outlined text-primary text-3xl"
                                            >
                                                fitbit_yoga
                                            </span>
                                            <div>
                                                <h3 class="card-title">Yoga</h3>
                                                <p class="card-desc">
                                                    Flows for every level to
                                                    connect body and soul.
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Therapy -->
                                        <div class="card-offer">
                                            <span
                                                class="material-symbols-outlined text-primary text-3xl"
                                                >groups</span
                                            >
                                            <div>
                                                <h3 class="card-title">
                                                    Therapy
                                                </h3>
                                                <p class="card-desc">
                                                    Connect with licensed
                                                    professionals in a safe
                                                    space.
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Donate -->
                                        <div class="card-offer">
                                            <span
                                                class="material-symbols-outlined text-primary text-3xl"
                                                >forest</span
                                            >
                                            <div>
                                                <h3 class="card-title">
                                                    Donate to Nature
                                                </h3>
                                                <p class="card-desc">
                                                    Give back to the planet and
                                                    support reforestation
                                                    projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <!-- How It Works -->
                                <section class="my-10">
                                    <h2
                                        class="section-title text-center px-4 pb-3 pt-5"
                                    >
                                        How It Works
                                    </h2>

                                    <div
                                        class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 text-center"
                                    >
                                        <div class="how-step">
                                            <div class="how-icon">
                                                <span
                                                    class="material-symbols-outlined text-4xl"
                                                    >explore</span
                                                >
                                            </div>
                                            <h3 class="how-title">
                                                1. Explore
                                            </h3>
                                            <p class="how-desc">
                                                Browse our diverse range of
                                                meditation, yoga, and therapy
                                                sessions.
                                            </p>
                                        </div>

                                        <div class="how-step">
                                            <div class="how-icon">
                                                <span
                                                    class="material-symbols-outlined text-4xl"
                                                    >connect_without_contact</span
                                                >
                                            </div>
                                            <h3 class="how-title">
                                                2. Connect
                                            </h3>
                                            <p class="how-desc">
                                                Find the right guide or
                                                therapist for your journey and
                                                book a session.
                                            </p>
                                        </div>

                                        <div class="how-step">
                                            <div class="how-icon">
                                                <span
                                                    class="material-symbols-outlined text-4xl"
                                                    >psychology</span
                                                >
                                            </div>
                                            <h3 class="how-title">3. Grow</h3>
                                            <p class="how-desc">
                                                Engage in practices that nurture
                                                your mind, body, and soul.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <!-- Testimonials -->
                                <section class="my-10">
                                    <h2
                                        class="section-title text-center px-4 pb-5 pt-5"
                                    >
                                        Voices of Our Community
                                    </h2>

                                    <div
                                        class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
                                    >
                                        <div class="card-testimonial">
                                            <p
                                                class="italic text-text-secondary-light dark:text-text-secondary-dark"
                                            >
                                                "ForestSoul has been a sanctuary
                                                for me. The guided meditations
                                                helped me find calm during a
                                                stressful time."
                                            </p>
                                            <p
                                                class="font-bold text-text-main-light dark:text-text-main-dark"
                                            >
                                                - Sarah J.
                                            </p>
                                        </div>

                                        <div class="card-testimonial">
                                            <p
                                                class="italic text-text-secondary-light dark:text-text-secondary-dark"
                                            >
                                                "Connecting with a therapist
                                                through this site was seamless
                                                and comfortable. I love the
                                                nature-based focus!"
                                            </p>
                                            <p
                                                class="font-bold text-text-main-light dark:text-text-main-dark"
                                            >
                                                - Michael B.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <!-- CTA -->
                                <section class="my-10 p-4">
                                    <div class="cta-box">
                                        <h2 class="cta-title">
                                            Begin Your Journey to a Calmer You
                                        </h2>
                                        <p class="cta-desc">
                                            Join the ForestSoul community today
                                            and take the first step toward
                                            balance.
                                        </p>
                                        <button class="btn-primary-lg">
                                            Join for Free
                                        </button>
                                    </div>
                                </section>
                            </main>

                            <!-- Footer -->
                            <footer
                                class="mt-auto border-t border-border-light dark:border-border-dark pt-8 pb-4"
                            >
                                <div
                                    class="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-sm"
                                >
                                    <!-- Services -->
                                    <div class="footer-col">
                                        <h4 class="footer-title">Services</h4>
                                        <a class="footer-link" href="#"
                                            >Meditation</a
                                        >
                                        <a class="footer-link" href="#">Yoga</a>
                                        <a class="footer-link" href="#"
                                            >Therapy</a
                                        >
                                    </div>

                                    <!-- About -->
                                    <div class="footer-col">
                                        <h4 class="footer-title">About</h4>
                                        <a class="footer-link" href="#"
                                            >Our Mission</a
                                        >
                                        <a class="footer-link" href="#"
                                            >Donate</a
                                        >
                                        <a class="footer-link" href="#"
                                            >Contact Us</a
                                        >
                                    </div>

                                    <!-- Resources -->
                                    <div class="footer-col">
                                        <h4 class="footer-title">Resources</h4>
                                        <a class="footer-link" href="#">Blog</a>
                                        <a class="footer-link" href="#">FAQ</a>
                                        <a class="footer-link" href="#"
                                            >Help Center</a
                                        >
                                    </div>

                                    <!-- Legal -->
                                    <div class="footer-col">
                                        <h4 class="footer-title">Legal</h4>
                                        <a class="footer-link" href="#"
                                            >Privacy Policy</a
                                        >
                                        <a class="footer-link" href="#"
                                            >Terms of Service</a
                                        >
                                    </div>
                                </div>

                                <div
                                    class="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border-light dark:border-border-dark pt-4 px-4"
                                >
                                    <p
                                        class="text-xs text-text-secondary-light dark:text-text-secondary-dark"
                                    >
                                        © 2024 ForestSoul. All rights reserved.
                                    </p>

                                    <div
                                        class="flex gap-4 text-text-secondary-light dark:text-text-secondary-dark"
                                    >
                                        <!-- Social icons -->
                                        <a class="footer-icon" href="#">
                                            <svg
                                                class="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                />
                                            </svg>
                                        </a>

                                        <a class="footer-icon" href="#">
                                            <svg
                                                class="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743c.195 3.361-8.457-4.287 1.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022c-.835.232-1.74.054-1.853.07A4.108 4.108 0 003.29 15.3c.565.995 3.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                />
                                            </svg>
                                        </a>

                                        <a class="footer-icon" href="#">
                                            <svg
                                                class="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped lang="postcss">
.nav-link {
    @apply text-text-main-light dark:text-text-main-dark text-sm font-medium hover:text-primary transition-colors;
}

.btn-primary {
    @apply flex min-w-[84px] items-center justify-center rounded-xl h-10 px-4 bg-primary text-background-dark text-sm font-bold hover:bg-opacity-80 transition-colors;
}

.btn-secondary {
    @apply flex min-w-[84px] items-center justify-center rounded-xl h-10 px-4 bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark text-sm font-bold hover:bg-opacity-80 transition-colors;
}

.btn-primary-lg {
    @apply flex min-w-[84px] items-center justify-center rounded-xl h-12 px-5 bg-primary text-background-dark text-base font-bold hover:bg-opacity-80 transition-colors;
}

.hero-bg {
    @apply flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4;
}

.hero-title {
    @apply text-white text-4xl font-black sm:text-5xl;
}

.hero-subtitle {
    @apply text-gray-200 text-sm sm:text-base;
}

.section-title {
    @apply text-text-main-light dark:text-text-main-dark text-[22px] font-bold tracking-[-0.015em];
}

.card-offer {
    @apply flex flex-1 gap-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 flex-col hover:border-primary/50 transition-colors;
}

.card-title {
    @apply text-text-main-light dark:text-text-main-dark text-base font-bold;
}

.card-desc {
    @apply text-text-secondary-light dark:text-text-secondary-dark text-sm;
}

.how-step {
    @apply flex flex-col items-center gap-4;
}

.how-icon {
    @apply flex items-center justify-center size-16 rounded-full bg-primary/20 text-primary;
}

.how-title {
    @apply text-lg font-bold text-text-main-light dark:text-text-main-dark;
}

.how-desc {
    @apply text-text-secondary-light dark:text-text-secondary-dark;
}

.card-testimonial {
    @apply flex flex-col gap-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6;
}

.cta-box {
    @apply flex flex-col items-center justify-center gap-6 rounded-xl bg-surface-light dark:bg-surface-dark p-10 text-center;
}

.cta-title {
    @apply text-3xl font-bold text-text-main-light dark:text-text-main-dark;
}

.cta-desc {
    @apply max-w-md text-text-secondary-light dark:text-text-secondary-dark;
}

.footer-col {
    @apply flex flex-col gap-4;
}

.footer-title {
    @apply font-bold text-text-main-light dark:text-text-main-dark;
}

.footer-link {
    @apply text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors;
}

.footer-icon {
    @apply hover:text-primary transition-colors;
}
</style>
