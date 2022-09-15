$(document).ready(function() {
    
    // Handle options Color
    $('.sidebar__change-color-icon').click(function() {
        this.classList.toggle('active');
    })   
    // Handle Active Nav Item 
    $('.sidebar__nav-item').click(function() {
        $('.sidebar__nav-item').removeClass('active');
        this.classList.add('active');

    })
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
        },4000)
    }
    handleToast()
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
    handleSideBar()

    


})