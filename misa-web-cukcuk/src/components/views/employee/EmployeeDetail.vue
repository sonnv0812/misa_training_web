<template>
    <div>
    <div id="dlgCustomerDetail" class="dialog" :class="{'dialog-hide':isHide}">
        <div class="model"></div>
        <div class="dialog-content">
            <div class="dialog-header">
                <div class="dialog-title">THÔNG TIN NHÂN VIÊN</div>
                <div class="dialog-close-button" @click="btnCloseOnClick">&#x2715;</div>
            </div>
            <form class="dialog-body">
                <div class="dialog-img">
                    <div class="img-add"></div>
                    <div class="img-content">Vui lòng chọn ảnh có định dạng</div>
                    <div class="img-format"><b>.jpg, .jpeg, .png, .gif</b></div>
                </div>
                <div class="dialog-form">
                    <div>
                        <p>A. THÔNG TIN CHUNG:</p>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Mã nhân viên (<span style="color: red;">*</span>)</label>
                            <input class="input-form" id="txtEmployeeCode" type="text" v-model="employee.EmployeeCode" required/>
                        </div>
                        <div class="m-col">
                            <label for="fullname">Họ và tên (<span style="color: red;">*</span>)</label>
                            <input class="input-form" id="txtFullName" name="fullname" type="text" v-model="employee.FullName" required/>
                        </div>
                        </div>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Giới tính</label>
                            <select id="cbGender" v-model="employee.Gender">
                            <option value="1">Nam</option>
                            <option value="0">Nữ</option>
                            <option value="2">Không xác định</option>
                            </select>
                        </div>
                        <div class="m-col">
                            <label>Ngày sinh</label>
                            <input id="dtDateOfBirth" type="date" v-model="employee.DateOfBirth" />
                        </div>
                        </div>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Số CMTND/ Căn cước (<span style="color: red;">*</span>)</label>
                            <input class="input-form" id="txtIdentityNumber" type="text" v-model="employee.IdentityNumber" required/>
                        </div>
                        <div class="m-col">
                            <label>Ngày cấp</label>
                            <input id="dtIdentityDate" type="date" v-model="employee.IdentityDate" />
                        </div>
                        </div>
                        <div class="m-col">
                        <label>Nơi cấp</label>
                        <input id="txtIdentityPlace" type="text" v-model="employee.IdentityPlace" />
                        </div>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Số điện thoại (<span style="color: red;">*</span>)</label>
                            <input class="input-form" id="txtPhoneNumber" type="text" v-model="employee.PhoneNumber" required/>
                        </div>
                        <div class="m-col">
                            <label>Email (<span style="color: red;">*</span>)</label>
                            <input class="input-form" id="txtEmail" type="text" v-model="employee.Email" required/>
                        </div>
                        </div>
                    </div>
                    <div>
                        <p>B. THÔNG TIN CÔNG VIỆC:</p>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Vị trí</label>
                            <select id="cbPositionId" v-model="employee.PositionId">
                            <option value="3700cc49-55b5-69ea-4929-a2925c0f334d">Giám Đốc</option>
                            <option value="25c6c36e-1668-7d10-6e09-bf1378b8dc91">Thu Ngân</option>
                            <option value="148ed882-32b8-218e-9c20-39c2f00615e8">Nhân viên Marketing</option>
                            </select>
                        </div>
                        <div class="m-col">
                            <label>Phòng ban</label>
                            <select id="cbDepartmentId" v-model="employee.DepartmentId">
                            <option value="17120d02-6ab5-3e43-18cb-66948daf6128">Phòng Đào Tạo</option>
                            <option value="469b3ece-744a-45d5-957d-e8c757976496">Phòng Nhân Sự</option>
                            <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">Phòng Marketing</option>
                            <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">Phòng Công Nghệ</option>
                            </select>
                        </div>
                        </div>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Mã số thuế cá nhân</label>
                            <input id="txtPersonalTaxCode" type="text" v-model="employee.PersonalTaxCode" />
                        </div>
                        <div class="m-col">
                            <label>Mức lương cơ bản</label>
                            <input id="txtSalary" type="text" v-model="employee.Salary" />
                        </div>
                        </div>
                        <div class="m-row">
                        <div class="m-col">
                            <label>Ngày gia nhập công ty</label>
                            <input id="dtJoinDate" type="date" v-model="employee.JoinDate" />
                        </div>
                        <div class="m-col">
                            <label>Tình trạng công việc</label>
                            <select id="cbWorkStatus" v-model="employee.WorkStatus">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="dialog-footer">
                <button id="btnSave" class="btn-default" @click="btnSaveOnClick()">Lưu</button>
                <!-- <button id="btnDelete" class="btn-default button-hide">Xoá</button> -->
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        isHide: { type: Boolean, default: true },
        employee: { type: Object, default: null },
        formMode: { type: String, default: "add" }
    },
    methods: {
        // hide dialog
        btnCloseOnClick() {
            this.$emit('hideDialog', [])
        },
        //save end send data
        btnSaveOnClick() {
            console.log("clicked");
            if (this.formMode == "add") {
                axios
                    .post("http://api.manhnv.net/v1/employees", this.employee)
                    .then((response) => {
                        console.log(response);
                        this.$emit('hideDialog', []);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            } else {
                axios
                    .put("http://api.manhnv.net/v1/employees/" + this.employee.EmployeeId, this.employee)
                    .then((response) => {
                        console.log(response);
                        this.$emit('hideDialog', []);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            }
        }
    },
}
</script>

<style scope>
@import url('../../style/main.css');
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

    .m-row input, select {
        margin-top: 4px;
    }
</style>
