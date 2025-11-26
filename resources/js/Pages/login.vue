<script setup>
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark overflow-hidden">

    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkgZBRdUGgAQ4BTnzI3nIeUi6MMjYfMs0lxhacEjx2sJXsPEnJwYyGrZpx1kFPek1jDeflmMi_olDWhfL1EHRjBbtXR1xPKf8F9mJEJ37oqt4Ipma2Ke6SWuHv7hu4VhPBGOJdM1huYJ_8VwHUnKsOTXyfk016OpVq2QKEdQ8VDWXysyVenrS9SPL-m38TgHQEzR1kvVQBdYmAFrLYnQOQ9XvtZhBO08ZXOf1fEILdT_YvCruObUDUOVVPAYkkFNihgyLTYQmn3q8');"
    >
      <div class="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
    </div>

    <!-- Card -->
    <div class="relative z-10 w-full max-w-md p-6 sm:p-8 bg-card-light/80 dark:bg-card-dark/80 rounded-xl shadow-2xl backdrop-blur-md">

      <h1 class="text-center text-3xl font-bold text-primary mb-4">ForestSoul</h1>

      <h2 class="text-2xl font-bold text-center text-text-light dark:text-text-dark">
        Log In
      </h2>

      <p class="text-center text-sm text-text-muted-light dark:text-text-muted-dark mb-6">
        Welcome back! Please enter your details.
      </p>

      <!-- Form -->
      <div class="flex flex-col gap-4">

        <!-- Email -->
        <div>
          <label class="text-sm font-medium">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            class="mt-1 w-full rounded-lg h-12 p-3 border bg-input-bg-light/80 dark:bg-input-bg-dark/80"
          />
        </div>

        <!-- Password -->
        <div>
          <div class="flex justify-between items-center">
            <label class="text-sm font-medium">Password</label>
            <a href="#" class="text-primary text-sm">Forgot Password?</a>
          </div>

          <input
            type="password"
            placeholder="Enter your password"
            class="mt-1 w-full rounded-lg h-12 p-3 border bg-input-bg-light/80 dark:bg-input-bg-dark/80"
          />
        </div>

        <!-- Button -->
        <button class="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg">
          Log In
        </button>
      </div>

      <!-- Divider -->
      <div class="relative my-6">
        <div class="border-t"></div>
        <p class="text-center text-xs mt-2 text-text-muted-light dark:text-text-muted-dark">
          Or continue with
        </p>
      </div>

      <!-- Social buttons -->
      <div class="grid grid-cols-2 gap-3">
        <button class="h-11 border rounded-lg">Google</button>
        <button class="h-11 border rounded-lg">Facebook</button>
      </div>

      <p class="mt-6 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
        Don’t have an account?
        <a href="#" class="text-primary font-semibold">Sign Up</a>
      </p>

    </div>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
</style>