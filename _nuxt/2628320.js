(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,6,7],{376:function(t,e,r){"use strict";r.r(e);r(270);var n={props:{width:{type:String,default:null},height:{type:Number,default:12},percentage:{type:Number,default:0},backgroundColor:{type:String,default:null},colorFill:{type:String,default:null}},computed:{progressBar:function(){return{width:this.width?this.width:null,height:this.height>=0?this.height+"px":"0","background-color":this.backgroundColor?this.backgroundColor:null}},progressFill:function(){return{width:this.percentage>=0&&this.percentage<=100?this.percentage+"%":"0%",height:this.height>=0?this.height+"px":"0","background-color":this.colorFill?this.colorFill:null}}}},l=r(50),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-bar",style:t.progressBar},[e("div",{staticClass:"progress-bar-fill",style:t.progressFill})])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(203).default)("42ce0836",content,!0,{sourceMap:!1})},378:function(t,e,r){"use strict";r.r(e);var n={props:{user:{type:Object,default:function(){return{}}},isLoading:{type:Boolean,default:!1}},data:function(){return{isEditName:!1}}},l=r(50),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar col-12 col-lg-4 pr-lg-5 mb-3 mb-md-4"},[e("p",{staticClass:"mb-4"},[t._v("Macaksara merupakan website permainan kuis untuk menguji kemampuan membaca Aksara Jawa.")]),t._v(" "),e("div",{staticClass:"user-progress"},[t._m(0),t._v(" "),e("div",{staticClass:"user-progress-info mb-md-4 mb-3"},[e("div",{staticClass:"row no-gutters align-items-center",attrs:{id:"word-collected"}},[e("div",{staticClass:"counter col-md-4 col-6 text-right"},[t.isLoading?e("span",{staticClass:"pr-3"},[t._v("0")]):e("span",{staticClass:"pr-3"},[t._v(t._s(t.user.learnedWords))])]),t._v(" "),e("div",{staticClass:"col-md-8 col-6"},[t._v("kata dibaca")])]),t._v(" "),e("div",{staticClass:"row no-gutters align-items-center",attrs:{id:"max-streak"}},[e("div",{staticClass:"counter col-4 text-right"},[t.isLoading?e("span",{staticClass:"pr-3"},[t._v("0")]):e("span",{staticClass:"pr-3"},[t._v(t._s(t.user.maxStreak))])]),t._v(" "),e("div",{staticClass:"col-8"},[t._v("streak tertinggi")])])]),t._v(" "),e("button",{staticClass:"reset-button pushable w-100 mb-3 mb-md-4",on:{click:function(e){return t.$bvModal.show("reset-progress-modal")}}},[e("span",{staticClass:"front"},[t._v("\n                Atur Ulang Permainan\n            ")])]),t._v(" "),e("p",{staticClass:"small"},[t._v("*Data permainan tersimpan secara otomatis pada perangkat yang digunakan.")])]),t._v(" "),e("b-modal",{attrs:{id:"reset-progress-modal","body-class":"text-center",centered:"","hide-header":""},on:{ok:function(e){return t.$emit("reset-game")}},scopedSlots:t._u([{key:"modal-footer",fn:function(r){var n=r.cancel,l=r.ok;return[e("div",{staticClass:"row w-100 no-gutters"},[e("div",{staticClass:"col-12 col-md-6 pr-0 pr-md-1 mb-2 mb-md-0"},[e("button",{staticClass:"btn btn-primary text-white rounded-pill w-100",on:{click:n}},[t._v("Batalkan")])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 pl-0 pl-md-1"},[e("button",{staticClass:"btn btn-danger text-white rounded-pill w-100",on:{click:l}},[t._v("Atur Ulang")])])])]}}])},[t._v("\n        Apakah kamu yakin untuk mengatur ulang permainan dan kehilangan semua perkembangan permainan?\n    \n        ")])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"user-progress-header"},[t("h2",{staticClass:"h4"},[this._v("Perkembangan Permainan :")])])}],!1,null,null,null);e.default=component.exports},379:function(t,e,r){"use strict";r.r(e);r(270);var n={props:{slug:{type:String,default:""},title:{type:String,default:"Nama Kuis"},titleTranslation:{type:String,default:"Terjemahan Nama Kuis"},icon:{type:String,default:""},questionTotal:{type:Number,default:0},currentLevel:{type:Number,default:0},maxLevel:{type:Number,default:0},isCompleted:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:{progressBarValue:function(){return this.isCompleted?100:(this.currentLevel-1)/this.maxLevel*100}}},l=r(50),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{attrs:{to:"/kuis/"+t.slug,custom:""},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.navigate;return[e("div",{staticClass:"quiz-card px-4 py-4",class:{"is-loading":t.isLoading},on:{click:n}},[e("div",{staticClass:"quiz-card-header"},[e("div",{staticClass:"quiz-card-header-title-and-status"},[e("h3",{staticClass:"quiz-card-header-title mb-0"},[t.isLoading?t._e():e("span",[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"quiz-card-title-translation"},[t.isLoading?t._e():e("span",[t._v(t._s(t.titleTranslation))])])]),t._v(" "),e("div",{staticClass:"quiz-card-icon"},[e("i",{staticClass:"fa fa-solid",class:t.icon})])]),t._v(" "),e("div",{staticClass:"quiz-card-content"},[e("div",{staticClass:"quiz-card-status mb-1"},[t.isCompleted||t.isLoading?t._e():e("span",[t._v("Level "+t._s(t.currentLevel)+" / "+t._s(t.maxLevel))]),t._v(" "),t.isCompleted&&!t.isLoading?e("span",[t._v("Terselesaikan")]):t._e()]),t._v(" "),e("div",{staticClass:"quiz-card-progress-bar"},[e("ProgressBar",{attrs:{height:8,percentage:t.progressBarValue}}),t._v(" "),e("div",{staticClass:"play-icon"},[e("i",{staticClass:"fa fa-solid fa-play"})])],1)])])]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:r(376).default})},383:function(t,e,r){"use strict";r(377)},384:function(t,e,r){var n=r(202)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},389:function(t,e,r){"use strict";r.r(e);var n=r(26),l=(r(80),r(91),{data:function(){return{user:void 0,isLoading:!0,quizzes:[],quizCards:{}}},head:function(){var title="Macaksara — Permainan Kuis Membaca Aksara Jawa",t="https://adityarahmanda.github.io/macaksara";return{title:title,meta:[{name:"robots",content:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"},{hid:"title",name:"title",content:title},{property:"og:title",content:title},{property:"og:url",content:t},{name:"twitter:title",content:title},{name:"twitter:url",content:t}],link:[{rel:"canonical",href:t}]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get(t.$router.options.base+"quizzes.json");case 3:t.quizzes=e.sent,t.verifyUser(),t.initQuizCards(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},methods:{createNewUser:function(){this.user={learnedWords:0,maxStreak:0,quizProgresses:{}};for(var i=0;i<this.quizzes.length;i++){var t=this.quizzes[i].slug;this.user.quizProgresses[t]={currentLevel:1,isCompleted:!1}}localStorage.setItem("userData",JSON.stringify(this.user))},verifyUser:function(){if(this.user=JSON.parse(localStorage.getItem("userData")),this.user){var t=Object.keys(this.user.quizProgresses),e=!1;if(void 0!==this.user.learnedWords&&null!==this.user.learnedWords||(this.user.learnedWords=0,e=!0),void 0!==this.user.maxStreak&&null!==this.user.maxStreak||(this.user.maxStreak=0,e=!0),t.length===this.quizzes.length)for(var i=0;i<this.quizzes.length;i++)t[i]===this.quizzes[i].slug&&"undefined"!==t[i]||(this.user.quizProgresses[t[i]]={currentLevel:1,isCompleted:!1},e=!0);else{this.user.quizProgresses={};for(var r=0;r<this.quizzes.length;r++){var n=this.quizzes[r].slug;this.user.quizProgresses[n]={currentLevel:1,isCompleted:!1}}this.createNewUser()}e&&localStorage.setItem("userData",JSON.stringify(this.user))}else this.createNewUser()},initQuizCards:function(){for(var i=0;i<this.quizzes.length;i++){var t=this.quizzes[i].slug,title=this.quizzes[i].title,e=this.quizzes[i].titleTranslation,r=this.quizzes[i].icon,n=this.user.quizProgresses[t].currentLevel,l=this.quizzes[i].levels.length,o=this.user.quizProgresses[t].isCompleted,c=0;if(!o){var d=Object.keys(this.quizzes[i].levels);for(var h in d)if(this.quizzes[i].levels[h].value===n){c=this.quizzes[i].levels[h].questions.length;break}}this.quizCards[i]={slug:t,title:title,titleTranslation:e,icon:r,currentLevel:n,maxLevel:l,questionTotal:c,isCompleted:o}}},resetGame:function(){this.isLoading=!0,this.createNewUser(),this.initQuizCards(),this.isLoading=!1}}}),o=(r(383),r(50)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("Sidebar",{attrs:{user:t.user,"is-loading":t.isLoading},on:{"reset-game":t.resetGame}}),t._v(" "),e("main",{staticClass:"col-12 col-lg-8"},[t._m(0),t._v(" "),t.isLoading?e("div",{staticClass:"row no-gutters"},t._l(5,(function(t){return e("div",{key:t,staticClass:"col-12 col-md-6 mb-3",class:t%2==0?"pl-md-2":"pr-md-2"},[e("QuizCard",{attrs:{"is-loading":""}})],1)})),0):e("div",{staticClass:"row no-gutters"},t._l(t.quizCards,(function(t,i){return e("div",{key:t.id,staticClass:"col-12 col-md-6 mb-3",class:i%2==0?"pr-md-2":"pl-md-2"},[e("QuizCard",{attrs:{title:t.title,"title-translation":t.titleTranslation,slug:t.slug,icon:t.icon,"question-total":t.questionTotal,"current-level":t.currentLevel,"max-level":t.maxLevel,"is-completed":t.isCompleted}})],1)})),0)])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-3 mb-md-4"},[t("h2",[this._v("Pilih Kuis")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Sidebar:r(378).default,QuizCard:r(379).default})}}]);