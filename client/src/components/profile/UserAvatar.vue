<template>
    <div class="user-info">
        <div class="avatar"></div>
        <div class="user-info-text">
            <div class="username">{{ user.firstName ? (user.firstName + ' ' + user.lastName) : '-'}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user-avatar',
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
            },
        }
    },
    created() {
        const userData = localStorage.getItem('user');
        if (userData) {
            this.user = JSON.parse(userData);
            console.log(this.user);
        }
    },
}
</script>

<style scoped>
.user-info {
    margin-left: -20px;
    display: flex;
}

.avatar {
    width: 5.5vw;
    height: 5.5vw;

    margin-top: -2.75vw;
    margin-left: 2.2vw;

    border: 1px #ffffff7c solid;
    border-radius: 50%;

    background: #555555 center no-repeat;
    background-size: cover;
    transition: background .3s linear;
}

.avatar:hover {
    background-color: rgba(0, 0, 0, 1);
    transition: background .3s linear;
}

.user-info-text {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 10px;
}
</style>