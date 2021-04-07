<template>
    <div>
        <div id="dlgNotify" class="dialog" :class="{'dialog-hide':isHide}">
            <div class="model"></div>
            <div class="notify">
                <div class="dialog-header">
                    <div class="dialog-title">Bạn có chắc là muốn xoá chứ?</div>
                    <div class="dialog-close-notify" @click="btnCloseOnClick">&#x2715;</div>
                </div>
                <div class="dialog-footer">
                    <button id="btnYes" class="btn-default" @click="btnYesOnClick">Có</button>
                    <button id="btnNo" class="btn-default" @click="btnNoOnClick">Không</button>
                    <button id="btnCancel" class="btn-default" @click="btnCancelOnClick">Huỷ</button>
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
        employee: { type: Object, default: null }
    },
    methods: {
        btnCloseOnClick() {
            this.$emit('hideNotify');
            console.log("Clicked");
        },

        btnNoOnClick() {
            this.$emit('hideNotify')
        },

        btnCancelOnClick() {
            this.$emit('hideNotify')
        },
        
        btnYesOnClick() {
            console.log("clicked");
            axios
                .delete("http://api.manhnv.net/v1/employees/" + this.employee.EmployeeId, this.employee)
                .then((response) => {
                    alert("Xoá thành công");
                    console.log(response);
                    this.$emit('hideNotify');
                })
                .catch((response) => {
                        console.log(response);
                });
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
