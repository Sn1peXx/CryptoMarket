import {getDatabase, onValue, ref, remove, set, update} from "firebase/database";

export const DataBase = {

    getOrderHistory() {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        const starCountRef = ref(db, 'OrderHistory/' + userId);
        onValue(starCountRef, (snapshot) => {
            try {
                window.order = Object.values(snapshot.val());
            } catch (e) {
            }
        });
    },

    getBalance() {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        const starCountRef2 = ref(db, 'Balance/' + userId);
        onValue(starCountRef2, (snapshot) => {
            try {
                let res = Object.values(snapshot.val())
                window.balance = res[0];
            } catch (e) {
            }

        });
    },

    getNewDeal() {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        const starCountRef3 = ref(db, 'NewDeal/' + userId);
        onValue(starCountRef3, (snapshot) => {
            try {
                window.deal = Object.values(snapshot.val());
            } catch (e) {
            }
        });
    },

    setOrderHistory(id, coin, orderValue, dealVolume, dealDate) {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        set(ref(db, 'OrderHistory/' + userId + `/${id}`), {
            id,
            coin,
            orderValue,
            dealVolume,
            dealDate
        }).catch(() => {
            alert('Ошибка')
        })
    },

    setNewDeal(id, coin, dealVolume) {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        set(ref(db, 'NewDeal/' + userId + `/${id}`), {
            id,
            coin,
            dealVolume
        }).catch(() => {
            alert('Ошибка')
        })
    },

    updateBalance(newBalance) {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        update(ref(db, 'Balance/' + userId), {
            balance: newBalance
        })
    },

    closeDeal(id) {
        const db = getDatabase();
        const userId = JSON.parse(localStorage.getItem("user"))[2];

        remove(ref(db, 'NewDeal/' + userId + `/${id}`))
    }
}