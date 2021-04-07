/**
 * Xử lý khi truyền ngày tháng vào sẽ trả về chuỗi string có dạng ngày/tháng/năm
 * @param {Date} date mảng dữ liệu
 * CreatedBy: NVMANH (17/03/2021)
 */
 function formatDateDDMMYYYY(date) {
    if (!date) {
        return "";
    }
    var newDate = new Date(date);
    var dateString = newDate.getDate();
    var monthString = newDate.getMonth() + 1;
    var year = newDate.getFullYear();
    return `${dateString}/${monthString}/${year}`;
}


/**
 * Xử lý hiển thị tiền tệ - cách 1
 * @param {Number} money Số tiền dạng decimal
 * CreatedBy: NVMANH (17/03/2021)
 */
function formatMoney(money) {
    var moneyFormat = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " VND";;
    return moneyFormat;
}

/**
 * Xử lý hiển thị tiền tệ - cách 2
 * @param {Number} money Số tiền dạng decimal
 * CreatedBy: NVMANH (17/03/2021)
 */
function formatMoney(money) {
    const formatter = new Intl.NumberFormat('vi-VN', {
        minimumFractionDigits: 0
    })
    if (money) {
        return formatter.format(money) // "$1,000.00"
    }
    return "";
}

export default formatDateDDMMYYYY
export default formatMoney
