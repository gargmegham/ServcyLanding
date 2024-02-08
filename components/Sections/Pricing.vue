<template>
    <section id="pricing" class="py-[4vh] servcy-wave-block text-center">
        <div class="md:text-7xl text-5xl pt-16 pb-6 font-axiforma font-extrabold">
            Pricing
        </div>
        <div class="md:text-xl text-lg font-semibold text-servcy-wheat pb-16">
            The best work solution, for the best price.
        </div>
        <div class="flex justify-center">
            <v-sheet width="300px"
                class="servcy-card-bg servcy-wheat-shadow-left-bottom pa-6 mx-2 rounded !text-servcy-neutral">
                <div class="text-3xl font-bold pb-4">Monthly</div>
                <div class="text-2xl font-semibold">
                    <v-btn fab outlined color="silver" class="!bg-servcy-neutral">$15</v-btn>
                </div>
                <div class="text-sm mt-2 align-self-center">Billed Monthly</div>
                <ul class="text-left my-3 text-servcy-black">
                    <li class="md:text-lg text-sm max-sm:text-xs">
                        <v-icon color="#26542F">
                            mdi-check-circle-outline
                        </v-icon>
                        Unlimited Accounts
                    </li>
                    <li class="md:text-lg text-sm max-sm:text-xs">
                        <v-icon color="#26542F">
                            mdi-check-circle-outline
                        </v-icon>
                        Priority Support
                    </li>
                    <li class="md:text-lg text-sm max-sm:text-xs">
                        <v-icon color="#7E84A3">
                            mdi-cancel
                        </v-icon>
                        Community Access
                    </li>
                </ul>
                <div>
                    <button class="rounded p-3 servcy-wheat-shadow-left-bottom border-servcy-black border"
                        style="border-style: solid;">
                        <a href="https://web.servcy.com" target="_blank"
                            class="font-castoro font-semibold !text-servcy-black hover:!text-servcy-wheat text-xl">
                            Get Started
                        </a>
                    </button>
                </div>
            </v-sheet>
            <v-sheet width="300px"
                class="servcy-card-bg servcy-wheat-shadow-right-bottom pa-6 mx-2 rounded !text-servcy-neutral">
                <div class="text-3xl font-bold pb-4">Yearly</div>
                <div class="text-2xl font-semibold">
                    <v-btn fab outlined color="silver" class="!bg-servcy-neutral">$150</v-btn>
                </div>
                <div class="text-sm mt-2 align-self-center">Billed Yearly</div>
                <ul class="text-left my-3 text-servcy-black">
                    <li class="md:text-lg text-sm max-sm:text-xs">
                        <v-icon color="#26542F">
                            mdi-check-circle-outline
                        </v-icon>
                        Unlimited Accounts
                    </li>
                    <li class="md:text-lg text-sm max-sm:text-xs">
                        <v-icon color="#26542F">
                            mdi-check-circle-outline
                        </v-icon>
                        Priority Support
                    </li>
                    <li class="md:text-lg text-sm max-sm:text-xs">
                        <v-icon color="#26542F">
                            mdi-check-circle-outline
                        </v-icon>
                        Community Access
                    </li>
                </ul>
                <div>
                    <button class="bg-servcy-black servcy-wheat-shadow-right-bottom rounded p-3">
                        <a href="https://web.servcy.com" target="_blank"
                            class="font-castoro font-semibold !text-servcy-cream hover:!text-servcy-wheat text-xl">
                            Get Started
                        </a>
                    </button>
                </div>
            </v-sheet>
        </div>
        <!-- savings calculator -->
        <v-sheet class="servcy-card-bg mt-6 mb-10 mx-auto rounded-xl pa-6" max-width="650px"
            style="box-shadow: 0px 4px 4px 4px #d1bfae !important">
            <div class="text-3xl font-bold align-self-center text-servcy-neutral">
                Savings Calculator
            </div>
            <div class="text-servcy-black text-sm font-semibold pt-5">How many hours are you losing each week to
                productivity killers such as
                interruptions, juggling between
                apps and manual scheduling?
            </div>
            <v-slider class="my-4 !text-servcy-green" v-model="numHours" :max="20" :min="0" :step="1" thumb-label
                color="#26542F" track-color="#032123" ticks="always" :tickLabels="hourLabels"></v-slider>
            <div class="text-servcy-neutral text-sm font-semibold pt-5">How much is one hour of your time worth to you?
            </div>
            <div>
                <input id="value-per-hour" v-model="valuePerHour" class="!outline-none" type="number"
                    aria-label="value-per-hour" />
                <label for="value-per-hour" class="text-servcy-black text-sm font-semibold hidden">Value Per Hour</label>
                <span class="text-servcy-green">$</span>
            </div>
            <div
                class="min-h-30 w-full mt-2 flex justify-between font-castoro text-sm max-sm:text-xs text-servcy-black font-semibold">
                <div style="box-shadow: -4px 4px 0px 2px #d1bfae !important"
                    class="border border-servcy-black rounded-lg flex-column border-solid pa-2">
                    <div>Time Saved Per Month:</div>
                    <div class="text-servcy mt-1">{{ numHours * 4 }} Hours</div>
                </div>
                <div style="box-shadow: 0px 4px 0px 2px #d1bfae !important"
                    class="border border-servcy-black rounded-lg flex-column border-solid pa-2 mx-2">
                    <div>Money Saved Per Month:</div>
                    <div class="text-servcy mt-1">$ {{ valuePerHour * numHours * 4 }}</div>
                </div>
                <div style="box-shadow: 4px 4px 0px 2px #d1bfae !important"
                    class="border border-servcy-black rounded-lg flex-column border-solid pa-2">
                    <div>Total ROI From Servcy:</div>
                    <div class="text-servcy mt-1">$ {{ numHours * valuePerHour * 4
                        - 150 / 12 }}</div>
                </div>
            </div>
        </v-sheet>
    </section>
</template>
  
<script>
export default {
    name: "Pricing",
    data() {
        return {
            numHours: 5,
            valuePerHour: 50,
            hourLabels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        };
    },
};
</script>

<style scoped>
#value-per-hour {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #26542F;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #26542F;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
}
</style>
