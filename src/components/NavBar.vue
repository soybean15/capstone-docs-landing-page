<template>
  <div class="navbar text-white">
    <div class="flex-1">
        <label for="my-drawer" class="btn  btn-ghost drawer-button"
        >Docs</label
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a>
            <div class="avatar">
              <div class="w-6 rounded-full">
                <img src="@/assets/github-logo.svg" />
              </div>
            </div>
          </a>
        </li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>

 
</template>

<script>
export default {};
</script>

<style>
</style>