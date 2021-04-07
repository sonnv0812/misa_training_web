<template>
  <div>
      <div class="page-title">
        <div class="page-left">Danh sách nhân viên</div>
        <div class="page-right">
          <button id="btnDel" class="btn-default" @click="btnDeleteOnClick()">Xoá nhân viên</button>
          <button id="btnAdd" class="btn-default" @click="btnAddOnClick()">Thêm nhân viên</button>
        </div>
      </div>
      <div class="toolbar">
        <input
          type="text"
          class="input-search"
          style="width: 220px"
          placeholder="Tìm kiếm theo mã, tên nhân viên" />
        <button class="btn-refresh"></button>
      </div>
      <div class="grid">
        <table id="tblListCustomer" class="table" width="100%" border="0">
          <thead>
            <tr>
              <th>Mã nhân viên</th>
              <th>Họ và tên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>            
              <th>Điện thoại</th>
              <th>Email</th>  
              <th>Chức vụ</th>  
              <th>Phòng ban</th>
              <th>Mức lương cơ bản</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.EmployeeId" tabindex="0" @click="trOnClick(employee.EmployeeId)" @dblclick="trOnDbClick(employee.EmployeeId)">
              <td>{{ employee.EmployeeCode }}</td>
              <td>{{ employee.FullName }}</td>
              <td>{{ employee.GenderName }}</td>
              <td>{{ employee.DateOfBirth | formatDate }}</td>          
              <td>{{ employee.PhoneNumber }}</td>
              <td>{{ employee.Email }}</td>
              <td>{{ employee.PositionName }}</td>
              <td>{{ employee.DepartmentName }}</td>
              <td>{{ employee.Salary }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="paging">
        <div class="paging-bar">
          <div class="paging-record-info">
            Hiển thị <b>1-10/1000</b> nhân viên
          </div>
          <div class="paging-option">
            <div class="btn-select-page m-btn-firstpage"></div>
            <div class="btn-select-page m-btn-prev-page"></div>
            <div class="m-btn-list-page">
              <button class="btn-pagenumber btn-pagenumber-selected">1</button>
                <button class="btn-pagenumber">2</button>
                <button class="btn-pagenumber">3</button>
                <button class="btn-pagenumber">4</button>
            </div>
            <div class="btn-select-page m-btn-next-page"></div>
            <div class="btn-select-page m-btn-lastpage"></div>
          </div>
          <div class="paging-record-option">
            <b>10</b> nhân viên/trang
          </div>
        </div>
      </div>

      <EmployeeDetail
        :isHide="isHideDialogDetail"
        :employee="selectedEmployee"
        :formMode="dialogFormMode"
        @hideDialog="hideDialog" />

      <EmployeeNotifyDelete
        :isHide="isHideDialogNotify"
        :employee="selectedEmployeeDel"
        @hideNotify="hideNotify" />

  </div>
</template>

<script>
import axios from 'axios'
import EmployeeDetail from './EmployeeDetail.vue'
import EmployeeNotifyDelete from './EmployeeNotifyDelete'

export default {
  components: {
    EmployeeDetail,
    EmployeeNotifyDelete
  },
  props: [],
  created(){
    axios
      .get("http://api.manhnv.net/v1/employees")
      .then((response) => {
        this.employees = response.data;
      });
  },
  methods: {

    //
    loadData() {
      axios.get("http://api.manhnv.net/v1/employees").then((response) => {
        this.employees = response.data;
      });
    },

    //unhide dialog
    btnAddOnClick() {
      this.selectedEmployee = {};
      this.isHideDialogDetail = false;
      console.log("Clicked");
      this.dialogFormMode = "add";
    },

    //hide dialog
    hideDialog() {
      this.isHideDialogDetail = true;
      this.loadData();
    },

    hideNotify() {
      this.isHideDialogNotify = true;
      this.loadData();
    },

    btnDeleteOnClick() {
      this.selectedEmployee = {};
      this.isHideDialogNotify = false;
    },

    trOnClick(employeeId) {
      axios
        .get("http://api.manhnv.net/v1/employees/" + employeeId)
        .then((response) => {
          this.selectedEmployeeDel = response.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },

    //tr on db click
    trOnDbClick(employeeId) {
      axios
        .get("http://api.manhnv.net/v1/employees/" + employeeId)
        .then((response) => {
          this.selectedEmployee = response.data;
        })
        .catch((response) => {
          console.log(response);
        });

      this.dialogFormMode = "edit";

      this.isHideDialogDetail = false;
    },
  },
  data() {
    return {
      dialogFormMode: "add",
      isHideDialogDetail: true,
      selectedEmployee: {},
      employees: [],
    }
  },
}
</script>

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
    z-index: 0;
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

  #content .paging-bar {
    height: 56px;
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

    .paging-bar .paging-record-info {
      position: absolute;
      left: 16px;
    }

    .paging-bar .paging-record-option {
      position: absolute;
      right: 16px;
    } 

  .btn-pagenumber.btn-pagenumber-selected, .btn-pagenumber-selected:hover {
      background-color: #019160;
      color: #ffffff;
  }

  .btn-pagenumber {
      width: 30px;
      height: 30px;
      margin: 0 4px;
      border: 1px solid #ccc;
      border-radius: 50%;
      background-color: #e9ebee;
      cursor: pointer !important;
  }

#btnDel {
  margin-right: 20px;
}
</style>
