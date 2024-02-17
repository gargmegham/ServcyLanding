<template>
  <section id="central-payment-hub" class="py-[10vh] px-[5%] grid gap-8 items-center grid-cols-2 max-sm:grid-cols-1">
    <div class="text-left">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Keep track of all your payments in one place.
      </div>
      <ul class="list-disc text-servcy-wheat text-lg">
        <li class="mt-3">
          See all your payments from different sources in one place.
        </li>
        <li class="mt-3">
          Use AI to generate insights, and reports on your payments.
        </li>
        <li class="mt-3">
          Predict your future payments, and cash flow.
        </li>
      </ul>
    </div>
    <div class="max-sm:hidden">
      <img src="@/assets/icons/central-payment-hub.svg" alt="central-payment-hub" class="mt-6" />
    </div>
  </section>
</template>

<script>
export default {
  name: "CentralPaymentHub",
};
</script>