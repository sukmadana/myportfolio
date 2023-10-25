<template>
  <div class="py-[40px] lg:py-[90px] dark:bg-slate-800 dark:text-slate-100">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-5/12 md:pr-5 mb-10 md:mb-0">
          <div class="flex items-center">
            <div class="heading">
							<h4 class="text-green-700">Experiences</h4>
              <h2>My Job Experiences</h2>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-7/12">
          <div>
            <UAccordion :items="experiences">
              <template #default="{ item, index, open }">
                <UButton
                  color="gray"
                  variant="ghost"
                  class="border-b border-gray-200 dark:border-gray-700"
                  :ui="{ rounded: 'rounded-none', padding: { sm: 'py-5 px-0' } }"
                >
                  
                  <h4 class="text-green-700 dark:text-slate-100"
                    >{{ item.label }}</h4
                  >
                  <template #trailing>
                    <UIcon
                      name="i-heroicons-chevron-right-20-solid"
                      class="w-5 h-5 ms-auto transform transition-transform duration-200"
                      :class="[open && 'rotate-90']"
                    />
                  </template>
                </UButton>
              </template>
							<template #item="{ item }">
								<div class="text-lg dark:text-slate-100 text-slate-900" v-html="item.content">
								</div>
							</template>
            </UAccordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    label: "Island Media",
    defaultOpen: true,
    content:
      `
				<p>Oct 2020 - Oct 2023</p>
				<i>Web Developer</i>
				<br>
				<ul>
					<li>- Develop the website with wordpress or Woocommerce for Island Media clients and Juicebox Client.</li>
					<li>- Maintenance the client's website (stack : Wordpress, Laravel, React Js, Woocommerce).</li>
				</ul>
			`,
  },
  {
    label: "Blockchain Zoo",
    content:
      `
			<p>May 2020 - Aug 2020</p>
			<i>Web Developer</i>
			<br>
			<ul>
				<li>- Maintenance the company websites and fix the ajax issue.</li>
			</ul>
			<br>Tech Stack : Wordpress
			`,
  },
	{
		label:"NutaPos Indonesia",
		content: `
			<p>Dec 2019 - Jan 2020</p>
			<i>Frontend Developer</i><br>
			<ul>
				<li>Maintenance the feature for client dashboard</li>
			</ul>
			<br>
			Tech stack : CodeIgniter 3, jQuery
		`
	}
];
</script>
