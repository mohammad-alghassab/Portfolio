/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.querySelectorAll('.resume-item.glass-card').forEach(card => {
    card.addEventListener('click', function() {
        // إذا كان الكارد المضغطوط عليه ليس هو النشط حالياً
        if (!this.classList.contains('active')) {
            // قم بإغلاق أي كارد نشط آخر
            document.querySelectorAll('.resume-item.active').forEach(activeCard => {
                activeCard.classList.remove('active');
            });
            // افتح الكارد الحالي
            this.classList.add('active');
        } else {
            // إذا كان الكارد مفتوحاً بالفعل، قم بإغلاقه عند الضغط مرة أخرى
            this.classList.remove('active');
        }
    });
});