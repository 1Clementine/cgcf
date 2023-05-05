const title = 'Lipo卡牌游戏社区'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`//小页面也可以跟着显示
    }
    return `${title}`
}
