<template>
  <div class="container mx-auto h-screen">
    <img
      src="../../../public/bg.jpg"
      class="bg-fixed absolute z-zx w-full h-full object-center opacity-80"
    />
    <div class="flex items-center w-full h-full justify-center">
      <div class="h-3/5 w-4/5 grid grid-cols-2 gap-0">
        <div class="h-full flex justify-center shadow-2xl box-border mx-auto">
          <img src="../../../public/login-left.svg" class="w-4/5 block" />
        </div>
        <div
          class="h-full bg-blue-200 flex items-center justify-center opacity-90"
        >
          <div class="h-4/5 w-4/5 shadow-2xl rounded-3xl box-border p-10">
            <div class="w-full h-full flex flex-col justify-center">
              <div
                class="font-sans text-2xl text-blue-400 text-center font-bold"
              >
                欢迎登录
              </div>
              <div class="my-2 w-4/5 mx-auto">
                <input placeholder="请输入用户名" class="cfl-btn" />
              </div>
              <div class="my-2 w-4/5 mx-auto">
                <input
                  placeholder="请输入密码"
                  type="password"
                  class="cfl-btn"
                />
              </div>
              <div class="w-4/5 flex justify-between mx-auto">
                <button class="h-7 w-1/3">登录</button>
                <button class="h-7 w-1/3">注册</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>
