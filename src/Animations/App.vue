<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <!-- <select v-model="alertAnimation"
                class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <br>
        <button class="btn btn-primary"
                @click="show=!show">Show Alert</button>
        <br>
        <br>
        <transition name="fade">
          <div class="alert alert-info"
               v-if="show">Info alert</div>
        </transition>
        <br>
        <transition enter-active-class="animated zoomIn"
                    leave-active-class="animated zoomOut"
                    appear>
          <div class="alert alert-info"
               v-show="show">appear will apply the animation on page load</div>
        </transition>
        <br>
        <transition :name="alertAnimation"
                    mode="out-in">
          <div class="alert alert-info"
               key="info"
               v-if="show">Info alert</div>
          <div class="alert alert-warning"
               v-else
               key="warning">
            Waring alert
          </div>
        </transition>
        <br>
        <hr>
        <button class="btn btn-primary"
                @click="load=!load"> Load / Remove element</button>
        <br><br>
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :name="alertAnimation">
          <div style="width:100px;height:100px;background-color:lightgreen;"
               v-if="load"></div>
        </transition>
        <br>
        <hr>
        <button class="btn btn-primary"
                @click="selectedComponent=(selectedComponent=='app-success-alert'?'app-danger-alert':'app-success-alert')">Success/Danger</button>
        <br><br>
        <transition name="fade"
                    mode="out-in">
          <component :is="selectedComponent">
          </component>
        </transition> -->
        <button class="btn btn-primary"
                @click="addNumber()">Add Number</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item"
                v-for="(number,index) in numbers"
                :key="number"
                @click="removeNumber(index)"
                style="cursor:pointer;">{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import _dangerAlert from "./DangerAlert";
import _successAlert from "./SuccessAlert";
export default {
  data() {
    return {
      show: false,
      alertAnimation: "fade",
      load: false,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    addNumber() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeNumber(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log("before enter");
      el.style.width = "100px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = 100 + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      //done();
    },
    afterEnter(el) {
      console.log("after enter");
    },
    enterCancelled(el) {
      console.log("enter cancelled");
    },
    beforeLeave(el) {
      console.log("before leave");
      el.style.width = "300px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 20;
      const interval = setInterval(() => {
        el.style.width = 100 + round * 10 + "px";
        round--;
        if (round < 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
      //done();
    },
    afterLeave(el) {
      console.log("after leave");
    },
    leaveCancelled(el) {
      console.log("leave cancelled");
    }
  },
  components: {
    appDangerAlert: _dangerAlert,
    appSuccessAlert: _successAlert
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
/* .fade-leave {
  opacity: 1;
} */
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
