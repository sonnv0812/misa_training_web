$(document).ready(function () {
    setEvent();
    loadData(1);
})

var action = 1; // 1-add, 2-edit
var customerId;

function setEvent() {
    // Gán sự kiện cho button Add:
    $("#btnAdd").click(function () {
        // Hiển thị form thêm mới:
        $('#dlgCustomerDetail input').val(null);
        $('#dlgCustomerDetail select').val(null);
        $('#dlgCustomerDetail').removeClass('dialog-hide');
        action = 1;

    })

    $('.dialog-close-button').click(function () {
        $('#dlgCustomerDetail').addClass('dialog-hide');
    })

    $('.dialog-close-notify').click(function () {
        $('#dlgNotify').addClass('dialog-hide');
    })

    $(document).on('dblclick', '#tblListCustomer tbody tr', function () {
        action = 2;
        $('#dlgCustomerDetail').removeClass('dialog-hide');
        var recordId = $(this).data('recordId');
        customerId = recordId;
        $.ajax({
            method: "GET",
            url: `http://api.manhnv.net/api/customers/${recordId}`,
            async: false,
        }).done(function (response) {
            var customer = response;
            console.log(customer);
            var dateOfBirth = new Date(customer.DateOfBirth);
            $("#txtCustomerCode").val(customer.CustomerCode);
            $("#txtFullName").val(customer.FullName);
            $("#dtDateOfBirth").val(dateOfBirth);
            $("#txtPhoneNumber").val(customer.PhoneNumber);
            $("#txtEmail").val(customer.Email);
            $("#cbGender").val(customer.Gender);
            $("#cbCustomerGroup").val(customer.CustomerGroupId);
        }).fail(function (response) {
            console.log(response);
        })
        // binding dữ liệu thông tin khách hàng:
    });

    $(document).on('click', '#btnSave', function () {
        // Thu thập các thông tin của khách hàng đã nhập liệu:
        var customer = {
            "CustomerId": customerId,
            "CustomerCode": $('#txtCustomerCode').val(),
            "FullName": $('#txtFullName').val(),
            "CustomerGroupId": $('#cbCustomerGroup').val(),
            "Gender": $('#cbGender').val(),
            "Email": $('#txtEmail').val(),
            "PhoneNumber": $('#txtPhoneNumber').val(),
            "DateOfBirth": $('#dtDateOfBirth').val()
        }
        console.log(customer);
        var method = "POST";
        var url = "http://api.manhnv.net/api/customers/";
        if (action === 2) {
            method = "PUT";
            url = url + customerId;
        }
        // Gọi service để lưu lại:
        $.ajax({
            method: method,
            url: url,
            data: JSON.stringify(customer),
            async: false,
            contentType: "application/json"
        }).done(function (response) {
            doneApi();
        }).fail(function (response) {
            alert('Không thực hiện được!');
        })
    });

    $(document).on('click', '#btnDelete', function () {
        $('#dlgNotify').removeClass('dialog-hide');
    });

    $('#btnCancel').click(function () {
        $('#dlgNotify').addClass('dialog-hide');
    })

    $('#btnNo').click(function () {
        $('#dlgNotify').addClass('dialog-hide');
    })

    $('#btnYes').click(function () {
        $.ajax({
            method: "DELETE",
            url: "http://api.manhnv.net/api/customers/" + customerId,
            contentType: "application/json"
        }).done(function (response) {
            alert("Xoá thành công");
            $('#dlgNotify').addClass('dialog-hide');
            $('#dlgCustomerDetail').addClass('dialog-hide');
            loadData();
        }).fail(function (response) {
            alert("Xoá thất bại");
        })
    });
}

function doneApi() {
    if (action === 1) {
        alert('Thêm thành công');
    } else {
        alert('Sửa thành công');
    }
    loadData();
    $('#dlgCustomerDetail').addClass('dialog-hide');
    
}

/**
 * Load dữ liệu khách hàng
 * */
function loadData() {
    $('#tblListCustomer tbody').empty();
    // lấy dữ liệu từ Api về;
    var data = getData();
    console.table(data);
    buildDataTableHTML(data);
}

/**
 * Hàm thực hiện lấy dữ liệu
 * */
function getData() {
    var customers = null;
    $.ajax({
        method: "GET",
        url: "http://api.manhnv.net/api/customers",
        data: null,
        async: false,
        contentType: "application/json"
    }).done(function (response) {
        customers = response;
    }).fail(function (response) {
        alert("Không thể lấy dữ liệu từ Api");
    })
    return customers;
}

/**
 * Thực hiện build bảng dữ liệu tương ứng với dữ liệu lấy từ Api
 * @param {Array} data mảng dữ liệu
 * CreatedBy: NVMANH (17/03/2021)
 */
function buildDataTableHTML(data) {
    //$('table#tblListCustomer tbody').html('');
    $.each(data, function (index, customer) {
        var dateOfBirth = customer.DateOfBirth;
        var dateFormat = formatDateDDMMYYYY(dateOfBirth);
        // Xử lý dữ liệu ngày tháng (Hiển thị dạng ngày/tháng/năm - nếu có):
        var debitAmout = Math.floor(Math.random() * 100000000);
        var moneyFormat = formatMoney(debitAmout);
        var trHTML = $(`<tr>
                        <td>${customer.CustomerCode}</td>
                        <td>${customer.FullName}</td>
                        <td>${customer.GenderName}</td>
                        <td>${dateFormat}</td>
                        <td>${customer.CustomerGroupName}</td>
                        <td>${customer.PhoneNumber}</td>
                        <td>${customer.Email}</td>
                        <td class="text-align-right">${moneyFormat}</td>
                        <td class="text-align-center"><input type="checkbox" checked/></td>
                    </tr>`);
        trHTML.data('recordId', customer.CustomerId);
        $('table#tblListCustomer tbody').append(trHTML);
    })
}


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
