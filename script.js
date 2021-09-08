//エラーチェック
'use strict';

const app = {
    el: '#app',
    data (){
      return  {
        info: null,
        loading: false
      }
    },
    methods: {
      btn (){
        document.body.className = 'after';  // クラス変更 ⇒ body.afterへ
        this.loading = true
        axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.info = response
            console.log(response)
          })
          .catch(error => {
            console.log(error)
            // エラーメッセージ表示（SweetAlert2）
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              html: '考えられる原因：<br>サーバとの通信にエラーが発生しています。<br>しばらくしてからもう一度お試しください。',
              allowOutsideClick : false   // 枠外をクリックしても画面を閉じない
            })
          })
          .finally(() => this.loading = false)
      }
    }
}
Vue.createApp(app).mount('#app')
