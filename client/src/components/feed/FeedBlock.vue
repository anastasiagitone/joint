<template>
    <div class="feed-block">
        <div class="feed-preview"></div>
        <div class="feed-block-inner">
            <div class="feed-info">
                <div class="feed-title">Суперинтересное мегавидео</div>
                <div class="feed-description">Персонал компании состоит всего из двух человек: отца и сына, которые
                    захотели посвятить свое свободное время созданию чего-то нового и интересного.</div>
            </div>
            <div class="feed-stats">
                <div class="feed-stats-container">
                    <content-stats-button icon-name="eye">1.4k</content-stats-button>
                    <content-stats-button icon-name="heart">15k</content-stats-button>
                    <content-stats-button icon-name="comment">234</content-stats-button>
                    <content-stats-button icon-name="share">93</content-stats-button>
                </div>
                <div class="feed-stats-container right">
                    <content-stats-button icon-name="plus">Бесплатно</content-stats-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'feed-block',
}
</script>

<style scoped>
.feed-block {
    display: flex;
    width: 100%;
    height: 13.5vw;
    margin-bottom: 20px;
}

.feed-preview {
    flex: 0 0 24vw;
    margin-right: 10px;
    border: 1px #ffffff7c solid;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
}

.feed-block-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.feed-info {
    position: relative;
    flex: 1;
    height: calc(100% - 45px);
    margin-bottom: 10px;
    padding: 15px 20px;
    border: 1px #ffffff7c solid;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
}

.feed-title {
    color: #ffbf6c;
    font-size: 22px;
    margin-bottom: 10px;
}

.feed-description {
    text-align: justify;
    font-size: 15px;
}

.feed-stats {
    display: flex;
    justify-content: space-between;
}

.feed-stats-container {
    display: flex;
}

.feed-stats-container * {
    margin-right: 10px;
}

.feed-stats-container.right * {
    margin-right: 0;
}
</style>