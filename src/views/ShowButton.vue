<template>
  <div>
    <h3>按钮部分</h3>
    <div class="my-button">
      <m-button>按钮-默认</m-button>
      <m-button type="primary">按钮-primary</m-button>
      <m-button type="success">按钮-success</m-button>
      <m-button type="info">按钮-info</m-button>
      <m-button type="danger">按钮-danger</m-button>
      <m-button type="warning">按钮-warning</m-button>
    </div>
    <div class="my-button">
      <m-button>按钮-plain</m-button>
      <m-button plain
                type="primary">按钮-primary</m-button>
      <m-button plain
                type="success">按钮-success</m-button>
      <m-button plain
                type="info">按钮-info</m-button>
      <m-button plain
                type="danger">按钮-danger</m-button>
      <m-button plain
                type="warning">按钮-warning</m-button>
    </div>
    <div class="my-button">
      <m-button>按钮-round</m-button>
      <m-button round
                plain
                type="primary">按钮-primary</m-button>
      <m-button round
                plain
                type="success">按钮-success</m-button>
      <m-button round
                plain
                type="info">按钮-info</m-button>
      <m-button round
                plain
                type="danger">按钮-danger</m-button>
      <m-button round
                plain
                type="warning">按钮-warning</m-button>
    </div>
    <div class="my-button">
      <m-button circle
                round
                plain
                type="primary"></m-button>
      <m-button circle
                round
                plain
                type="success"></m-button>
      <m-button circle
                round
                plain
                type="info"></m-button>
      <m-button circle
                round
                plain
                type="danger"></m-button>
      <m-button circle
                round
                plain
                type="warning"></m-button>
    </div>

    <div class="my-button">
      <m-button disabled type="primary">1</m-button>
      <m-button disabled type="success">2</m-button>
      <m-button disabled type="info">3</m-button>
      <m-button disabled type="danger">4</m-button>
      <m-button disabled type="warning">5</m-button>
    </div>

    <div class="my-button">
      <m-button @click="submit">submit</m-button>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    submit () {
      alert('submit')
    }
  }
}
</script>

<style scoped>
.my-button {
  display: flex;
  margin: 20px;
  width: 30%;
  min-width: 800px;
  justify-content: space-around;
}
</style>
