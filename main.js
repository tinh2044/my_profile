$(document).ready(function () {
  // Handle Active Nav Item
  const mainItem = Array.from($("section"));
  function ActiveNavItem() {
    document.addEventListener("scroll", handleScroll);
    const navItem = $(".sidebar__nav-item-link");
    navItem.click(function () {
      navItem.removeClass("active");
      document.removeEventListener("scroll", handleScroll);
      this.classList.add("active");
      setTimeout(() => {
        document.addEventListener("scroll", handleScroll);
      }, 2000);
    });
  }
  // Handle Scroll
  function handleScroll() {
    scroll = document.documentElement.scrollTop + 20;

    for (item of mainItem) {
      var positionOfItem = item.offsetTop;
      var topAddHeightOfItem = item.offsetTop + item.offsetHeight;
      if ((scroll > positionOfItem) & (scroll < topAddHeightOfItem)) {
        id = item.id;
        $(".sidebar__nav-item-link").removeClass("active");
        $(`a[href="#${id}`).addClass("active");
        break;
      }
    }
  }
  // Handle mouseover in disabled icon
  function HandleTooltips() {
    const icon = $(".skills__icons .disabled");
    icon.mouseover(function () {
      this.innerHTML = '<span class="tooltip">Coming soon</span>';
    });
    icon.mouseout(function () {
      $(".tooltip").remove();
    });
  }
  // Handle Toast
  function handleToast() {
    const toast = $(".toast");
    setTimeout(() => {
      toast.addClass("active");
    }, 100);
    toast.click(function () {
      toast.removeClass("active");
    });
    setTimeout(() => {
      toast.removeClass("active");
    }, 3000);
  }

  // Handle SideBar On TB-MB
  function handleSideBar() {
    const sidebar = $(".sidebar-on-pc");
    const overlay = $(".overlay");
    $(".open-icon").click(function () {
      sidebar.toggleClass("active");
      overlay.toggleClass("active");
      $(".close-icon").css("display", "block");
    });
    $(".close-icon").click(function () {
      sidebar.removeClass("active");
      overlay.removeClass("active");
      this.style.display = "none";
    });
    overlay.click(function () {
      sidebar.removeClass("active");
      overlay.removeClass("active");
      this.style.display = "none";
    });
  }

  const themeColor = [
    {
      id: 1,
      bgc: "#38ada9",
      borderColor: "#88CECB",
    },
    {
      id: 2,
      bgc: "#F04C40",
      borderColor: "#e7b5b1",
    },
    {
      id: 3,
      bgc: "#F99E3D",
      borderColor: "#f5cc9f",
    },
    {
      id: 4,
      bgc: "#6F429A",
      borderColor: "#ae98c3",
    },
    {
      id: 5,
      bgc: "#3F59A8",
      borderColor: "#9da9cb",
    },
  ];

  function changeColor() {
    var index = JSON.parse(localStorage.getItem("THEME")) || 1;
    color = themeColor[index];
    document.documentElement.style.setProperty("--pr-cl", color.bgc);
    document.documentElement.style.setProperty(
      "--border-cl",
      color.borderColor
    );
    btnColor = $(".sidebar__option-item");
    // Handle options Color

    $(".sidebar__change-color-icon").click(function (event) {
      event.stopPropagation();
      this.classList.toggle("active");
    });
    $(".sidebar__option-list").click(function (event) {
      event.stopPropagation();
    });
    document.onclick = function () {
      $(".sidebar__change-color-icon").removeClass("active");
    };

    btnColor.click(function () {
      btnColor.removeClass("active");
      this.classList.add("active");
      type = this.dataset.type;
      jsontype = JSON.stringify(type);
      localStorage.setItem("THEME", jsontype);
      var color = themeColor[type];
      document.documentElement.style.setProperty("--pr-cl", color.bgc);
      document.documentElement.style.setProperty(
        "--border-cl",
        color.borderColor
      );
    });
  }

  function start() {
    handleToast();
    handleSideBar();
    changeColor();
    ActiveNavItem();
    HandleTooltips();
  }

  start();
});
