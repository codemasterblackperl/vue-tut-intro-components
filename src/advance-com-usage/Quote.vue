<template>
  <div class="divBox">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <span style="color:#ccc">
      <slot name="subTitle">the default subtitle will be displayed only if there will be no content to
        display here</slot>
    </span>
    <hr>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.divBox {
  border: 1px solid gray;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: red;
  text-decoration: underline;
}

.title {
  font: bold;
  font-size: 18px;
  text-decoration: lightslategrey underline;
}

.content {
  font-style: italic;
  font-size: 15px;
}
</style>



