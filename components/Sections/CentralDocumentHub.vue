<template>
  <section
    id="central-document-hub"
    class="py-[10vh] px-[5%] grid gap-8 items-center grid-cols-2 max-sm:grid-cols-1"
  >
    <div class="text-left">
      <div class="font-axiforma font-extrabold md:text-5xl text-4xl">
        Store your documents<br />
        in one place
      </div>
      <ul class="list-disc text-servcy-wheat text-lg">
        <li class="mt-3">
          See, and share all your documents from your favorite tools in one
          place.
        </li>
        <li class="mt-3">
          Use AI to ask questions, and get answers from your documents.
        </li>
        <li class="mt-3">
          Manage documents like designs, contracts, invoices, and more with
          relevant tags.
        </li>
        <li class="mt-3">
          Maintain client level seggregation, and access control.
        </li>
      </ul>
    </div>
    <div class="max-sm:hidden p-16">
      <img
        src="@/assets/icons/central-document-hub.svg"
        alt="central-document-hub"
        class="mt-6"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "CentralDocumentHub",
};
</script>
