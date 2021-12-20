export function getTodayDate() {
    const today = new Date(); // Mon Dec 20 2021 22:04:03 GMT+0900 (한국 표준시)

    const year = today.getFullYear(); // 2021
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // 12
    const day = ('0' + today.getDate()).slice(-2); // 20

    // 원하는 문자열 형태로 날짜 가공하기
    const dateString = year + month + day; // 20211220
    // const dateString = year + '.' + month + '.' + day; // 2021.12.20

    return dateString;
}