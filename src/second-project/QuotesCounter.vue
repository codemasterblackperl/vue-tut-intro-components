<template>
  <div class="row">
    <h3>
      Quotes Added
    </h3>
    <div class="col-sm-12">
      <div class="progress">
        <div class="progress-bar"
             role="progressbar"
             aria-valuenow="60"
             aria-valuemin="0"
             aria-valuemax="100"
             :style="{width:quotesCounter*10+'%'}">
          {{quotesCounter}}/{{maxCounter}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quotesCounter: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data: function() {
    return {
      maxCounter: 10
    };
  }
};
</script>
<style scoped>
</style>

