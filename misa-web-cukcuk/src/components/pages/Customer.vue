<template>
  <div>
      <div class="page-title">
        <div class="page-left">Danh sách khách hàng</div>
        <div class="page-right">
          <button id="btnAdd" class="btn-default">Thêm khách hàng</button>
        </div>
      </div>
      <div class="toolbar">
        <input
          type="text"
          class="input-search"
          style="width: 220px"
          placeholder="Tìm kiếm theo mã, tên khách hàng"
        />
        <button class="btn-refresh"></button>
      </div>
      <div class="grid">
        <table id="tblListCustomer" class="table" width="100%" border="0">
          <thead>
            <tr>
              <th>Mã khách hàng</th>
              <th>Họ và tên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Nhóm khách hàng</th>
              <th>Điện thoại</th>
              <th>Email</th>
              <th class="text-align-right">Số tiền nợ</th>
              <th class="text-align-center">Đang hoạt động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KH0001</td>
              <td>Nguyễn Văn Mạnh</td>
              <td>Nam</td>
              <td>22/09/1999</td>
              <td>VIP</td>
              <td>0961179969</td>
              <td>manhnv229@gmail.com</td>
              <td class="text-align-right">1.025.000</td>
              <td class="text-align-center">
                <input type="checkbox" checked />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="paging">
        <div data-v-a72348a4="" class="paging-bar">
          <div data-v-a72348a4="" class="paging-record-info">
            Hiển thị <b data-v-a72348a4="">1-10/1000</b> nhân viên
          </div>
          <div data-v-a72348a4="" class="paging-option">
            <div
              data-v-a72348a4=""
              class="btn-select-page m-btn-firstpage"
            ></div>
            <div
              data-v-a72348a4=""
              class="btn-select-page m-btn-prev-page"
            ></div>
            <div data-v-a72348a4="" class="m-btn-list-page">
              <button
                data-v-a72348a4=""
                class="btn-pagenumber btn-pagenumber-selected"
              >
                1</button
              ><button data-v-a72348a4="" class="btn-pagenumber">2</button
              ><button data-v-a72348a4="" class="btn-pagenumber">3</button
              ><button data-v-a72348a4="" class="btn-pagenumber">4</button>
            </div>
            <div
              data-v-a72348a4=""
              class="btn-select-page m-btn-next-page"
            ></div>
            <div
              data-v-a72348a4=""
              class="btn-select-page m-btn-lastpage"
            ></div>
          </div>
          <div data-v-a72348a4="" class="paging-record-option">
            <b data-v-a72348a4="">10</b> nhân viên/trang
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
    .page-title {
    height: 40px;
    display: flex;
    align-items: center;
    }

        .page-title .page-right {
        position: absolute;
        right: 24px;
        }

        .page-title .page-left {
        font-size: 24px;
        font-weight: bold;
        }

    .toolbar {
    margin-top: 16px;
    display: flex;
    width: 100%;
    align-items: center;
    height: 42px;
    /* background-color: #ff0000; */
    }

    .grid {
    position: absolute;
    right: 24px;
    left: 24px;
    bottom: 60px;
    top: 128px;
    overflow-y: auto;
    }

    .paging {
    position: absolute;
    bottom: 0;
    height: 60px;
    left: 24px;
    right: 24px;
    }

    .m-col {
    width: 50%;
    float: left;
    padding: 0 4px;
    box-sizing: border-box;
    }

    .m-row {
    width: 100%;
    display: flex;
    margin-top: 8px;
    position: relative;
    }

    .m-row label {
    display: block;
    }

    .m-row input,
    select {
    margin-top: 4px;
    }

    .btn-default {
    display: inline-block;
    outline: none;
    border: none;
    padding-left: 24px;
    padding-right: 24px;
    height: 40px;
    line-height: 40px;
    background-color: #019160;
    border-radius: 4px;
    font-size: 13px;
    color: #ffffff;
    font-style: normal;
    cursor: pointer;
    text-align: center;
}

    .btn-default:hover {
        background-color: #2FBE8E;
    }

    .btn-default:active {
        background-color: #01B075;
    }

.btn-refresh {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 24px;
    border: 1px solid #bbbbbb;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    background-image: url('../../assets/icon/refresh.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}


table {
    border-collapse: collapse;
}

    table tr {
        border-bottom: 1px solid #bbb;
        height: 48px;
    }

    table thead th {
        text-align: left;
        position: sticky;
        top: 0;
        background-color: #fff;
        border-bottom: 1px solid #bbb;
        box-shadow: 0 1px 1px -1px #bbb;
    }

    table thead {
        border-bottom: 1px solid #bbb;
    }

th, td {
    padding-left: 10px;
    padding-right: 10px;
}

    th:first-child, th:last-child, td:first-child, td:last-child {
        padding-left: 16px;
    }

table tr {
    cursor: pointer;
}

    table tr:hover {
        background-color: #f0f0f0;
    }

.paging-bar {
    border-top: 1px solid #bbbbbb;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    z-index: 1 !important;
}

.btn-pagenumber.btn-pagenumber-selected, .btn-pagenumber-selected:hover {
    background-color: #019160;
    color: #ffffff;
}

.btn-pagenumber {
    width: 30px;
    height: 30px;
    margin: 4px 5px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: #e9ebee;
    cursor: pointer !important;
}

.paging-bar .paging-record-info {
    position: absolute;
    left: 16px;
}

.paging-bar .paging-record-option {
    position: absolute;
    right: 16px;
}

input[type=text], input[type=date] {
    height: 40px;
    width: 100%;
    border: 1px solid #bbbbbb;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
}

    input[type=text]:hover {
        border-color: #019160;
    }

input[type=text].input-search {
        background-image: url('../../assets/icon/search.png');
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: 16px;
        background-size: 20px;
        padding-left: 40px;
    }

</style>
