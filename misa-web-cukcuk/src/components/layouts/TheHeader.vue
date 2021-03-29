<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="header-content-text">Nhà hàng Biển Đông</div>
        <div class="header-content-icon"></div>
      </div>
      <div class="header-user">
        <div class="header-user-avatar"></div>
        <div class="header-username">Nguyễn Văn Sơn</div>
        <div class="header-user-option"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: absolute;
  left: 200px;
  top: 0;
  height: 60px;
  display: flex;
  right: 0;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #bbbbbb;
}

.header .header-content {
  align-items: center;
  font-family: GoogleSans-Bold;
  margin-left: 16px;
  cursor: pointer;
  display: flex;
}

.header .header-content .header-content-icon {
  height: 12px;
  width: 12px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("../../assets/icon/dropdown-icon.png");
  flex-shrink: 0;
}

.header .header-user {
  align-items: center;
  display: flex;
  right: 0;
  cursor: pointer;
}

.header .header-user .header-user-option {
  width: 24px;
  height: 24px;
  margin-right: 16px;
  flex-shrink: 0;
  background-image: url("../../assets/icon/option.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.header .header-user .header-username {
  margin-right: 16px;
  font-family: GoogleSans-Bold;
}

.header .header-user .header-user-avatar {
  width: 24px;
  height: 24px;
  margin-right: 16px;
  background-image: url("../../assets/icon/avatar-default.png");
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@font-face {
  font-family: "GoogleSans-Bold";
  src: url("../../assets/font/GoogleSans-Bold.otf") format("opentype");
}
</style>
