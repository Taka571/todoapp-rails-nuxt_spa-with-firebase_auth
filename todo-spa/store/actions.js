import firebase from '@/plugins/firebase'

const actions = {
  login({
    commit,
  }, user) {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        commit('setFlash', {
          status: true,
          message: 'ログインしました'
        });
        setTimeout(() => {
          commit('setFlash', {});
        }, 2000);
        this.$router.push('/');
      })
      .catch(error => {
        console.log(error);
        this.error = (code => {
          switch (code) {
            case 'auth/user-not-found':
              return 'メールアドレスが間違っています';
            case 'auth/wrong-password':
              return '※パスワードが正しくありません';
            default:
              return '※メールアドレスとパスワードをご確認ください';
          }
        })(error.code);
      });
  },
  logOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setFlash", {
          status: true,
          message: "ログアウトしました"
        });
        setTimeout(() => {
          commit("setFlash",{});
        }, 2000);
        commit("setUser", null);
        this.$router.push("/login");
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default actions;
