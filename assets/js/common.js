const common =
    {
        init: function () {
            this.events();
        },
        events: function () {
            portfolio.bindSkills();
            portfolio.bindItems();
            portfolio.bindGithubRepos();

            $('[data-toggle="tooltip"]').tooltip();

            $('#scrollToTop').on('click', function () {
                $(this).tooltip('hide');
                window.scrollTo({
                    top : 0
                });
            });

            $(document).on( "scroll", function() {
                if (window.scrollY + 10 >= $('#skills').position().top) {
                    $('#scrollToTop').show();
                } else {
                    $('#scrollToTop').hide();
                }
            } );

            $(document).on('click', '.btn_more', function (event) {
                if ($(this).attr('aria-expanded') === 'true') {
                    $(this).html(`닫기 <i class="fa-solid fa-angle-up"></i>`);
                } else {
                    $(this).html(`이미지 더 보기 <i class="fa-solid fa-angle-down"></i>`);
                }
            });
        },
    }