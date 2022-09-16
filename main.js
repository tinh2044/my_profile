$(document).ready(function() {
      
    // Handle Active Nav Item 
    $('.sidebar__nav-item-link').click(function() {
        $('.sidebar__nav-item-link').removeClass('active');
        this.classList.add('active');

    })
    // Handle When Scroll
    function ActiveNavItem() {
        const mainItem = Array.from($('section'))
        document.onscroll = () => {
            scroll =    document.documentElement.scrollTop +20

            for ( item of mainItem) {
                    var positionOfItem = item.offsetTop
                    var topAddHeightOfItem =  item.offsetTop + item.offsetHeight
                if (scroll > positionOfItem &scroll < topAddHeightOfItem) {
                    id = item.id
                    $('.sidebar__nav-item-link').removeClass('active')
                    $(`a[href="#${id}`).addClass('active')
                    break 
                }
                
            }
        }
    }
    // Handle Toast
    function handleToast() {
        const toast = $('.toast');
        setTimeout(() => {
            toast.addClass('active')
        },100)
        toast.click(function() {
            toast.removeClass('active');
        })
        setTimeout(() => {
            toast.removeClass('active')
        },3000)
    }
    
    // Handle SideBar On TB-MB
    function handleSideBar() {
        $('.open-icon').click(function() {
            $('.sidebar-on-pc').toggleClass('active');
            $('.overlay').toggleClass('active');

        })
        $('.close-icon').click(function() {
            $('.sidebar-on-pc').removeClass('active');
            $('.overlay').removeClass('active');

        })
        
    }
    
    const themeColor = [
        {
            id:1,
            bgc: '#38ada9',
            borderColor:'#88CECB'
        },
        {
            id:2,
            bgc: '#F04C40',
            borderColor:'#e7b5b1'
        },
        {
            id:3,
            bgc: '#F99E3D',
            borderColor:'#f5cc9f'
        },
        {
            id:4,
            bgc: '#6F429A',
            borderColor:'#ae98c3'
        },
        {
            id:5,
            bgc: '#3F59A8',
            borderColor:'#9da9cb'
        }
    ]
    
    function changeColor() {
        var index = JSON.parse(localStorage.getItem('THEME')) || 1
        color = themeColor[index]
        document.documentElement.style.setProperty('--pr-cl', color.bgc)
        document.documentElement.style.setProperty('--border-cl', color.borderColor)
        btnColor = $('.sidebar__option-item')
        // Handle options Color

        $('.sidebar__change-color-icon').click(function(event) {
            event.stopPropagation()
            this.classList.toggle('active')
        })
        $('.sidebar__option-list').click(function(event) {
            event.stopPropagation()
        })
        document.onclick =function() {
            $('.sidebar__change-color-icon').removeClass('active')
        }

        
        btnColor.click(function() {
            btnColor.removeClass('active')
            this.classList.add('active')
            type = this.dataset.type
            jsontype = JSON.stringify(type)
            localStorage.setItem('THEME',jsontype)
            var color = themeColor[type]
            document.documentElement.style.setProperty('--pr-cl', color.bgc)
            document.documentElement.style.setProperty('--border-cl', color.borderColor)

        })
    }


    function start() {
        handleToast()
        handleSideBar()
        changeColor()
        ActiveNavItem()

        

    }
    
    start()
    
})