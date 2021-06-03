<template>
  <div>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <form>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ...">
      <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
        Sign up
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  },
  setup () {
    document.querySelector("body").setAttribute("style", "background:pink")
  },
  unmounted () {
    document.querySelector("body").setAttribute("style", "")
  }
}
</script>

<style scoped lang="scss" >
</style>
