"use strict";

const hamburger = () => {
  const sideBar = document.querySelector(".__sidebar");

  return {
    open() {
      sideBar.classList.remove("hidden-md");
    },
    close() {
      sideBar.classList.add("hidden-md");
    },
  };
};

const subMenu = () => {
  return {
    tab: null,
    icon: false,

    selected(type) {
      if (this.tab === type) {
        this.icon = false;
        this.tab = false;
      } else {
        this.icon = true;
        this.tab = type;
      }
    },

    isSelected(type) {
      return type === this.tab;
    },
  };
};

const dropDown = () => {
  return {
    dropShow: false,

    activeDrop() {
      this.dropShow = !this.dropShow;
    },
    isActiveDrop() {
      return this.dropShow === true;
    },
  };
};

const exchangeTab = () => {
  return {
    exchangeType: "mezenne",

    selectedTab(type) {
      this.exchangeType = type;
    },

    isTabActive(type) {
      return type === this.exchangeType;
    },
  };
};
